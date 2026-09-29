# Northwestern Student portfolio template

This is a hypothetical portfolio template based on the downloaded HTML, compiled React bundle, and stylesheet for [Harry Lynch's portfolio](https://www.harrylynch.dev/). The original layout and wording patterns are preserved. Personal identity, employer, dates, achievement, project, and contact literals were changed to placeholders. The source stylesheet remains byte-for-byte identical to the downloaded file. A small separate extension adds the featured project panel and the “In the field” gallery.

The page is not a factual student profile. Fill the bracketed values with verified information before publishing. The profile name, role history, project descriptions, contact links, avatar, and photos are placeholders. The project code links use `username/project-N`; the resume link expects a file that has not been supplied yet.

## Preview

The static site entry point is `dist/index.html`. There is no build step or package dependency. From the project directory, run:

```powershell
python -m http.server 8000 --directory dist
```

Then open `http://127.0.0.1:8000`. GitHub Pages can serve `dist/` directly. `dist/CNAME` is set to `abdullahazmi.com`, and `dist/.nojekyll` enables direct serving of static assets.

## Source and files

- `dist/index.html` retains the original page structure and loads the original compiled JavaScript and stylesheet using relative paths.
- `dist/assets/index-VqgN4zkm.js` contains the original client bundle with profile and achievement literals replaced by explicit placeholders. The theme toggle, reveal behavior, scroll button, and section layout come from the original runtime.
- `dist/assets/index-yL4Jrv0C.css` is the unmodified original stylesheet.
- `dist/assets/extension.js` and `dist/assets/extension.css` add one featured view for project 1 and a three-image gallery without replacing the original React application. The extension stylesheet also fits the longer placeholder name inside the original hero layout at narrow viewports.
- `dist/favicon.svg` and `dist/assets/northwestern-student-avatar.svg` are monogram placeholders rather than Harry Lynch's icon or portrait.
- `PROFILE_PLAN.md` explains which real experiences, projects, and evidence to add.
- `provenance.md` records the local source snapshot, hashes, and applied substitutions.

The page loads Bricolage Grotesque and Archivo from Google Fonts. Gallery photos are local copies of Unsplash images, each labeled as a sample in the page. Their source links are recorded in `provenance.md`.
