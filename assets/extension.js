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

  function enhance() {
    const projects = document.getElementById('projects');
    const footer = document.getElementById('footer');
    if (projects) addFeaturedProject(projects);
    if (footer) addFieldGallery(footer);
  }

  const root = document.getElementById('root');
  if (!root) return;
  const observer = new MutationObserver(enhance);
  observer.observe(root, { childList: true, subtree: true });
  enhance();
})();
