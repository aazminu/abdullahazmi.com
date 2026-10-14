(() => {
  const projectDescriptions = [
    {
      src: './assets/field-team.jpg',
      alt: 'Sample photo of a team working around a laptop. Replace with a real project photo.',
      number: 'FIG. 01',
      title: 'Demo day',
      caption: 'Sample photo · replace with a photo of your presentation.'
    },
    {
      src: './assets/field-workspace.jpg',
      alt: 'Sample photo of a bright shared workspace. Replace with a real team photo.',
      number: 'FIG. 02',
      title: 'Working session',
      caption: 'Sample photo · replace with a team or project image.'
    },
    {
      src: './assets/field-city.jpg',
      alt: 'Sample photo of a New York City street. Replace with your own field photo.',
      number: 'FIG. 03',
      title: 'New York',
      caption: 'Sample photo · replace with a real moment from the field.'
    }
  ];

  const createText = (tag, className, text) => {
    const element = document.createElement(tag);
    element.className = className;
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
    featured.setAttribute('aria-label', 'Featured project brief');

    const main = document.createElement('div');
    main.className = 'portfolio-featured__main';
    const kicker = document.createElement('p');
    kicker.className = 'portfolio-featured__kicker';
    kicker.append(
      createText('span', 'portfolio-featured__label', 'FEATURED — PERSONAL'),
      createText('span', 'portfolio-featured__index', '01 / 04')
    );

    const titleRow = document.createElement('div');
    titleRow.className = 'portfolio-featured__title-row';
    const title = createText('h2', 'portfolio-featured__title', sourceTitle.textContent.trim());
    const status = createText('span', 'portfolio-featured__status', '[Status to add]');
    titleRow.append(title, status);

    const description = createText('p', 'portfolio-featured__description', sourceDescription.textContent.trim());
    const technologies = sourceTech.cloneNode(true);
    technologies.className = 'portfolio-featured__tech';
    technologies.setAttribute('aria-label', 'Technology placeholders');
    const cta = sourceLink.cloneNode(true);
    cta.className = 'portfolio-featured__cta';
    cta.textContent = 'Reference / code ↗';
    cta.setAttribute('aria-label', 'Add this project reference or code link');

    main.append(kicker, titleRow, description, technologies, cta);

    const aside = document.createElement('aside');
    aside.className = 'portfolio-featured__meta';
    aside.setAttribute('aria-label', 'Project details to complete');
    const metadata = [
      ['TYPE', '[Project type to add]'],
      ['ROLE', '[Your role to add]'],
      ['STATUS', '[Project status to add]'],
      ['REFERENCE', '[Source link to add]']
    ];
    for (const [label, value] of metadata) {
      const row = document.createElement('div');
      row.className = 'portfolio-featured__meta-row';
      row.append(createText('span', 'portfolio-featured__meta-label', label));
      row.append(createText('strong', 'portfolio-featured__meta-value', value));
      aside.append(row);
    }
    aside.append(createText('span', 'portfolio-featured__mark', 'NS.'));
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
    head.append(createText('p', 'sectionLabel', '[Gallery section label]'));
    const title = createText('h1', 'portfolio-field__title', 'In the field');
    title.id = 'portfolio-field-title';
    head.append(title);
    section.append(head);

    const gallery = document.createElement('div');
    gallery.className = 'portfolio-field__grid';
    gallery.setAttribute('aria-label', 'Sample photos to replace');
    for (const item of projectDescriptions) {
      const figure = document.createElement('figure');
      figure.className = 'portfolio-field__figure';
      const frame = document.createElement('div');
      frame.className = 'portfolio-field__image';
      const image = document.createElement('img');
      image.src = item.src;
      image.alt = item.alt;
      image.loading = 'lazy';
      const sampleTag = createText('span', 'portfolio-field__sample', 'SAMPLE PHOTO');
      frame.append(image, sampleTag);

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

  const referenceLabs = [
    {
      name: '01 · Multimodal Learning & Language (MLL) Lab',
      award: 'Northwestern University · CS · PI: Prof. Manling Li',
      tech: ['Multimodal Foundation Models', 'Agentic RL', 'Embodied AI'],
      description: 'Develops language + vision/robotics models that reason, plan, and interact with the physical world, focusing on multi-turn RL and knowledge-grounded agents.',
      localUrl: './labs/01-mll-lab-nu/',
      liveUrl: 'https://mll-lab-nu.github.io/'
    },
    {
      name: '02 · Midwest Uncertainty Collective (MU Collective)',
      award: 'Northwestern University · CS · PIs: Prof. Jessica Hullman & Prof. Matthew Kay',
      tech: ['Uncertainty Quantification', 'Bayesian Inference', 'Human-AI Decision Making'],
      description: 'Investigates statistical inference, interactive uncertainty visualization, and formal evaluation of human-in-the-loop AI decision workflows.',
      localUrl: './labs/02-mu-collective-nu/',
      liveUrl: 'https://mucollective.northwestern.edu/'
    },
    {
      name: '03 · Health Aware Bits (HABits) Lab',
      award: 'Northwestern University · CS & Preventive Medicine · PI: Prof. Nabil Alshurafa',
      tech: ['Machine Learning for Healthcare', 'Wearable Sensor Analytics', 'Biomedical Signals'],
      description: 'Designs passive mobile health sensing systems and machine learning pipelines to detect, predict, and prevent chronic health conditions.',
      localUrl: './labs/03-habits-lab-nu/',
      liveUrl: 'https://habitslab.github.io/'
    },
    {
      name: '04 · Amaral Lab & Complex Systems (NICO)',
      award: 'Northwestern University · ChBE & Physics · PI: Prof. Luís A. Nunes Amaral',
      tech: ['Systems Biology', 'Computational Genomics', 'Complex Biological Networks'],
      description: 'Studies emergent organization in complex biological networks, multi-omics transcriptomic archives, clinical ML prognostics, and science of science.',
      localUrl: './labs/04-amaral-lab-nu/',
      liveUrl: 'https://amaral.northwestern.edu/'
    },
    {
      name: '05 · VAK Embodied Systems Lab',
      award: 'Northwestern University · CS & ECE · PI: Prof. Nivedita Arora',
      tech: ['Energy-Autonomous Embodied Systems', 'Bio-Electronic Materials', 'Sustainable Quantum'],
      description: 'Builds battery-free, soft-electronic and bio-electronic sensing systems, low-power embedded ML interfaces, and sustainable quantum architectures.',
      localUrl: './labs/05-vak-embodied-nu/',
      liveUrl: 'https://embodiedsystem.com/'
    },
    {
      name: '06 · MIT HAN Lab',
      award: 'Massachusetts Institute of Technology · EECS · PI: Prof. Song Han',
      tech: ['Efficient Generative AI', 'LLM Quantization', 'Hardware-System Co-Design'],
      description: 'Pioneers efficient deep learning algorithms and hardware-aware neural architectures (AWQ, SmoothQuant, StreamingLLM, SANA, VILA).',
      localUrl: './labs/06-mit-han-lab/',
      liveUrl: 'https://hanlab.mit.edu/'
    },
    {
      name: '07 · Stanford Kundaje Lab',
      award: 'Stanford University · Genetics & CS · PI: Prof. Anshul Kundaje',
      tech: ['Regulatory Genomics', 'Chromatin Accessibility', 'Interpretable Deep Learning'],
      description: 'Develops mechanistic deep learning models (ChromBPNet, DeepLIFT, TF-MoDISco) to decode cis-regulatory syntax and non-coding disease variants.',
      localUrl: './labs/07-stanford-kundaje-lab/',
      liveUrl: 'https://kundajelab.github.io/'
    },
    {
      name: '08 · MIT Kulik Research Group',
      award: 'Massachusetts Institute of Technology · ChemE & Chemistry · PI: Prof. Heather J. Kulik',
      tech: ['Computational Catalysis', 'Density Functional Theory', 'ML Materials Discovery'],
      description: 'Combines first-principles quantum chemistry, DFT, and autonomous machine learning workflows to accelerate transition-metal catalyst and MOF discovery.',
      localUrl: './labs/08-mit-kulik-group/',
      liveUrl: 'http://hjkgrp.mit.edu/'
    },
    {
      name: '09 · MIT Engineering Quantum Systems (EQuS)',
      award: 'Massachusetts Institute of Technology · Physics & EECS · PI: Prof. William D. Oliver',
      tech: ['Superconducting Qubits', 'Quantum Error Correction', 'Circuit QED'],
      description: 'Engineers fault-tolerant superconducting quantum processors, high-coherence 3D-integrated qubit architectures, and real-time QEC control systems.',
      localUrl: './labs/09-mit-equs-group/',
      liveUrl: 'https://equs.mit.edu/'
    },
    {
      name: '10 · Caltech Climate Dynamics Group & CliMA',
      award: 'California Institute of Technology · ESE & GPS · PI: Prof. Tapio Schneider',
      tech: ['Physics-Informed Earth Modeling', 'Cloud Turbulence', 'Climate Data Assimilation'],
      description: 'Builds next-generation Earth system models (CliMA) fusing physical conservation laws with machine learning and global Earth observations.',
      localUrl: './labs/10-caltech-climate-dynamics/',
      liveUrl: 'https://climate-dynamics.org/'
    }
  ];

  function addResearchLabSection(footer) {
    if (document.getElementById('research-lab')) return;

    const section = document.createElement('section');
    section.id = 'research-lab';
    section.className = 'portfolio-lab';
    section.setAttribute('aria-labelledby', 'portfolio-lab-title');

    const head = document.createElement('div');
    head.className = 'sectionHead';
    head.append(createText('p', 'sectionLabel', 'Scientific Workflows & Reference Archive'));
    const title = createText('h1', 'sectionTitle', 'Research Lab & 10 Public Labs');
    title.id = 'portfolio-lab-title';
    head.append(title);
    section.append(head);

    const featured = document.createElement('article');
    featured.className = 'portfolio-featured';
    featured.setAttribute('aria-label', 'Agentic Science Lab Overview');

    const main = document.createElement('div');
    main.className = 'portfolio-featured__main';
    const kicker = document.createElement('p');
    kicker.className = 'portfolio-featured__kicker';
    kicker.append(
      createText('span', 'portfolio-featured__label', 'RESEARCH GROUP — COMPUTATIONAL / DRY LAB'),
      createText('span', 'portfolio-featured__index', 'LAB / 10 ARCHIVES')
    );

    const titleRow = document.createElement('div');
    titleRow.className = 'portfolio-featured__title-row';
    titleRow.append(
      createText('h2', 'portfolio-featured__title', 'Agentic Science & Knowledge Systems Lab'),
      createText('span', 'portfolio-featured__status', 'Non-Commercial Research')
    );

    const description = createText(
      'p',
      'portfolio-featured__description',
      'Investigating autonomous literature-to-hypothesis synthesis, multi-hop citation provenance (PaperPulse), and cross-database grounding across ArXiv, PubMed, OpenAlex, AlphaGenome, and UniProt using multi-agent workflows. Includes 10 verbatim-archived public research lab websites hosted on this domain.'
    );

    const techList = document.createElement('ul');
    techList.className = 'portfolio-featured__tech';
    for (const tag of ['Scientific Knowledge Graphs', 'Multi-Agent Workflows', 'Automated Literature Synthesis', 'Neo4j & pgvector', 'Google Antigravity']) {
      techList.append(createText('li', '', tag));
    }

    const actions = document.createElement('div');
    actions.className = 'portfolio-lab__actions';
    const labLink = createText('a', 'portfolio-lab__btn', 'Open Dedicated Lab Page (/lab/) ↗');
    labLink.href = './lab/';
    const archiveLink = createText('a', 'portfolio-lab__btn', 'Browse 10 Saved Lab Websites (/labs/) ↗');
    archiveLink.href = './labs/';
    actions.append(labLink, archiveLink);

    main.append(kicker, titleRow, description, techList, actions);

    const aside = document.createElement('aside');
    aside.className = 'portfolio-featured__meta';
    const metaRows = [
      ['METHODOLOGY', 'Computational / Dry Lab'],
      ['PRIMARY FIELD', 'CS, Data Science, AI & ML'],
      ['SPECIALIZATION', 'Knowledge Graphs & Agentic Science'],
      ['SAVED LAB SITES', '10 Unmodified Snapshots (/labs/)']
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
    for (const lab of referenceLabs) {
      const card = document.createElement('article');
      card.className = '_card_1aul7_24';
      card.append(createText('h2', '_name_1aul7_33', lab.name));
      card.append(createText('span', '_award_1aul7_42', lab.award));
      const ul = document.createElement('ul');
      ul.className = '_tech_1aul7_51';
      for (const item of lab.tech) {
        ul.append(createText('li', '', item));
      }
      card.append(ul);
      card.append(createText('p', '_description_1aul7_63', lab.description));

      const linksRow = document.createElement('div');
      linksRow.className = 'portfolio-lab__card-links';
      const snapA = createText('a', '_link_1aul7_72', 'hosted placeholder ↗');
      snapA.href = lab.localUrl;
      const liveA = createText('a', '_link_1aul7_72', 'live url ↗');
      liveA.href = lab.liveUrl;
      liveA.target = '_blank';
      liveA.rel = 'noreferrer';
      linksRow.append(snapA, liveA);
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

    const heroLinks = document.querySelector('._metaLinks_1gba7_107');
    if (heroLinks && !heroLinks.querySelector('[data-lab-hero]')) {
      const heroLabLink = createText('a', '', 'research-lab');
      heroLabLink.href = './lab/';
      heroLabLink.setAttribute('data-lab-hero', 'true');
      const heroLabsArchive = createText('a', '', '10-labs');
      heroLabsArchive.href = './labs/';
      const toggleBtn = heroLinks.querySelector('button');
      if (toggleBtn) {
        toggleBtn.before(heroLabLink, heroLabsArchive);
      } else {
        heroLinks.append(heroLabLink, heroLabsArchive);
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

