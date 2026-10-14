(() => {
  const projectDescriptions = [
    {
      src: './assets/field-team.jpg',
      alt: 'CGAS Lab researchers discussing multi-agent knowledge graph benchmarks around a workstation at Mudd Hall.',
      number: 'FIG. 01',
      badge: 'MUDD HALL · NU',
      title: 'CGAS Lab Symposium',
      caption: 'Reviewing multi-hop citation provenance (PaperPulse) and regulatory variant attribution benchmarks at Mudd Hall.'
    },
    {
      src: './assets/field-workspace.jpg',
      alt: 'Computational dry-lab working session running Quest HPC and AlphaGenome chromatin accessibility jobs.',
      number: 'FIG. 02',
      badge: 'DRY LAB · QUEST HPC',
      title: 'Computational Working Session',
      caption: 'Calibrating recursive Bayesian state-space estimators and ChromAlphaGenome splice-disruption models across ClinVar cohorts.'
    },
    {
      src: './assets/field-city.jpg',
      alt: 'Research corridor connecting Evanston McCormick School of Engineering and downtown scientific institutes.',
      number: 'FIG. 03',
      badge: 'EVANSTON · IL',
      title: 'Northwestern Research Corridor',
      caption: 'Cross-disciplinary collaboration bridging Computer Science, NICO complex systems, and structural bioinformatics.'
    }
  ];

  const labThrusts = [
    {
      name: 'Thrust 01 · Autonomous Literature & Citation Knowledge Graphs',
      award: 'PaperPulse · ArXiv, PubMed, Semantic Scholar & OpenAlex',
      tech: ['Scientific Knowledge Graphs', 'Neo4j & pgvector', 'Claim Provenance', 'Multi-Agent Verification'],
      description: 'Constructs continuously updated citation-concept subgraphs and hybrid dense/graph indexes over millions of preprints and biomedical articles, enforcing zero-hallucination provenance for every synthesized hypothesis.',
      repoUrl: 'https://github.com/aazminu/paper-pulse',
      labAnchor: './lab/#thrusts'
    },
    {
      name: 'Thrust 02 · Regulatory Genomics & Non-Coding Variant Attribution',
      award: 'ChromAlphaGenome · AlphaGenome Atlas, ClinVar & ENCODE v4',
      tech: ['Chromatin Accessibility', 'Sashimi Splice ΔPSI', 'DeepLIFT / ChromBPNet', 'Variant Prioritization'],
      description: 'Decodes cis-regulatory grammar and cryptic splice-site disruptions in non-coding human disease cohorts by coupling base-resolution chromatin accessibility log-fold-change tracks with MaxEntScan ΔPSI modeling (0.941 AUROC).',
      repoUrl: 'https://github.com/aazminu/chrom-alphagenome',
      labAnchor: './lab/#thrusts'
    },
    {
      name: 'Thrust 03 · Recursive Bayesian Inference & Uncertainty Quantification',
      award: 'BayesKalmanTrace · State-Space Filtering & Log-Linear Pooling',
      tech: ['Kalman / RTS Smoothing', 'Missing-Data Marginalization', 'Empirical Bayes', 'Calibrated Posteriors'],
      description: 'Propagates exact analytical state-space posteriors across noisy longitudinal and single-particle velocity trajectories with intermittent observation dropouts, fusing multi-scale volatility descriptors via log-linear pooling.',
      repoUrl: 'https://github.com/aazminu/bayes-kalman-trace',
      labAnchor: './lab/#thrusts'
    },
    {
      name: 'Thrust 04 · Structural Pocket Partitioning & Quantum Energetics',
      award: 'FoldEnergetics-xTB · AlphaFold 3, Foldseek 3Di & GFN2-xTB',
      tech: ['PAE Graph Partitioning', 'Foldseek 3Di Homology', 'Semiempirical QM (xTB)', 'ChEMBL Bioactivity'],
      description: 'Partitions AlphaFold 3 Predicted Aligned Error matrices into rigid structural domains, identifies conserved cryptic binding pockets via Foldseek 3Di alignments, and ranks scaffolds with GFN2-xTB tight-binding energetics.',
      repoUrl: 'https://github.com/aazminu/fold-energetics-xtb',
      labAnchor: './lab/#thrusts'
    }
  ];

  const createText = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    element.textContent = text;
    return element;
  };

  function addFeaturedProject(section) {
    if (section.querySelector('.portfolio-featured')) return;
    const cards = section.querySelectorAll('article');
    if (cards.length !== 4) return;

    const firstCard = cards[0];
    const grid = firstCard.parentElement;
    const sourceTitle = firstCard.querySelector('h2');
    const sourceTech = firstCard.querySelector('ul');
    const sourceDescription = firstCard.querySelector('p');
    const sourceLink = firstCard.querySelector('a');
    if (!grid || !sourceTitle || !sourceTech || !sourceDescription || !sourceLink) return;

    const featured = document.createElement('article');
    featured.className = 'portfolio-featured';
    featured.setAttribute('aria-label', 'Featured flagship research software');

    const main = document.createElement('div');
    main.className = 'portfolio-featured__main';
    const kicker = document.createElement('p');
    kicker.className = 'portfolio-featured__kicker';
    kicker.append(
      createText('span', 'portfolio-featured__label', 'FEATURED — FLAGSHIP RESEARCH ENGINE'),
      createText('span', 'portfolio-featured__index', '01 / 04')
    );

    const titleRow = document.createElement('div');
    titleRow.className = 'portfolio-featured__title-row';
    const title = createText('h2', 'portfolio-featured__title', sourceTitle.textContent.trim());
    const status = createText('span', 'portfolio-featured__status', 'Active Open-Source System');
    titleRow.append(title, status);

    const description = createText('p', 'portfolio-featured__description', sourceDescription.textContent.trim());
    const technologies = sourceTech.cloneNode(true);
    technologies.className = 'portfolio-featured__tech';
    technologies.setAttribute('aria-label', 'Core system architecture');
    const cta = sourceLink.cloneNode(true);
    cta.className = 'portfolio-featured__cta';
    cta.textContent = 'Explore PaperPulse repository on GitHub ↗';
    cta.setAttribute('aria-label', 'Explore PaperPulse repository on GitHub');

    main.append(kicker, titleRow, description, technologies, cta);

    const aside = document.createElement('aside');
    aside.className = 'portfolio-featured__meta';
    aside.setAttribute('aria-label', 'System metadata');
    const metadata = [
      ['SYSTEM TYPE', 'Autonomous Literature & Knowledge Graph Engine'],
      ['ROLE', 'Principal Architect · CGAS Lab'],
      ['ARCHITECTURE', 'FastAPI · PostgreSQL (pgvector) · Neo4j'],
      ['SOURCE CODE', 'github.com/aazminu/paper-pulse']
    ];
    for (const [label, value] of metadata) {
      const row = document.createElement('div');
      row.className = 'portfolio-featured__meta-row';
      row.append(createText('span', 'portfolio-featured__meta-label', label));
      row.append(createText('strong', 'portfolio-featured__meta-value', value));
      aside.append(row);
    }
    aside.append(createText('span', 'portfolio-featured__mark', 'AA.'));
    featured.append(main, aside);

    firstCard.hidden = true;
    firstCard.setAttribute('aria-hidden', 'true');
    grid.before(featured);
  }

  function addFieldGallery(footer) {
    if (document.querySelector('.portfolio-field')) return;
    const section = document.createElement('section');
    section.className = 'portfolio-field';
    section.setAttribute('aria-labelledby', 'portfolio-field-title');

    const head = document.createElement('div');
    head.className = 'sectionHead portfolio-field__head';
    head.append(createText('p', 'sectionLabel', 'Northwestern University · Evanston & Chicago'));
    const title = createText('h1', 'portfolio-field__title', 'In the Lab');
    title.id = 'portfolio-field-title';
    head.append(title);
    section.append(head);

    const gallery = document.createElement('div');
    gallery.className = 'portfolio-field__grid';
    gallery.setAttribute('aria-label', 'CGAS Lab research environment');
    for (const item of projectDescriptions) {
      const figure = document.createElement('figure');
      figure.className = 'portfolio-field__figure';
      const frame = document.createElement('div');
      frame.className = 'portfolio-field__image';
      const image = document.createElement('img');
      image.src = item.src;
      image.alt = item.alt;
      image.loading = 'lazy';
      const badgeTag = createText('span', 'portfolio-field__sample', item.badge);
      frame.append(image, badgeTag);

      const caption = document.createElement('figcaption');
      caption.append(createText('span', 'portfolio-field__number', item.number));
      const text = document.createElement('div');
      text.append(createText('strong', 'portfolio-field__caption-title', item.title));
      text.append(createText('p', 'portfolio-field__caption-copy', item.caption));
      caption.append(text);
      figure.append(frame, caption);
      gallery.append(figure);
    }
    section.append(gallery);
    footer.before(section);
  }

  function addResearchLabSection(footer) {
    if (document.getElementById('research-lab')) return;

    const section = document.createElement('section');
    section.id = 'research-lab';
    section.className = 'portfolio-lab';
    section.setAttribute('aria-labelledby', 'portfolio-lab-title');

    const head = document.createElement('div');
    head.className = 'sectionHead';
    head.append(createText('p', 'sectionLabel', 'Department of Computer Science & NICO · Northwestern University'));
    const title = createText('h1', 'sectionTitle', 'CGAS Research Lab');
    title.id = 'portfolio-lab-title';
    head.append(title);
    section.append(head);

    const featured = document.createElement('article');
    featured.className = 'portfolio-featured';
    featured.setAttribute('aria-label', 'Computational Genomics & Agentic Systems Lab Overview');

    const main = document.createElement('div');
    main.className = 'portfolio-featured__main';
    const kicker = document.createElement('p');
    kicker.className = 'portfolio-featured__kicker';
    kicker.append(
      createText('span', 'portfolio-featured__label', 'COMPUTATIONAL / DRY LAB — NORTHWESTERN CS & NICO'),
      createText('span', 'portfolio-featured__index', 'MUDD HALL · EVANSTON, IL')
    );

    const titleRow = document.createElement('div');
    titleRow.className = 'portfolio-featured__title-row';
    titleRow.append(
      createText('h2', 'portfolio-featured__title', 'Computational Genomics & Agentic Systems (CGAS) Lab'),
      createText('span', 'portfolio-featured__status', 'Non-Commercial Research')
    );

    const description = createText(
      'p',
      'portfolio-featured__description',
      'Directed by Lead Researcher Abdullah Azmi in collaboration with faculty across Northwestern Computer Science and the Northwestern Institute on Complex Systems (NICO), the CGAS Lab investigates autonomous multi-agent reasoning, citation-grounded scientific knowledge graphs (PaperPulse), base-resolution cis-regulatory and splice-disruption modeling (ChromAlphaGenome), recursive Bayesian state-space filtering (BayesKalmanTrace), and quantum-chemical pocket energetics (FoldEnergetics-xTB).'
    );

    const techList = document.createElement('ul');
    techList.className = 'portfolio-featured__tech';
    for (const tag of [
      'Scientific Knowledge Graphs',
      'Regulatory Genomics (AlphaGenome)',
      'Bayesian State-Space Inference',
      'Protein Pocket Energetics (xTB)',
      'Google Antigravity Workflows'
    ]) {
      techList.append(createText('li', '', tag));
    }

    const actions = document.createElement('div');
    actions.className = 'portfolio-lab__actions';
    const labLink = createText('a', 'portfolio-lab__btn', 'Open Full CGAS Lab Portal (/lab/) ↗');
    labLink.href = './lab/';
    const ghLink = createText('a', 'portfolio-lab__btn', 'Lab GitHub Repositories (github.com/aazminu) ↗');
    ghLink.href = 'https://github.com/aazminu';
    ghLink.target = '_blank';
    ghLink.rel = 'noreferrer';
    actions.append(labLink, ghLink);

    main.append(kicker, titleRow, description, techList, actions);

    const aside = document.createElement('aside');
    aside.className = 'portfolio-featured__meta';
    const metaRows = [
      ['INSTITUTION', 'Northwestern University · CS & NICO'],
      ['LEAD RESEARCHER', 'Abdullah Azmi · Mudd Hall 3510'],
      ['METHODOLOGY', 'Computational / Dry Lab'],
      ['OPEN-SOURCE SUITE', '4 Verified Packages on github.com/aazminu']
    ];
    for (const [label, value] of metaRows) {
      const row = document.createElement('div');
      row.className = 'portfolio-featured__meta-row';
      row.append(createText('span', 'portfolio-featured__meta-label', label));
      row.append(createText('strong', 'portfolio-featured__meta-value', value));
      aside.append(row);
    }
    aside.append(createText('span', 'portfolio-featured__mark', 'LAB.'));
    featured.append(main, aside);
    section.append(featured);

    const grid = document.createElement('div');
    grid.className = '_grid_1aul7_9';
    for (const thrust of labThrusts) {
      const card = document.createElement('article');
      card.className = '_card_1aul7_24';
      card.append(createText('h2', '_name_1aul7_33', thrust.name));
      card.append(createText('span', '_award_1aul7_42', thrust.award));
      const ul = document.createElement('ul');
      ul.className = '_tech_1aul7_51';
      for (const item of thrust.tech) {
        ul.append(createText('li', '', item));
      }
      card.append(ul);
      card.append(createText('p', '_description_1aul7_63', thrust.description));

      const linksRow = document.createElement('div');
      linksRow.className = 'portfolio-lab__card-links';
      const repoA = createText('a', '_link_1aul7_72', 'github repo ↗');
      repoA.href = thrust.repoUrl;
      repoA.target = '_blank';
      repoA.rel = 'noreferrer';
      const labA = createText('a', '_link_1aul7_72', 'lab specification ↗');
      labA.href = thrust.labAnchor;
      linksRow.append(repoA, labA);
      card.append(linksRow);
      grid.append(card);
    }
    section.append(grid);

    const fieldSection = document.querySelector('.portfolio-field');
    if (fieldSection) {
      fieldSection.before(section);
    } else {
      footer.before(section);
    }

    const navLinks = document.querySelector('._links_p88qd_61');
    if (navLinks && !navLinks.querySelector('[data-lab-nav]')) {
      const labBtn = createText('button', '', 'Research Lab');
      labBtn.setAttribute('data-lab-nav', 'true');
      labBtn.addEventListener('click', () => {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      const resumeAnchor = navLinks.querySelector('a');
      if (resumeAnchor) {
        resumeAnchor.before(labBtn);
      } else {
        navLinks.append(labBtn);
      }
    }
  }

  function enhance() {
    const projects = document.getElementById('projects');
    const footer = document.getElementById('footer');
    if (projects) addFeaturedProject(projects);
    if (footer) {
      addFieldGallery(footer);
      addResearchLabSection(footer);
    }
  }

  const root = document.getElementById('root');
  if (!root) return;
  const observer = new MutationObserver(enhance);
  observer.observe(root, { childList: true, subtree: true });
  enhance();
})();
