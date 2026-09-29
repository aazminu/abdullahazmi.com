# Source and asset provenance

## Portfolio source

The original page was copied from the local snapshot at `reference-sites/harry-original`, downloaded from `https://www.harrylynch.dev/`. The public GitHub repository inventory did not contain the portfolio source, so the compiled site bundle and stylesheet are the available source artifacts.

| File | Original SHA-256 | Treatment in `dist/` |
| --- | --- | --- |
| `assets/index-yL4Jrv0C.css` | `E759A673294265F318C6FE066A93990948668E842E99C3AFBBCC3443DD887F05` | Copied byte-for-byte as `dist/assets/index-yL4Jrv0C.css` |
| `assets/index-VqgN4zkm.js` | `1E9D23AEBB813A2E38F50DE0703FDF0EA43ECA2B551ABDFF3911CE31825C48BE` | Copied and text-patched as `dist/assets/index-VqgN4zkm.js`; patched SHA-256 is `964FC7331224827A8918301539476F9F0A5A119AF5FAE4450E1E03E291DF6DD0` |
| `index.html` | Local source snapshot | Copied, then title, description, relative paths, and extension links were updated |
| `favicon.svg` | Local source snapshot | Replaced with an NS monogram placeholder |

The compiled bundle keeps the original page components, theme handling, reveal behavior, scroll button, and section layout. It was patched to use the display name “Northwestern Student”; replace the hero role and education year; replace the three organizations, roles, dates, locations, and achievement bullets with bracketed placeholders; replace all project titles, technology labels, awards, metrics, and links with placeholders; and replace the original portrait and resume paths with a neutral avatar path and `northwestern-student-resume.pdf`.

## Identity and content substitutions

These source literals were replaced in the compiled bundle:

| Original literal or content | Replacement |
| --- | --- |
| `HL`, `Harry`, `Lynch`, `Profile picture of Harry Lynch` | `NS`, `Northwestern`, `Student`, `Profile placeholder for Northwestern Student` |
| `Backend Engineer (C++)`, `Prev. SWE Intern @ Bloomberg`, `CS @ Tufts '27` | `[Role or focus to add]`, `[Experience / organization to add]`, `CS @ Northwestern ([expected year])` |
| `Bloomberg LP`, `Crum & Forster`, `Launch (Startup)` | `[Organization 1]`, `[Organization 2]`, `[Organization 3]` |
| The three original role titles, work locations, and date ranges | `[Role title]`, `[Location]`, `[Dates to add]` |
| All ten original experience bullets, including `C++23`, `1+ hour`, `under 10 minutes`, `500K+`, `50K+`, and five interns | Original sentence patterns with bracketed system, action, measurement, and outcome values |
| `JumBuddy`, `Shipping Container Inventory Platform`, `Recursive Bayesian Radar-Trace Classifier`, `Universal Machine Emulator` | `[Project 1]` through `[Project 4]` |
| The original JumboHack winner/track award and six original technology lists | `[Award or recognition to add]` and bracketed technology slots |
| Original project outcomes and metrics such as `40K+ lines`, `275+ tests`, `248 containers`, `$657K`, `25 schema migrations`, `600-sample`, `12,000-measurement`, `9/10`, `10/10`, and `~9 billion instructions/second` | Bracketed contribution, scale, technology, evaluation, and outcome values within the original sentence patterns |
| Harry Lynch's email, GitHub, LinkedIn, project repositories, portrait path, and resume path | `email@example.com`, `username`, `username/project-N`, `northwestern-student-avatar.svg`, and `northwestern-student-resume.pdf` |

The HTML title and asset URLs were changed to the local static paths. The original stylesheet is unchanged, with identical source and output SHA-256 hashes.

The added UI elements are the featured view for the first of the four project records and the “In the field” gallery. These are separate in `assets/extension.js` and `assets/extension.css`, which observe the original React output and add the content without changing the base stylesheet. The extension stylesheet also sets a responsive font size on the original hero name lines so the longer placeholder fits beside the original portrait and within the mobile viewport.

## Added image assets

The original portrait and favicon were not reused. `assets/northwestern-student-avatar.svg` and `favicon.svg` are simple monogram placeholders. The gallery images are downloaded local samples and are labeled as samples in the UI:

- `assets/field-team.jpg` — https://images.unsplash.com/photo-1519389950473-47ba0277781c
- `assets/field-workspace.jpg` — https://images.unsplash.com/photo-1497366754035-f200968a6e72
- `assets/field-city.jpg` — https://images.unsplash.com/photo-1519501025264-65ba15a82390

The featured-project and gallery composition follows the structure of [Sahi Sagiraju's portfolio](https://sahisagiraju.com/). No Sahi-specific identity, photo, project claim, or contact detail is used.
