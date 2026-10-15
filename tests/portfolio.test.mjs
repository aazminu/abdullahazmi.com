import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const CORE_16_REPOS = [
  'paper-pulse',
  'chrom-alphagenome',
  'bayes-kalman-trace',
  'fold-energetics-xtb',
  'airtight-container',
  'LeadAI',
  'odyssey',
  'mermaid',
  'FarmData2',
  'data-cleaning-hackumass',
  'python-riscv-simulator',
  'dividend-capture-spark',
  'world-model-compression-mpc',
  'adaptive-ml-moderation',
  'agentic-scrape-repair',
  'movie-recc'
];

const ADDITIONAL_6_REPOS = [
  'sp500_platform',
  'AP-Study-Guide-Generator',
  'Environmental-Disaster-Classifier',
  'grab-pic',
  'comic-subscription',
  'motorcycle-rideability-index'
];

const ALL_22_REPOS = [...CORE_16_REPOS, ...ADDITIONAL_6_REPOS];

const HTML_PAGES = [
  { route: '/', relPath: 'index.html', canonical: 'https://abdullahazmi.com/' },
  { route: '/lab/', relPath: 'lab/index.html', canonical: 'https://abdullahazmi.com/lab/' },
  { route: '/research/', relPath: 'research/index.html', canonical: 'https://abdullahazmi.com/lab/' }
];

export function extractJsonLdBlocks(htmlContent) {
  if (typeof htmlContent !== 'string' || htmlContent.trim() === '') {
    return [];
  }
  const regex = /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  const blocks = [];
  let match;
  while ((match = regex.exec(htmlContent)) !== null) {
    blocks.push(match[1].trim());
  }
  return blocks;
}

export function extractRelativeAssetRefs(htmlContent) {
  if (typeof htmlContent !== 'string' || htmlContent.trim() === '') {
    return [];
  }
  const regex = /\b(?:src|href)=["']([^"']+)["']/gi;
  const refs = [];
  let match;
  while ((match = regex.exec(htmlContent)) !== null) {
    const raw = match[1].trim();
    if (
      !raw ||
      raw.startsWith('http://') ||
      raw.startsWith('https://') ||
      raw.startsWith('mailto:') ||
      raw.startsWith('tel:') ||
      raw.startsWith('data:') ||
      raw.startsWith('#')
    ) {
      continue;
    }
    const cleanPath = raw.split('#')[0].split('?')[0];
    if (cleanPath) {
      refs.push(cleanPath);
    }
  }
  return refs;
}

export function mapSitemapUrlToLocalPath(locUrl) {
  const prefix = 'https://abdullahazmi.com/';
  if (typeof locUrl !== 'string' || !locUrl.startsWith(prefix)) {
    throw new Error(`Invalid domain in sitemap loc: ${locUrl}`);
  }
  const subPath = locUrl.slice(prefix.length);
  if (subPath === '' || subPath.endsWith('/')) {
    return path.posix.join(subPath, 'index.html');
  }
  return subPath;
}

