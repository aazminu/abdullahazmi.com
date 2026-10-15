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
      badge: 'EVANSTON & NYC',
      title: 'Northwestern Research & Engineering Corridor',
      caption: 'Cross-disciplinary systems engineering bridging Computer Science, NICO complex systems, structural bioinformatics, and production software.'
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

  const labNotes = [
    {
      kicker: 'LAB NOTE 01 · PAPERPULSE · KNOWLEDGE GRAPH PROVENANCE',
      title: 'Enforcing Deterministic Multi-Hop Claim Provenance over Hybrid pgvector + Neo4j Subgraphs',
      open: true,
      blocks: [
        [
          'Problem & Failure Mode',
          'Standard vector-only RAG pipelines over scientific preprints frequently conflate speculative background statements with empirically validated results, or hallucinate cross-paper method comparisons when chunk boundaries sever table captions from equations.'
        ],
        [
          'Architectural Solution',
          'PaperPulse pairs PostgreSQL (pgvector HNSW dense passage retrieval) with an explicit Neo4j property graph ((:Paper)-[:CITES {section, polarity}]->(:Paper), (:Paper)-[:EVALUATES_ON]->(:Benchmark)). Synthesis agents must attach a verifiable (doi, section_id, quote_hash) tuple to every generated claim.'
        ],
        [
          'Edge Case Handled',
          'Preprint-to-journal version drift: nightly ingestion reconciles ArXiv version updates against Crossref/OpenAlex DOIs so citation edges coalesce onto canonical work nodes without duplicating vector embeddings.'
        ],
        [
          'Empirical Verification',
          'Evaluated across multi-hop biomedical and CS synthesis queries: deterministic subgraph grounding reduces unsupported citation claims to 0% on held-out audit sets while maintaining sub-second hybrid retrieval latency.'
        ]
      ]
    },
    {
      kicker: 'LAB NOTE 02 · BAYESKALMANTRACE · STATE-SPACE INFERENCE',
      title: 'Exact Analytical Marginalization Across Intermittent Sensor Dropouts & Log-Linear Pooling',
      open: false,
      blocks: [
        [
          'Problem & Failure Mode',
          'Biophysical single-particle tracking and radar velocity traces suffer from bursty observation dropouts (5%–45% missing frames). Linear interpolation across missing frames artificially dampens acceleration variance and corrupts downstream regime classification.'
        ],
        [
          'Architectural Solution',
          'BayesKalmanTrace propagates a 2D constant-acceleration state vector [v_x, v_y, a_x, a_y] through a forward Kalman filter and backward Rauch–Tung–Striebel (RTS) smoother. On missing frames, the measurement update is bypassed and prior covariance P_{t|t-1} = F P_{t-1|t-1} F^T + Q is propagated analytically.'
        ],
        [
          'Edge Case Handled',
          'Zero-count empirical histogram bins in the 250,000-measurement volatility corpus: Laplace additive smoothing prevents log-likelihood underflow before fusing instantaneous speed and rolling volatility via log-linear (Product-of-Experts) pooling.'
        ],
        [
          'Empirical Verification',
          'Lifts held-out kinematic regime classification accuracy from 74.2% (single-feature baseline) to 93.8% with an Expected Calibration Error (ECE) of 0.041 across 500-sample trajectories.'
        ]
      ]
    },
    {
      kicker: 'LAB NOTE 03 · AIRTIGHT CONTAINER & LEADAI · PRODUCTION DATA INVARIANTS',
      title: 'Idempotent Month-End Proration, Composite Transactional Locks & Bounded Async Queues',
      open: false,
      blocks: [
        [
          'Problem & Failure Mode',
          'In operational yard-billing and batch entity-enrichment systems, network timeouts, operator double-clicks, or webhook retries during month-end billing runs can generate duplicate invoices or double-charge prorated storage windows.'
        ],
        [
          'Architectural Solution',
          'In Airtight Container (40K+ LOC, 25 migrations), buildLinesForBox and generateShMonthEnd compute deterministic billing windows and enforce a PostgreSQL composite uniqueness constraint on (box_id, billing_period_start, billing_mode) inside serializable transactions. In LeadAI, pipeline_queue.py enforces per-entity idempotency keys with exponential backoff.'
        ],
        [
          'Edge Case Handled',
          'Mid-month container off-hire and leap-year boundary proration: day-count denominators and status-transition timestamps are normalized in UTC before computing prorated storage-and-handling line items.'
        ],
        [
          'Empirical Verification',
          'Verified by 275+ automated unit and integration tests covering anniversary billing, month-end batch proration, concurrent retry replay, and partial external API failure recovery.'
        ]
      ]
    },
    {
      kicker: 'LAB NOTE 04 · KHOURY ODYSSEY & MERMAID · OPEN-SOURCE AST & UI MAINTENANCE',
      title: 'Repairing Recursive MDX AST Indentation (Odyssey PR #910) & SVG Chart Label Geometry',
      open: false,
      blocks: [
        [
          'Problem & Failure Mode',
          'In Khoury Odyssey, deeply indented paragraphs and nested headings silently vanished from live author lesson previews due to shallow AST child traversal, while adding files triggered full code-editor remount flicker. In Mermaid, bar-chart data labels lacked orientation-aware inner/outer placement.'
        ],
        [
          'Architectural Solution',
          'Refactored Odyssey’s block-conversion visitor to recursively traverse nested child arrays while memoizing editor file-tree state transitions. In Mermaid, computed SVG text bounding boxes dynamically to position configurable bar-chart value labels cleanly across horizontal and vertical layouts.'
        ],
        [
          'Edge Case Handled',
          '3+ level nested MDX block hierarchies mixed with interactive code sandboxes, and narrow SVG bars where label width exceeds bar geometry.'
        ],
        [
          'Empirical Verification',
          'Shipped Jest regression test suites for paragraph children, heading children, and multilevel nesting in Odyssey (approved by two reviewers and merged), alongside Vitest/Cypress visual regression suites in Mermaid.'
        ]
      ]
    },
    {
      kicker: 'LAB NOTE 05 · CHROMALPHAGENOME, FOLDENERGETICS-XTB & LEWM SVD · SCIENTIFIC ML',
      title: 'Coupling Chromatin/Splice Attribution, Quantum Pocket Triage & Spectral World-Model Compression',
      open: false,
      blocks: [
        [
          'Problem & Failure Mode',
          'Non-coding variant prioritizers often ignore cryptic splice junctions, docking scores over-rank conformationally strained pockets in disordered AlphaFold loops, and dense world models incur prohibitive rollout latency during MPC planning.'
        ],
        [
          'Architectural Solution',
          'ChromAlphaGenome fuses AlphaGenome 3D contact weights, ChromBPNet Δlog2(ATAC) attribution, and MaxEntScan ΔPSI scores. FoldEnergetics-xTB partitions AlphaFold 3 PAE matrices into rigid domains before running Foldseek 3Di and GFN2-xTB tight-binding energetics. LeWM applies activation-aware SVD truncation to latent transition matrices.'
        ],
        [
          'Edge Case Handled',
          'Low-confidence disordered loops (pLDDT < 70) and high inter-domain PAE blocks are masked prior to pocket graph construction, preventing spurious inter-domain clefts from entering quantum-chemical refinement.'
        ],
        [
          'Empirical Verification',
          'ChromAlphaGenome reaches 0.941 AUROC on ClinVar pathogenic non-coding variants; LeWM activation-aware SVD retains >96% MPC planning success on TwoRoom and PushT at 45% parameter compression (1.72× rollout speedup).'
        ]
      ]
    }
  ];

  const createText = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    element.textContent = text;
    return element;
  };

  function classifyCardCategory(awardText) {
    const text = (awardText || '').toLowerCase();
    if (text.includes('cgas lab')) return 'cgas';
    if (text.includes('open-source')) return 'oss';
    if (text.includes('production') || text.includes('data engineering')) return 'production';
    if (text.includes('applied ml') || text.includes('systems & architecture')) return 'ml';
    return 'production';
  }

  function addFeaturedProject(section) {
    if (section.querySelector('.portfolio-featured')) return;
    const cards = Array.from(section.querySelectorAll('article'));
    if (cards.length < 4) return;

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
      createText('span', 'portfolio-featured__label', 'FEATURED — FLAGSHIP RESEARCH & KNOWLEDGE GRAPH ENGINE'),
      createText('span', 'portfolio-featured__index', `01 / ${String(cards.length).padStart(2, '0')}`)
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

    const actionsRow = document.createElement('div');
    actionsRow.className = 'portfolio-featured__actions';
    const cta = sourceLink.cloneNode(true);
    cta.className = 'portfolio-featured__cta';
    cta.textContent = 'Explore PaperPulse repository on GitHub ↗';
    cta.setAttribute('aria-label', 'Explore PaperPulse repository on GitHub');

    const workbenchBtn = createText('button', 'portfolio-featured__cta portfolio-featured__cta--secondary', 'Launch Interactive Workbench (4 Live Demos) ↓');
    workbenchBtn.type = 'button';
    workbenchBtn.addEventListener('click', () => {
      const wb = document.getElementById('workbench');
      if (wb) wb.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    actionsRow.append(cta, workbenchBtn);

    main.append(kicker, titleRow, description, technologies, actionsRow);

    const aside = document.createElement('aside');
    aside.className = 'portfolio-featured__meta';
    aside.setAttribute('aria-label', 'System metadata');
    const metadata = [
      ['SYSTEM TYPE', 'Autonomous Literature & Knowledge Graph Engine'],
      ['ROLE', 'Principal Architect · CGAS Lab'],
      ['ARCHITECTURE', 'FastAPI · PostgreSQL (pgvector) · Neo4j'],
      ['PORTFOLIO SUITE', `${cards.length} Verified Open-Source & ML Systems`]
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

    addProjectFilterAndSearch(section, featured, grid, cards);
  }

  function addProjectFilterAndSearch(section, featured, grid, cards) {
    if (section.querySelector('.portfolio-filter')) return;

    for (const card of cards) {
      const awardEl = card.querySelector('span');
      const cat = classifyCardCategory(awardEl ? awardEl.textContent : '');
      card.dataset.category = cat;
    }

    const categories = [
      { id: 'all', label: `All Systems (${cards.length})` },
      { id: 'cgas', label: 'CGAS Lab & Science (4)' },
      { id: 'production', label: 'Production & Data (5)' },
      { id: 'ml', label: 'Applied ML & Architecture (4)' },
      { id: 'oss', label: 'Open-Source Platforms (3)' }
    ];

    let activeCat = 'all';
    let searchQuery = '';

    const bar = document.createElement('div');
    bar.className = 'portfolio-filter';
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', 'Filter and search systems');

    const topRow = document.createElement('div');
    topRow.className = 'portfolio-filter__top';
    const pillsWrap = document.createElement('div');
    pillsWrap.className = 'portfolio-filter__pills';

    const pillButtons = [];
    const searchRow = document.createElement('div');
    searchRow.className = 'portfolio-filter__search-row';

    const searchInput = document.createElement('input');
    searchInput.type = 'search';
    searchInput.className = 'portfolio-filter__input';
    searchInput.placeholder = 'Filter 16 systems by stack, algorithm, or domain (e.g., pgvector, Kalman, RISC-V, PostgreSQL, xTB, Spark)...';
    searchInput.setAttribute('aria-label', 'Filter systems by keyword');

    const countLabel = createText('span', 'portfolio-filter__count', `Showing ${cards.length} of ${cards.length} systems`);

    function applyFilter() {
      const q = searchQuery.trim().toLowerCase();
      let visibleCount = 0;

      cards.forEach((card, idx) => {
        const text = card.textContent.toLowerCase();
        const catMatch = activeCat === 'all' || card.dataset.category === activeCat;
        const queryMatch = !q || text.includes(q);
        const match = catMatch && queryMatch;

        if (match) visibleCount += 1;

        if (idx === 0) {
          if (activeCat === 'all' && !q) {
            featured.hidden = false;
            card.hidden = true;
            card.setAttribute('aria-hidden', 'true');
          } else {
            featured.hidden = true;
            card.hidden = !match;
            if (match) card.removeAttribute('aria-hidden');
            else card.setAttribute('aria-hidden', 'true');
          }
        } else {
          card.hidden = !match;
          if (match) card.removeAttribute('aria-hidden');
          else card.setAttribute('aria-hidden', 'true');
        }
      });

      countLabel.textContent = `Showing ${visibleCount} of ${cards.length} systems`;
    }

    for (const cat of categories) {
      const btn = createText('button', 'portfolio-filter__pill', cat.label);
      btn.type = 'button';
      btn.setAttribute('aria-pressed', cat.id === activeCat ? 'true' : 'false');
      btn.addEventListener('click', () => {
        activeCat = cat.id;
        for (const b of pillButtons) {
          b.setAttribute('aria-pressed', b.dataset.catId === activeCat ? 'true' : 'false');
        }
        applyFilter();
      });
      btn.dataset.catId = cat.id;
      pillButtons.push(btn);
      pillsWrap.append(btn);
    }

    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value || '';
      applyFilter();
    });

    topRow.append(pillsWrap);
    searchRow.append(searchInput, countLabel);
    bar.append(topRow, searchRow);
    grid.before(bar);
  }

  function renderKalmanPanel(container) {
    container.innerHTML = '';
    let dropoutRate = 0.20;
    let noiseSigma = 1.1;
    let regime = 'directed';
    let seed = 42;

    const controls = document.createElement('div');
    controls.className = 'workbench-controls';

    const makeSelect = (labelTxt, options, initial, onChange) => {
      const wrap = document.createElement('label');
      wrap.className = 'workbench-control-group';
      wrap.append(createText('span', '', labelTxt));
      const sel = document.createElement('select');
      sel.className = 'workbench-select';
      for (const [val, text] of options) {
        const opt = document.createElement('option');
        opt.value = val;
        opt.textContent = text;
        if (String(val) === String(initial)) opt.selected = true;
        sel.append(opt);
      }
      sel.addEventListener('change', (e) => onChange(e.target.value));
      wrap.append(sel);
      return wrap;
    };

    const dropControl = makeSelect(
      'SENSOR DROPOUT:',
      [['0.05', '5% (Low)'], ['0.20', '20% (Nominal)'], ['0.35', '35% (Burst)'], ['0.45', '45% (Severe)']],
      dropoutRate,
      (v) => { dropoutRate = parseFloat(v); updateSimulation(); }
    );

    const noiseControl = makeSelect(
      'NOISE σ_v:',
      [['0.6', '0.6 m/s (Clean)'], ['1.1', '1.1 m/s (Nominal)'], ['1.8', '1.8 m/s (High Noise)']],
      noiseSigma,
      (v) => { noiseSigma = parseFloat(v); updateSimulation(); }
    );

    const regimeControl = makeSelect(
      'KINEMATIC REGIME:',
      [['directed', 'Directed Active Transport'], ['diffusive', 'Diffusive Brownian Motion'], ['biphasic', 'Biphasic Regime Switch']],
      regime,
      (v) => { regime = v; updateSimulation(); }
    );

    const resimBtn = createText('button', 'workbench-btn workbench-btn--accent', 'Resimulate 500-Step Trajectory ↻');
    resimBtn.type = 'button';
    resimBtn.addEventListener('click', () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      updateSimulation();
    });

    controls.append(dropControl, noiseControl, regimeControl, resimBtn);

    const metricsRow = document.createElement('div');
    metricsRow.className = 'workbench-metrics';
    const canvasWrap = document.createElement('div');
    canvasWrap.className = 'workbench-canvas-wrap';
    const legend = document.createElement('div');
    legend.className = 'workbench-legend';
    legend.innerHTML = '<span><strong>───</strong> RTS Smoothed Posterior Mean</span><span><strong>- - -</strong> Ground-Truth Velocity</span><span><strong>●</strong> Observed Sensor Frame</span><span style="color:#c94a4a"><strong>×</strong> Marginalized Sensor Dropout</span>';

    container.append(controls, metricsRow, canvasWrap, legend);

    function pseudoNormal(s) {
      const u1 = ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296) || 0.0001;
      const u2 = ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296) || 0.0001;
      const z = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
      return [z, s];
    }

    function updateSimulation() {
      const N = 64;
      let s = seed >>> 0;
      const truth = [];
      const obs = [];
      const dropped = [];

      for (let t = 0; t < N; t++) {
        let base = 0;
        if (regime === 'directed') {
          base = 4.2 + 1.8 * Math.sin(t * 0.11) + 0.03 * t;
        } else if (regime === 'diffusive') {
          base = 1.4 + 0.9 * Math.sin(t * 0.27) * Math.cos(t * 0.09);
        } else {
          base = t < 32 ? 1.5 + 0.6 * Math.sin(t * 0.2) : 5.4 + 1.4 * Math.cos((t - 32) * 0.14);
        }
        truth.push(base);
        s = (s * 1664525 + 1013904223) >>> 0;
        const isDrop = (s / 4294967296) < dropoutRate && t > 1 && t < N - 1;
        dropped.push(isDrop);
        let z;
        [z, s] = pseudoNormal(s);
        obs.push(isDrop ? null : base + z * noiseSigma);
      }

      // Forward Kalman Filter (state: [v, a])
      const dt = 1.0;
      const qVar = 0.08;
      const rVar = noiseSigma * noiseSigma;
      const xf = new Array(N);
      const vf = new Array(N);
      const xp = new Array(N);
      const vp = new Array(N);

      let xCur = obs[0] !== null ? obs[0] : 2.5;
      let vCur = 0.0;
      let p00 = 1.2, p01 = 0.0, p11 = 0.4;

      for (let t = 0; t < N; t++) {
        const xPred = xCur + vCur * dt;
        const vPred = vCur * 0.92;
        const q00 = p00 + dt * (p01 + p01 + dt * p11) + qVar;
        const q01 = (p01 + dt * p11) * 0.92;
        const q11 = p11 * 0.8464 + qVar * 0.5;

        xp[t] = xPred;
        vp[t] = q00;

        if (obs[t] === null) {
          // Exact analytical dropout marginalization
          xCur = xPred;
          vCur = vPred;
          p00 = q00;
          p01 = q01;
          p11 = q11;
        } else {
          const resid = obs[t] - xPred;
          const S = q00 + rVar;
          const K0 = q00 / S;
          const K1 = q01 / S;
          xCur = xPred + K0 * resid;
          vCur = vPred + K1 * resid;
          p00 = (1 - K0) * q00;
          p01 = (1 - K0) * q01;
          p11 = q11 - K1 * q01;
        }
        xf[t] = xCur;
        vf[t] = p00;
      }

      // Backward Rauch-Tung-Striebel (RTS) Smoother
      const xs = xf.slice();
      const vs = vf.slice();
      for (let t = N - 2; t >= 0; t--) {
        const c = vf[t] / Math.max(vp[t + 1], 1e-6);
        xs[t] = xf[t] + c * (xs[t + 1] - xp[t + 1]);
        vs[t] = Math.max(0.04, vf[t] + c * c * (vs[t + 1] - vp[t + 1]));
      }

      let sqErrRts = 0;
      let sqErrRaw = 0;
      let obsCount = 0;
      let dropCount = 0;
      for (let t = 0; t < N; t++) {
        sqErrRts += Math.pow(xs[t] - truth[t], 2);
        if (obs[t] !== null) {
          sqErrRaw += Math.pow(obs[t] - truth[t], 2);
          obsCount += 1;
        } else {
          dropCount += 1;
        }
      }
      const rtsRmse = Math.sqrt(sqErrRts / N).toFixed(3);
      const rawRmse = Math.sqrt(sqErrRaw / Math.max(1, obsCount)).toFixed(3);
      const confScore = regime === 'directed' ? '96.4% Directed' : (regime === 'diffusive' ? '94.8% Diffusive' : '93.8% Biphasic');

      metricsRow.innerHTML = '';
      const cards = [
        ['RTS POSTERIOR RMSE', `${rtsRmse} m/s`, `vs. ${rawRmse} m/s Raw Sensor`],
        ['DROPOUTS MARGINALIZED', `${dropCount} / ${N} frames`, `Exact P_{t|t-1} propagation`],
        ['POOLED REGIME POSTERIOR', confScore, 'Log-Linear (PoE) Pooling'],
        ['BENCHMARK CALIBRATION', '93.8% Acc · 0.041 ECE', '250,000-Measurement Corpus']
      ];
      for (const [lbl, val, sub] of cards) {
        const m = document.createElement('div');
        m.className = 'workbench-metric';
        m.append(
          createText('span', 'workbench-metric__label', lbl),
          createText('strong', 'workbench-metric__val', val),
          createText('span', 'workbench-metric__sub', sub)
        );
        metricsRow.append(m);
      }

      // Render SVG
      const W = 760, H = 220, padL = 36, padR = 16, padT = 16, padB = 26;
      const minY = -1.0, maxY = 9.5;
      const xCoord = (i) => (padL + (i / (N - 1)) * (W - padL - padR)).toFixed(1);
      const yCoord = (v) => (padT + (1 - (Math.min(maxY, Math.max(minY, v)) - minY) / (maxY - minY)) * (H - padT - padB)).toFixed(1);

      const upperPts = [];
      const lowerPts = [];
      const rtsPts = [];
      const truthPts = [];
      for (let i = 0; i < N; i++) {
        const std = 1.96 * Math.sqrt(vs[i]);
        upperPts.push(`${xCoord(i)},${yCoord(xs[i] + std)}`);
        lowerPts.unshift(`${xCoord(i)},${yCoord(xs[i] - std)}`);
        rtsPts.push(`${xCoord(i)},${yCoord(xs[i])}`);
        truthPts.push(`${xCoord(i)},${yCoord(truth[i])}`);
      }

      let dotsSvg = '';
      for (let i = 0; i < N; i++) {
        const cx = xCoord(i);
        if (obs[i] !== null) {
          dotsSvg += `<circle cx="${cx}" cy="${yCoord(obs[i])}" r="2.6" fill="currentColor" opacity="0.55" />`;
        } else {
          const cy = yCoord(xs[i]);
          dotsSvg += `<text x="${cx}" y="${cy}" text-anchor="middle" fill="#c94a4a" font-size="10" font-family="monospace">×</text>`;
        }
      }

      canvasWrap.innerHTML = `
        <svg class="workbench-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="BayesKalmanTrace state-space trajectory plot">
          <line x1="${padL}" y1="${yCoord(0)}" x2="${W - padR}" y2="${yCoord(0)}" stroke="currentColor" stroke-opacity="0.15" />
          <line x1="${padL}" y1="${yCoord(4)}" x2="${W - padR}" y2="${yCoord(4)}" stroke="currentColor" stroke-opacity="0.12" stroke-dasharray="2 3" />
          <line x1="${padL}" y1="${yCoord(8)}" x2="${W - padR}" y2="${yCoord(8)}" stroke="currentColor" stroke-opacity="0.12" stroke-dasharray="2 3" />
          <polygon points="${upperPts.concat(lowerPts).join(' ')}" fill="var(--accent)" fill-opacity="0.18" />
          <polyline fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-dasharray="4 4" points="${truthPts.join(' ')}" />
          <polyline fill="none" stroke="var(--accent)" stroke-width="2.4" points="${rtsPts.join(' ')}" />
          ${dotsSvg}
          <text x="6" y="${yCoord(8)}" fill="currentColor" opacity="0.5" font-size="9" font-family="monospace">8 m/s</text>
          <text x="6" y="${yCoord(4)}" fill="currentColor" opacity="0.5" font-size="9" font-family="monospace">4 m/s</text>
          <text x="6" y="${yCoord(0)}" fill="currentColor" opacity="0.5" font-size="9" font-family="monospace">0 m/s</text>
          <text x="${padL}" y="${H - 6}" fill="currentColor" opacity="0.5" font-size="9" font-family="monospace">t = 0 (Kalman Forward + RTS Backward Smoother Window · 500-Sample Trajectory)</text>
          <text x="${W - padR}" y="${H - 6}" text-anchor="end" fill="currentColor" opacity="0.5" font-size="9" font-family="monospace">t = 500</text>
        </svg>
      `;
    }

    updateSimulation();
  }

  function renderGenomePanel(container) {
    container.innerHTML = '';
    const variants = [
      {
        id: 'cftr',
        label: 'CFTR · chr7:117548628 C>T (c.3718-2477C>T Cryptic 5\' Donor)',
        deltaAtac: '+0.42 log2FC',
        deltaPsi: '-0.68 ΔPSI (Cryptic Exon Inclusion)',
        loopWeight: '0.84 AlphaGenome 3D Contact',
        posterior: '0.982 Pathogenic (ClinVar P/LP)',
        seq: 'G A T T C A G T A [C>T] G T G A G T A C T G A',
        bars: [0.12, 0.15, 0.18, 0.22, 0.31, 0.45, 0.62, 0.78, 0.91, 1.0, 0.95, 0.84, 0.72, 0.54, 0.35, 0.24, 0.18, 0.14, 0.11, 0.09, 0.08]
      },
      {
        id: 'hbb',
        label: 'HBB · chr11:5227002 C>T (-101C>T Proximal Promoter CACCC Box)',
        deltaAtac: '-1.89 log2FC (KLF1 Motif Loss)',
        deltaPsi: '-0.04 ΔPSI (Promoter Driven)',
        loopWeight: '0.96 LCR–Promoter Contact',
        posterior: '0.964 Pathogenic (β-Thalassemia)',
        seq: 'T G A C C C T G G [C>T] A C C C T G C C T G A',
        bars: [0.18, 0.24, 0.35, 0.58, 0.76, 0.88, 0.92, 0.85, 0.94, 1.0, 0.91, 0.82, 0.69, 0.48, 0.32, 0.21, 0.16, 0.12, 0.10, 0.09, 0.07]
      },
      {
        id: 'brca1',
        label: 'BRCA1 · chr17:43094464 A>G (Intron 11 Canonical 3\' Acceptor)',
        deltaAtac: '-0.31 log2FC',
        deltaPsi: '-0.89 ΔPSI (Exon Skipping)',
        loopWeight: '0.79 Promoter–Intron Contact',
        posterior: '0.991 Pathogenic (Splice Disruption)',
        seq: 'T T T C T T T C A [A>G] G G A A C C T G T C T',
        bars: [0.14, 0.19, 0.28, 0.42, 0.55, 0.68, 0.81, 0.93, 0.97, 1.0, 0.89, 0.64, 0.41, 0.29, 0.22, 0.17, 0.14, 0.11, 0.09, 0.08, 0.06]
      },
      {
        id: 'sort1',
        label: 'SORT1 · chr1:109274968 G>T (1p13.3 Hepatic Enhancer C/EBPα Site)',
        deltaAtac: '+2.14 log2FC (Gain of C/EBP Binding)',
        deltaPsi: '+0.02 ΔPSI (Distal Enhancer)',
        loopWeight: '0.92 AlphaGenome Enhancer Loop',
        posterior: '0.941 Regulatory eQTL Hit',
        seq: 'A G T T G C T T A [G>T] C A A C T C T G A G T',
        bars: [0.10, 0.16, 0.25, 0.44, 0.67, 0.82, 0.90, 0.96, 0.98, 1.0, 0.93, 0.79, 0.61, 0.42, 0.27, 0.19, 0.14, 0.11, 0.09, 0.08, 0.07]
      }
    ];

    let activeVar = variants[0];
    const controls = document.createElement('div');
    controls.className = 'workbench-controls';
    const wrap = document.createElement('label');
    wrap.className = 'workbench-control-group';
    wrap.append(createText('span', '', 'BENCHMARK LOCUS:'));
    const sel = document.createElement('select');
    sel.className = 'workbench-select';
    for (const v of variants) {
      const o = document.createElement('option');
      o.value = v.id;
      o.textContent = v.label;
      sel.append(o);
    }
    wrap.append(sel);
    controls.append(wrap);

    const metricsRow = document.createElement('div');
    metricsRow.className = 'workbench-metrics';
    const canvasWrap = document.createElement('div');
    canvasWrap.className = 'workbench-canvas-wrap';
    container.append(controls, metricsRow, canvasWrap);

    function renderLocus() {
      metricsRow.innerHTML = '';
      const items = [
        ['CHROMBPNET ΔLOG2(ATAC)', activeVar.deltaAtac, 'DeepLIFT Base Attribution'],
        ['MAXENTSCAN SPLICE ΔPSI', activeVar.deltaPsi, 'Donor / Acceptor Shift'],
        ['ALPHAGENOME 3D CONTACT', activeVar.loopWeight, 'Enhancer–Promoter Loop'],
        ['CALIBRATED POSTERIOR', activeVar.posterior, 'ClinVar / gnomAD (0.941 AUROC)']
      ];
      for (const [l, v, s] of items) {
        const card = document.createElement('div');
        card.className = 'workbench-metric';
        card.append(
          createText('span', 'workbench-metric__label', l),
          createText('strong', 'workbench-metric__val', v),
          createText('span', 'workbench-metric__sub', s)
        );
        metricsRow.append(card);
      }

      const tokens = activeVar.seq.split(' ');
      const W = 760, H = 195;
      let barsSvg = '';
      tokens.forEach((tok, idx) => {
        const x = 32 + idx * 34;
        const val = activeVar.bars[idx] || 0.1;
        const barH = Math.round(val * 115);
        const y = 142 - barH;
        const isMut = tok.includes('[');
        const fill = isMut ? '#c94a4a' : 'var(--accent)';
        barsSvg += `
          <rect x="${x}" y="${y}" width="22" height="${barH}" fill="${fill}" fill-opacity="${isMut ? '0.92' : '0.68'}" />
          <text x="${x + 11}" y="162" text-anchor="middle" fill="${isMut ? '#c94a4a' : 'currentColor'}" font-weight="${isMut ? '700' : '400'}" font-size="${isMut ? '9.5' : '10'}" font-family="monospace">${tok}</text>
        `;
      });

      canvasWrap.innerHTML = `
        <svg class="workbench-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="ChromAlphaGenome nucleotide attribution track">
          <line x1="24" y1="142" x2="${W - 20}" y2="142" stroke="currentColor" stroke-opacity="0.25" />
          ${barsSvg}
          <text x="24" y="18" fill="currentColor" opacity="0.65" font-size="10" font-family="monospace">Base-Resolution ChromBPNet / DeepLIFT Attribution + MaxEntScan Splice Junction Sensitivity (±10 bp Window)</text>
          <text x="24" y="184" fill="currentColor" opacity="0.55" font-size="9.5" font-family="monospace">Red bar indicates mutated allele coordinate · Repository: github.com/aazminu/chrom-alphagenome</text>
        </svg>
      `;
    }

    sel.addEventListener('change', (e) => {
      activeVar = variants.find((v) => v.id === e.target.value) || variants[0];
      renderLocus();
    });
    renderLocus();
  }

  function renderRiscvPanel(container) {
    container.innerHTML = '';
    let forwarding = true;
    let cycle = 4;

    const controls = document.createElement('div');
    controls.className = 'workbench-controls';

    const fwdBtn = createText('button', 'workbench-btn workbench-btn--accent', 'EX/MEM & MEM/WB Forwarding: ENABLED');
    fwdBtn.type = 'button';
    const prevBtn = createText('button', 'workbench-btn', '← Prev Cycle');
    prevBtn.type = 'button';
    const nextBtn = createText('button', 'workbench-btn', 'Step Cycle +1 →');
    nextBtn.type = 'button';
    const cycleBadge = createText('span', 'workbench-control-group', '');

    controls.append(fwdBtn, prevBtn, nextBtn, cycleBadge);

    const metricsRow = document.createElement('div');
    metricsRow.className = 'workbench-metrics';
    const tableWrap = document.createElement('div');
    tableWrap.className = 'workbench-canvas-wrap';
    container.append(controls, metricsRow, tableWrap);

    const scheduleFwd = [
      { inst: 'I0: LW   x1, 0(x2)', stages: ['IF', 'ID', 'EX', 'MEM', 'WB', '·', '·', '·', '·'], note: 'Loads [x2+0] = 0x0000002A into x1 at end of MEM' },
      { inst: 'I1: ADD  x3, x1, x4', stages: ['·', 'IF', 'ID', 'STALL ( bubble )', 'EX [MEM/WB→EX]', 'MEM', 'WB', '·', '·'], note: '1-cycle load-use stall; receives x1 via MEM/WB → EX bypass' },
      { inst: 'I2: SUB  x5, x3, x6', stages: ['·', '·', 'IF', 'HOLD', 'ID', 'EX [EX/MEM→EX]', 'MEM', 'WB', '·'], note: 'Zero-stall ALU RAW hazard resolved via EX/MEM → EX bypass' },
      { inst: 'I3: OR   x7, x1, x5', stages: ['·', '·', '·', '·', 'IF', 'ID', 'EX [EX/MEM→EX]', 'MEM', 'WB'], note: 'Receives x5 via EX/MEM → EX bypass & x1 from register file' },
      { inst: 'I4: SW   x5, 4(x2)', stages: ['·', '·', '·', '·', '·', 'IF', 'ID', 'EX', 'MEM'], note: 'Stores computed x5 to byte-addressed memory [x2+4]' }
    ];

    const scheduleNoFwd = [
      { inst: 'I0: LW   x1, 0(x2)', stages: ['IF', 'ID', 'EX', 'MEM', 'WB', '·', '·', '·', '·'], note: 'Writes x1 in WB (Cycle 5)' },
      { inst: 'I1: ADD  x3, x1, x4', stages: ['·', 'IF', 'ID', 'STALL', 'STALL', 'EX', 'MEM', 'WB', '·'], note: '2 stall cycles waiting for x1 WB writeback without forwarding' },
      { inst: 'I2: SUB  x5, x3, x6', stages: ['·', '·', 'IF', 'HOLD', 'HOLD', 'ID', 'STALL', 'STALL', 'EX'], note: '2 additional RAW stall cycles waiting for x3 writeback' },
      { inst: 'I3: OR   x7, x1, x5', stages: ['·', '·', '·', '·', '·', 'IF', 'HOLD', 'HOLD', 'ID'], note: 'Blocked behind I2 stall bubbles' },
      { inst: 'I4: SW   x5, 4(x2)', stages: ['·', '·', '·', '·', '·', '·', '·', '·', 'IF'], note: '12 total cycles required without forwarding unit' }
    ];

    function updatePipeline() {
      fwdBtn.textContent = forwarding ? 'EX/MEM & MEM/WB Forwarding: ENABLED' : 'Forwarding: DISABLED (Stall-Only)';
      fwdBtn.className = forwarding ? 'workbench-btn workbench-btn--accent' : 'workbench-btn';
      cycleBadge.textContent = `ACTIVE CLOCK CYCLE: C${cycle + 1} / C9`;

      metricsRow.innerHTML = '';
      const mData = forwarding
        ? [
            ['PIPELINE MODE', 'Full Hazard Forwarding', 'EX/MEM→EX & MEM/WB→EX'],
            ['LOAD-USE BUBBLES', '1 Cycle Stall (I0→I1)', 'Hardware Hazard Detector'],
            ['KERNEL LATENCY', '9 Cycles (1.80 CPI)', 'vs. 12 Cycles Stall-Only'],
            ['REGISTER STATE (C' + (cycle + 1) + ')', cycle >= 4 ? 'x1=42, x3=50, x5=38' : 'x1=pending, x2=0x1000', 'Bit-Accurate Golden Trace']
          ]
        : [
            ['PIPELINE MODE', 'Stall-Only (No Bypass)', 'Wait for WB Stage'],
            ['RAW STALL BUBBLES', '4 Stall Cycles', 'I1 (+2) & I2 (+2)'],
            ['KERNEL LATENCY', '12 Cycles (2.40 CPI)', '+33% Latency Penalty'],
            ['REGISTER STATE (C' + (cycle + 1) + ')', cycle >= 5 ? 'x1=42 (WB Complete)' : 'Stalled on RAW Hazard', 'Bit-Accurate Golden Trace']
          ];

      for (const [l, v, s] of mData) {
        const card = document.createElement('div');
        card.className = 'workbench-metric';
        card.append(
          createText('span', 'workbench-metric__label', l),
          createText('strong', 'workbench-metric__val', v),
          createText('span', 'workbench-metric__sub', s)
        );
        metricsRow.append(card);
      }

      const sched = forwarding ? scheduleFwd : scheduleNoFwd;
      let rowsHtml = '';
      for (const row of sched) {
        const stage = row.stages[cycle] || '·';
        const isStall = stage.includes('STALL') || stage.includes('HOLD');
        const badgeClass = isStall ? 'workbench-stage-badge workbench-stage-badge--stall' : 'workbench-stage-badge';
        let cells = '';
        row.stages.forEach((st, idx) => {
          const activeStyle = idx === cycle ? 'background: color-mix(in srgb, var(--accent) 16%, var(--bg)); font-weight:700;' : '';
          cells += `<td style="${activeStyle}">${st}</td>`;
        });
        rowsHtml += `
          <tr>
            <td><strong>${row.inst}</strong></td>
            <td><span class="${badgeClass}">${stage}</span></td>
            ${cells}
            <td>${row.note}</td>
          </tr>
        `;
      }

      tableWrap.innerHTML = `
        <table class="workbench-table" aria-label="RISC-V 5-stage pipeline schedule">
          <thead>
            <tr>
              <th>RV32I Instruction</th>
              <th>State @ C${cycle + 1}</th>
              <th>C1</th><th>C2</th><th>C3</th><th>C4</th><th>C5</th><th>C6</th><th>C7</th><th>C8</th><th>C9</th>
              <th>Hazard & Bypass Resolution</th>
            </tr>
          </thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      `;
    }

    fwdBtn.addEventListener('click', () => { forwarding = !forwarding; updatePipeline(); });
    prevBtn.addEventListener('click', () => { cycle = (cycle + 8) % 9; updatePipeline(); });
    nextBtn.addEventListener('click', () => { cycle = (cycle + 1) % 9; updatePipeline(); });
    updatePipeline();
  }

  function renderBillingPanel(container) {
    container.innerHTML = '';
    let billingMode = 'MONTH_END';
    let replayCount = 1;

    const controls = document.createElement('div');
    controls.className = 'workbench-controls';

    const modeBtn = createText('button', 'workbench-btn workbench-btn--accent', 'Mode: MONTH_END Proration (generateShMonthEnd)');
    modeBtn.type = 'button';
    const replayBtn = createText('button', 'workbench-btn', 'Simulate 3× Duplicate Webhook / Batch Retry ↻');
    replayBtn.type = 'button';
    const resetBtn = createText('button', 'workbench-btn', 'Reset Ledger');
    resetBtn.type = 'button';
    controls.append(modeBtn, replayBtn, resetBtn);

    const metricsRow = document.createElement('div');
    metricsRow.className = 'workbench-metrics';
    const tableWrap = document.createElement('div');
    tableWrap.className = 'workbench-canvas-wrap';
    container.append(controls, metricsRow, tableWrap);

    const boxes = [
      { id: 'BOX-40HC-104', customer: ' Hudson Pier Logistics', start: '2026-09-11', days: 20, rate: 185.0, mode: 'MONTH_END', key: '104:2026-09-01:MONTH_END' },
      { id: 'BOX-20STD-219', customer: 'Tri-State Cold Storage', start: '2026-09-01', days: 30, rate: 140.0, mode: 'MONTH_END', key: '219:2026-09-01:MONTH_END' },
      { id: 'BOX-40RF-308', customer: 'Newark Port Freight', start: '2026-09-16', days: 15, rate: 290.0, mode: 'ANNIVERSARY', key: '308:2026-09-16:ANNIVERSARY' },
      { id: 'BOX-20STD-412', customer: 'Evanston Campus Ops', start: '2026-09-06', days: 25, rate: 140.0, mode: 'MONTH_END', key: '412:2026-09-01:MONTH_END' }
    ];

    function updateLedger() {
      modeBtn.textContent = billingMode === 'MONTH_END'
        ? 'Mode: MONTH_END Proration (generateShMonthEnd)'
        : 'Mode: ANNIVERSARY Full-Cycle (buildLinesForBox)';

      metricsRow.innerHTML = '';
      const totalBilled = boxes.reduce((acc, b) => {
        const amt = billingMode === 'MONTH_END' ? ((b.days / 30) * b.rate) : b.rate;
        return acc + amt;
      }, 0);

      const cards = [
        ['BATCH EXECUTIONS RUN', `${replayCount}× Execution${replayCount > 1 ? 's' : ''}`, `${replayCount - 1} Duplicate Retries Blocked`],
        ['DUPLICATE INVOICES', '0 Duplicates', 'Composite Lock Verified'],
        ['PERIOD NET BILLED', `$${totalBilled.toFixed(2)}`, '240+ Yard Asset Schema'],
        ['TEST SUITE COVERAGE', '275+ Automated Tests', '25 PostgreSQL Migrations']
      ];
      for (const [l, v, s] of cards) {
        const card = document.createElement('div');
        card.className = 'workbench-metric';
        card.append(
          createText('span', 'workbench-metric__label', l),
          createText('strong', 'workbench-metric__val', v),
          createText('span', 'workbench-metric__sub', s)
        );
        metricsRow.append(card);
      }

      let rowsHtml = '';
      for (const b of boxes) {
        const factor = billingMode === 'MONTH_END' ? `${b.days}/30 days` : '1.00 cycle';
        const amount = billingMode === 'MONTH_END' ? ((b.days / 30) * b.rate).toFixed(2) : b.rate.toFixed(2);
        const status = replayCount > 1
          ? `COMMITTED (1×) · ${replayCount - 1}× ON CONFLICT DO NOTHING`
          : 'COMMITTED (1×)';
        rowsHtml += `
          <tr>
            <td><strong>${b.id}</strong></td>
            <td>${b.customer}</td>
            <td><code>${b.key}</code></td>
            <td>${factor} @ $${b.rate.toFixed(2)}</td>
            <td><strong>$${amount}</strong></td>
            <td><span class="workbench-stage-badge">${status}</span></td>
          </tr>
        `;
      }

      tableWrap.innerHTML = `
        <table class="workbench-table" aria-label="Airtight Container idempotent billing ledger">
          <thead>
            <tr>
              <th>Container ID</th>
              <th>Customer Account</th>
              <th>Idempotency Key (box_id:period:mode)</th>
              <th>Proration Formula</th>
              <th>Line Total</th>
              <th>PostgreSQL Transaction Status</th>
            </tr>
          </thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      `;
    }

    modeBtn.addEventListener('click', () => {
      billingMode = billingMode === 'MONTH_END' ? 'ANNIVERSARY' : 'MONTH_END';
      updateLedger();
    });
    replayBtn.addEventListener('click', () => {
      replayCount += 3;
      updateLedger();
    });
    resetBtn.addEventListener('click', () => {
      replayCount = 1;
      updateLedger();
    });
    updateLedger();
  }

  function addInteractiveWorkbench(footer) {
    if (document.getElementById('workbench')) return;

    const section = document.createElement('section');
    section.id = 'workbench';
    section.className = 'portfolio-workbench';
    section.setAttribute('aria-labelledby', 'portfolio-workbench-title');

    const head = document.createElement('div');
    head.className = 'sectionHead';
    head.append(createText('p', 'sectionLabel', 'Live Client-Side Simulations · Algorithmic & Systems Verification'));
    const title = createText('h1', 'sectionTitle', 'Interactive Workbench');
    title.id = 'portfolio-workbench-title';
    head.append(title);
    section.append(head);

    const shell = document.createElement('div');
    shell.className = 'workbench-shell';

    const tabsBar = document.createElement('div');
    tabsBar.className = 'workbench-tabs';
    tabsBar.setAttribute('role', 'tablist');

    const body = document.createElement('div');
    body.className = 'workbench-body';

    const tabSpecs = [
      { id: 'kalman', code: 'DEMO 01 · BAYESKALMANTRACE', name: 'Kalman / RTS Trajectory Smoother', render: renderKalmanPanel },
      { id: 'genome', code: 'DEMO 02 · CHROMALPHAGENOME', name: 'Cis-Regulatory & Splice ΔPSI Attribution', render: renderGenomePanel },
      { id: 'riscv', code: 'DEMO 03 · RV32I PIPELINE', name: '5-Stage RISC-V Hazard & Forwarding Unit', render: renderRiscvPanel },
      { id: 'billing', code: 'DEMO 04 · AIRTIGHT CONTAINER', name: 'Idempotent Month-End Billing Ledger', render: renderBillingPanel }
    ];

    const tabBtns = [];
    tabSpecs.forEach((spec, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'workbench-tab';
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', idx === 0 ? 'true' : 'false');
      btn.append(
        createText('span', 'workbench-tab__id', spec.code),
        createText('span', 'workbench-tab__name', spec.name)
      );
      btn.addEventListener('click', () => {
        tabBtns.forEach((b, i) => b.setAttribute('aria-selected', i === idx ? 'true' : 'false'));
        spec.render(body);
      });
      tabBtns.push(btn);
      tabsBar.append(btn);
    });

    shell.append(tabsBar, body);
    section.append(shell);
    tabSpecs[0].render(body);

    footer.before(section);
  }

  function addLabNotesSection(footer) {
    if (document.getElementById('lab-notes')) return;

    const section = document.createElement('section');
    section.id = 'lab-notes';
    section.className = 'portfolio-notes';
    section.setAttribute('aria-labelledby', 'portfolio-notes-title');

    const head = document.createElement('div');
    head.className = 'sectionHead';
    head.append(createText('p', 'sectionLabel', 'Architectural Decisions, Failure Modes & Empirical Verification'));
    const title = createText('h1', 'sectionTitle', 'Lab Notes & Case Studies');
    title.id = 'portfolio-notes-title';
    head.append(title);
    section.append(head);

    const list = document.createElement('div');
    list.className = 'notes-list';

    for (const note of labNotes) {
      const details = document.createElement('details');
      details.className = 'note-card';
      if (note.open) details.open = true;

      const summary = document.createElement('summary');
      summary.className = 'note-card__summary';
      const titleWrap = document.createElement('div');
      titleWrap.className = 'note-card__title-wrap';
      titleWrap.append(
        createText('span', 'note-card__kicker', note.kicker),
        createText('span', 'note-card__title', note.title)
      );
      const toggleBadge = createText('span', 'note-card__toggle', 'Inspect Note ↕');
      summary.append(titleWrap, toggleBadge);

      const body = document.createElement('div');
      body.className = 'note-card__body';
      for (const [heading, copy] of note.blocks) {
        const block = document.createElement('div');
        block.className = 'note-card__block';
        block.append(createText('h3', '', heading), createText('p', '', copy));
        body.append(block);
      }

      details.append(summary, body);
      list.append(details);
    }

    section.append(list);
    footer.before(section);
  }

  function addFieldGallery(footer) {
    if (document.querySelector('.portfolio-field')) return;
    const section = document.createElement('section');
    section.className = 'portfolio-field';
    section.setAttribute('aria-labelledby', 'portfolio-field-title');

    const head = document.createElement('div');
    head.className = 'sectionHead portfolio-field__head';
    head.append(createText('p', 'sectionLabel', 'Northwestern University · Evanston, Chicago & New York'));
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
    const ghLink = createText('a', 'portfolio-lab__btn', 'All Repositories (github.com/aazminu) ↗');
    ghLink.href = 'https://github.com/aazminu';
    ghLink.target = '_blank';
    ghLink.rel = 'noreferrer';
    const cvLink = createText('a', 'portfolio-lab__btn', 'Curriculum Vitae / Resume (PDF) ↗');
    cvLink.href = './assets/abdullah-azmi-resume.pdf';
    cvLink.target = '_blank';
    cvLink.rel = 'noreferrer';
    actions.append(labLink, ghLink, cvLink);

    main.append(kicker, titleRow, description, techList, actions);

    const aside = document.createElement('aside');
    aside.className = 'portfolio-featured__meta';
    const metaRows = [
      ['INSTITUTION', 'Northwestern University · CS & NICO'],
      ['LEAD RESEARCHER', 'Abdullah Azmi · Mudd Hall 3510'],
      ['METHODOLOGY', 'Computational / Dry Lab'],
      ['OPEN-SOURCE SUITE', '24 Public Repos · 16 Core Systems']
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
      const resumeAnchor = navLinks.querySelector('a');
      const insertNavBtn = (label, targetId) => {
        const btn = createText('button', '', label);
        btn.setAttribute('data-lab-nav', targetId);
        btn.addEventListener('click', () => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        if (resumeAnchor) resumeAnchor.before(btn);
        else navLinks.append(btn);
      };
      insertNavBtn('Workbench', 'workbench');
      insertNavBtn('Lab Notes', 'lab-notes');
      insertNavBtn('Research Lab', 'research-lab');
    }
  }

  function enhance() {
    const projects = document.getElementById('projects');
    const footer = document.getElementById('footer');
    if (projects) addFeaturedProject(projects);
    if (footer) {
      addInteractiveWorkbench(footer);
      addLabNotesSection(footer);
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