test('HTML pages (/, /lab/, /research/) have valid structure, metadata, and resolved local references', () => {
  for (const page of HTML_PAGES) {
    const fullPath = path.join(ROOT, page.relPath);
    assert.ok(fs.existsSync(fullPath), `Expected HTML page for ${page.route} at ${page.relPath}`);
    const html = fs.readFileSync(fullPath, 'utf8');

    assert.match(html, /^<!DOCTYPE html>/i, `${page.relPath} must start with <!DOCTYPE html>`);
    assert.match(html, /<html\s+lang=["']en["']>/i, `${page.relPath} must specify <html lang="en">`);
    assert.match(html, /<meta\s+charset=["']UTF-8["']\s*\/?>/i, `${page.relPath} must specify UTF-8 charset`);
    assert.match(html, /<meta\s+name=["']viewport["']/i, `${page.relPath} must specify viewport meta`);
    assert.match(html, /<meta[\s\S]*?name=["']description["']/i, `${page.relPath} must specify meta description`);
    assert.match(html, /<title>[^<]+<\/title>/i, `${page.relPath} must have a non-empty <title>`);
    assert.ok(
      html.includes(`<link rel="canonical" href="${page.canonical}" />`),
      `${page.relPath} must include canonical link ${page.canonical}`
    );
    assert.match(html, /<div\s+id=["']root["']>/i, `${page.relPath} must contain #root mount container`);

    const refs = extractRelativeAssetRefs(html);
    assert.ok(refs.length > 0, `${page.relPath} should reference local assets`);
    const pageDir = path.dirname(fullPath);
    for (const ref of refs) {
      const resolved = path.resolve(pageDir, ref);
      assert.ok(
        fs.existsSync(resolved),
        `Broken relative reference "${ref}" in ${page.relPath} (resolved to ${resolved})`
      );
      const stat = fs.statSync(resolved);
      if (stat.isDirectory()) {
        const indexInDir = path.join(resolved, 'index.html');
        assert.ok(fs.existsSync(indexInDir), `Directory reference "${ref}" in ${page.relPath} missing index.html`);
      } else {
        assert.ok(stat.size > 0, `Referenced file "${ref}" in ${page.relPath} is empty`);
      }
    }
  }

  const labHtml = fs.readFileSync(path.join(ROOT, 'lab/index.html'), 'utf8').replace(/\r\n/g, '\n');
  const researchHtml = fs.readFileSync(path.join(ROOT, 'research/index.html'), 'utf8').replace(/\r\n/g, '\n');
  assert.strictEqual(labHtml, researchHtml, '/lab/index.html and /research/index.html mirror must remain in sync');

  for (const thrust of ['THRUST 01', 'THRUST 02', 'THRUST 03', 'THRUST 04']) {
    assert.ok(labHtml.includes(thrust), `/lab/index.html must include ${thrust}`);
  }
  for (const sectionId of ['id="hero"', 'id="mission"', 'id="thrusts"', 'id="software"', 'id="publications"', 'id="people"', 'id="footer"']) {
    assert.ok(labHtml.includes(sectionId), `/lab/index.html must include section ${sectionId}`);
  }
});

test('JSON-LD structured data is valid Schema.org JSON across /, /lab/, and /research/', () => {
  for (const page of HTML_PAGES) {
    const html = fs.readFileSync(path.join(ROOT, page.relPath), 'utf8');
    const blocks = extractJsonLdBlocks(html);
    assert.ok(blocks.length >= 1, `${page.relPath} must contain at least one application/ld+json block`);

    for (const rawBlock of blocks) {
      const parsed = JSON.parse(rawBlock);
      assert.strictEqual(parsed['@context'], 'https://schema.org', `${page.relPath} JSON-LD @context must be https://schema.org`);
      assert.ok(Array.isArray(parsed['@graph']) && parsed['@graph'].length > 0, `${page.relPath} JSON-LD must define a non-empty @graph`);

      const types = new Set(parsed['@graph'].map((node) => node['@type']));
      assert.ok(types.has('ResearchOrganization'), `${page.relPath} JSON-LD must include a ResearchOrganization node`);

      const orgNode = parsed['@graph'].find((node) => node['@type'] === 'ResearchOrganization');
      assert.strictEqual(orgNode.name, 'Computational Genomics & Agentic Systems (CGAS) Lab');
      assert.strictEqual(orgNode.url, 'https://abdullahazmi.com/lab/');

      if (page.route === '/') {
        assert.ok(types.has('ProfilePage'), 'index.html JSON-LD must include ProfilePage');
        assert.ok(types.has('Person'), 'index.html JSON-LD must include Person');
        const person = parsed['@graph'].find((node) => node['@type'] === 'Person');
        assert.strictEqual(person.name, 'Abdullah Azmi');
        assert.strictEqual(person.email, 'mailto:m4u5t4@u.northwestern.edu');
        assert.ok(person.sameAs.includes('https://github.com/aazminu'));
        assert.ok(person.sameAs.includes('https://orcid.org/0009-0004-8172-6394'));
      } else {
        const codeNodes = parsed['@graph'].filter((node) => node['@type'] === 'SoftwareSourceCode');
        assert.strictEqual(codeNodes.length, 4, `${page.relPath} JSON-LD must include all 4 flagship SoftwareSourceCode packages`);
        const repoUrls = codeNodes.map((n) => n.codeRepository);
        for (const flagship of ['paper-pulse', 'chrom-alphagenome', 'bayes-kalman-trace', 'fold-energetics-xtb']) {
          assert.ok(repoUrls.includes(`https://github.com/aazminu/${flagship}`), `Missing ${flagship} in ${page.relPath} JSON-LD`);
        }
      }
    }
  }
});

test('Sitemap, robots.txt, CNAME, and .nojekyll are valid and map to existing files', () => {
  const cnamePath = path.join(ROOT, 'CNAME');
  assert.ok(fs.existsSync(cnamePath), 'CNAME must exist');
  assert.strictEqual(fs.readFileSync(cnamePath, 'utf8').trim(), 'abdullahazmi.com');

  assert.ok(fs.existsSync(path.join(ROOT, '.nojekyll')), '.nojekyll must exist');

  const robotsPath = path.join(ROOT, 'robots.txt');
  assert.ok(fs.existsSync(robotsPath), 'robots.txt must exist');
  const robots = fs.readFileSync(robotsPath, 'utf8');
  assert.match(robots, /User-agent:\s*\*/i);
  assert.match(robots, /Allow:\s*\//i);
  assert.match(robots, /Sitemap:\s*https:\/\/abdullahazmi\.com\/sitemap\.xml/i);

  const sitemapPath = path.join(ROOT, 'sitemap.xml');
  assert.ok(fs.existsSync(sitemapPath), 'sitemap.xml must exist');
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  assert.match(sitemap, /^<\?xml version=["']1\.0["'] encoding=["']UTF-8["']\?>/);
  assert.match(sitemap, /<urlset xmlns=["']http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9["']>/);

  const locMatches = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  const expectedLocs = [
    'https://abdullahazmi.com/',
    'https://abdullahazmi.com/lab/',
    'https://abdullahazmi.com/research/',
    'https://abdullahazmi.com/assets/abdullah-azmi-resume.pdf'
  ];
  for (const expectedLoc of expectedLocs) {
    assert.ok(locMatches.includes(expectedLoc), `sitemap.xml missing <loc>${expectedLoc}</loc>`);
  }

  for (const loc of locMatches) {
    const relFile = mapSitemapUrlToLocalPath(loc);
    const resolved = path.join(ROOT, relFile);
    assert.ok(fs.existsSync(resolved), `Sitemap URL ${loc} maps to non-existent file ${relFile}`);
    assert.ok(fs.statSync(resolved).size > 0, `Sitemap target ${relFile} is empty`);
  }
});

test('Static assets (SVG, PDF, JPEG, CSS, JS workbench) pass binary and structural integrity checks', () => {
  const svgFiles = [
    'favicon.svg',
    'assets/abdullah-azmi-avatar.svg',
    'assets/northwestern-student-avatar.svg'
  ];
  for (const rel of svgFiles) {
    const content = fs.readFileSync(path.join(ROOT, rel), 'utf8');
    assert.match(content, /<svg[\s>]/i, `${rel} must contain an <svg> element`);
    assert.match(content, /<\/svg>/i, `${rel} must close </svg>`);
  }

  const pdfPrimary = fs.readFileSync(path.join(ROOT, 'assets/abdullah-azmi-resume.pdf'));
  const pdfMirror = fs.readFileSync(path.join(ROOT, 'assets/northwestern-student-resume.pdf'));
  assert.ok(pdfPrimary.length > 1000, 'Resume PDF must be non-trivial in size');
  assert.strictEqual(pdfPrimary.subarray(0, 5).toString('ascii'), '%PDF-', 'Resume PDF must start with %PDF- header');
  assert.ok(pdfPrimary.equals(pdfMirror), 'Primary and mirror resume PDFs must be byte-identical');

  const jpgFiles = [
    'assets/field-city.jpg',
    'assets/field-team.jpg',
    'assets/field-workspace.jpg'
  ];
  for (const rel of jpgFiles) {
    const buf = fs.readFileSync(path.join(ROOT, rel));
    assert.ok(buf.length > 10000, `${rel} must be a valid non-empty photograph`);
    assert.strictEqual(buf[0], 0xff, `${rel} missing JPEG SOI byte 0`);
    assert.strictEqual(buf[1], 0xd8, `${rel} missing JPEG SOI byte 1`);
    assert.strictEqual(buf[2], 0xff, `${rel} missing JPEG marker byte 2`);
  }

  const cssFiles = ['assets/index-yL4Jrv0C.css', 'assets/extension.css'];
  for (const rel of cssFiles) {
    const css = fs.readFileSync(path.join(ROOT, rel), 'utf8');
    const opens = (css.match(/\{/g) || []).length;
    const closes = (css.match(/\}/g) || []).length;
    assert.ok(opens > 10, `${rel} should contain CSS rules`);
    assert.strictEqual(opens, closes, `${rel} has unbalanced curly braces (${opens} open vs ${closes} close)`);
  }
  const extensionCss = fs.readFileSync(path.join(ROOT, 'assets/extension.css'), 'utf8');
  assert.match(extensionCss, /min-width:\s*0[\s\S]*?max-width:\s*100%/i, 'extension.css must enforce min-width: 0 and max-width: 100% against mobile horizontal overflow');

  const extensionJs = fs.readFileSync(path.join(ROOT, 'assets/extension.js'), 'utf8');
  for (const token of ['BayesKalmanTrace', 'ChromAlphaGenome', 'RISC-V', 'Airtight Container']) {
    assert.ok(extensionJs.includes(token), `assets/extension.js workbench must include ${token}`);
  }
  for (const note of ['LAB NOTE 01', 'LAB NOTE 02', 'LAB NOTE 03', 'LAB NOTE 04', 'LAB NOTE 05']) {
    assert.ok(extensionJs.includes(note), `assets/extension.js must include ${note}`);
  }
});

test('All 16 core systems and 6 additional repositories link to standalone GitHub repositories with zero generic fallbacks', () => {
  const bundleJs = fs.readFileSync(path.join(ROOT, 'assets/index-VqgN4zkm.js'), 'utf8');
  const labHtml = fs.readFileSync(path.join(ROOT, 'lab/index.html'), 'utf8');
  const researchHtml = fs.readFileSync(path.join(ROOT, 'research/index.html'), 'utf8');
  const profilePlan = fs.readFileSync(path.join(ROOT, 'PROFILE_PLAN.md'), 'utf8');
  const readme = fs.readFileSync(path.join(ROOT, 'README.md'), 'utf8');
  const provenance = fs.readFileSync(path.join(ROOT, 'provenance.md'), 'utf8');

  assert.ok(
    !bundleJs.includes('?tab=repositories'),
    'assets/index-VqgN4zkm.js must not use generic ?tab=repositories fallback links for system cards'
  );

  for (const repo of CORE_16_REPOS) {
    const url = `https://github.com/aazminu/${repo}`;
    assert.ok(bundleJs.includes(url), `Main portfolio bundle missing standalone link ${url}`);
    assert.ok(labHtml.includes(url), `lab/index.html missing standalone link ${url}`);
    assert.ok(researchHtml.includes(url), `research/index.html missing standalone link ${url}`);
    assert.ok(profilePlan.includes(url), `PROFILE_PLAN.md missing standalone link ${url}`);
    assert.ok(readme.includes(url), `README.md missing standalone link ${url}`);
    assert.ok(provenance.includes(url), `provenance.md missing standalone link ${url}`);
  }

  for (const repo of ALL_22_REPOS) {
    const url = `https://github.com/aazminu/${repo}`;
    assert.ok(readme.includes(url), `README.md missing repository link ${url}`);
    assert.ok(provenance.includes(url), `provenance.md missing repository link ${url}`);
  }
});

test('Validator helpers handle empty inputs, external URLs, and invalid sitemap domains safely', () => {
  assert.deepStrictEqual(extractJsonLdBlocks(''), []);
  assert.deepStrictEqual(extractJsonLdBlocks('<html><head></head></html>'), []);
  assert.deepStrictEqual(
    extractRelativeAssetRefs('<a href="https://github.com/aazminu">GH</a><a href="mailto:m4u5t4@u.northwestern.edu">Mail</a><a href="#top">Top</a><script src="./assets/extension.js?v=1#hash"></script>'),
    ['./assets/extension.js']
  );
  assert.strictEqual(mapSitemapUrlToLocalPath('https://abdullahazmi.com/'), 'index.html');
  assert.strictEqual(mapSitemapUrlToLocalPath('https://abdullahazmi.com/lab/'), 'lab/index.html');
  assert.strictEqual(
    mapSitemapUrlToLocalPath('https://abdullahazmi.com/assets/abdullah-azmi-resume.pdf'),
    'assets/abdullah-azmi-resume.pdf'
  );
  assert.throws(
    () => mapSitemapUrlToLocalPath('https://example.com/other'),
    /Invalid domain in sitemap loc/
  );
});
