# Personal Website Redesign — Design Spec

Date: 2026-08-25
Status: Approved (pending final user sign-off on this file)

## Goal

Modernize `liangl5.github.io` (Luke Liang's personal resume site) from a
multi-page MUI-default layout into a single-page, section-anchored,
"bold tech/dev" portfolio. Keep React + MUI. No backend/data changes.

## Aesthetic direction

- **Style**: bold tech/dev — dark-first palette, monospace accents,
  gradient highlights, card-based sections. Flashy but clean: bold
  typography moments and smooth motion, generous whitespace, no clutter.
- **Stack**: keep MUI (`@mui/material`, `@mui/icons-material`), restyle
  via `Themes.js` + component overrides. No Tailwind migration.
- **Theme mode**: keep light/dark toggle; both palettes redesigned.
  - Dark: bg `#0B0E14`, surface `#131826`
  - Light: bg `#FAFAFA`, surface `#FFFFFF`
  - Shared accent gradient: `#7C5CFC` → `#22D3EE`
  - Fonts: Inter (body/UI), JetBrains Mono (nav/labels/tags/section index)
  - `shape.borderRadius: 12`, component overrides for Button/Card/Paper/
    AppBar/Tabs/Chip so MUI stops reading as stock defaults

## Architecture: single-page scroll

Replace `react-router-dom` page routing with one continuously scrolling
page. Sections are real DOM sections with stable `id`s; navigation is
real anchor links (`<a href="#id">`), not JS-only routing, so the site
works with zero JS for navigation (progressive enhancement) and is
fully keyboard/screen-reader accessible.

**Dependency changes**:
- Remove: `react-router-dom`, `@react-pdf-viewer/core`,
  `@react-pdf-viewer/default-layout`, `pdfjs-dist` (all unused after
  this redesign — resume becomes custom HTML, not an embedded PDF viewer)
- No new dependencies added (scroll-spy and reveal animations are
  implemented via native `IntersectionObserver` + CSS transitions, no
  animation library)

## Sections (in scroll order)

1. **Hero** (new) — replaces the persistent sidebar (`PersonalInfoTab`).
   Name, tagline, photo/avatar (reuses `ImageSlideshow`), social icons
   (LinkedIn, GitHub, Email, Google Scholar), scroll-down cue.
2. **About** (was `HomePage`) — bio content reflowed from raw `<ul>`
   nesting into clean cards/timeline blocks. Same text content
   (Columbia MS, Miami University background, CDC research, JPMorgan
   internship, Astronaut Scholarship).
3. **Resume** (was `ResumePage`, content overhaul) — see "Resume
   section content" below. No PDF embed.
4. **Publications** (was `PublicationsPage`) — same `PaperEntry` data,
   card-ified presentation (bordered surface card, hover lift, mono
   venue tag).
5. **Personal** (was `PersonalPage`) — same background/hobby cards,
   hover-lift added, dead commented-out JSX removed.
6. **Footer** (new) — copyright + last-commit badge (pulled from the
   bottom of the old sidebar, `GithubDisplayDate`/`LastCommit`).

**Explicitly out of scope for this redesign**:
- No standalone Contact section — social links live in Hero + Footer,
  no new contact form/content requested.
- `ProjectsPage.js` is deleted — it was an empty stub with no content
  and no nav entry in the current site. Can be re-added as a real
  section later once there's project content to show.

## Resume section content

Source of truth: `public/documents/Luke_Liang_Resume.pdf` /
`Luke_Liang_CV.pdf`, hand-transcribed into JSX (not parsed at runtime).
Content, per user decision, uses **Dec 2026** as the MS graduation date
(the CV's date; the Resume PDF text itself still says May 2027 as of
this writing — site copy intentionally follows the user's explicit
correction, not the literal PDF text).

Rendered fields, in order:

- **Education**
  - MS in Computer Science, Machine Learning Track — Columbia
    University, New York, NY — Expected Dec 2026
  - BS in Computer Science, BS in Data Science & Statistics, Math Minor
    (GPA 3.86) — Miami University, Oxford, OH — Aug 2021 – May 2024
    - Astronaut Scholarship (national), Choose Ohio First ML
      Scholarship, Summa Cum Laude, Honors College
    - Trained at University of Tennessee (NSF-sponsored) via HPC at
      Oak Ridge National Laboratory (only student selected)
- **Experience** (timeline cards, most recent first)
  - Research Assistant — Columbia University, New York, NY — Sep 2025–Present
  - Research Assistant — Miami University, Oxford, OH — Aug 2021–Oct 2024
    (4 bullets: publications, CDC simulation platform, ML image
    augmentation 95% accuracy, HIV cell simulation, NIH grant draft)
  - Teaching Assistant (Machine Learning & Algorithms) — Miami
    University — Aug 2022–Dec 2023
  - Software Engineering Intern — JPMorgan Chase & Co., Chicago, IL —
    Jun 2022–Aug 2022
- **Leadership**
  - Chapter President — Tau Beta Pi, Oxford, OH — May 2023–May 2024
- **Skills** (chip tags): Python, Machine Learning (ML), PyTorch,
  NumPy, TensorFlow, Agile, Network Science, C++, JavaScript, Numba,
  pandas, ReactJS, Java, Linux, Git, HTML/CSS, MySQL, HPC, Docker, R, SAS
- **Downloads** (end of section, replaces old inline PDF viewer): two
  buttons, "Download Resume" and "Download CV", linking to the
  existing PDFs in `public/documents/`

Publications/manuscripts/presentations from the CV are **not**
duplicated here — they're already covered by the dedicated Publications
section.

## Navigation & accessibility

- Persistent sticky top nav, translucent/blurred background, links:
  About, Resume, Publications, Personal (Hero and Footer aren't nav
  targets — Hero is the top of the page, Footer is reached by scrolling
  to the end).
- Skip-to-content link as the first focusable element on the page.
- `<nav aria-label="Section navigation">`; each section is
  `<section id="..." aria-labelledby="heading-id">`; real heading
  hierarchy (h1 = name in Hero, h2 = each section heading).
- Scroll-spy via `IntersectionObserver` highlights the active nav
  link as you scroll. This is progressive enhancement — the links are
  real anchors and work without JS.
- Clicking a nav link smooth-scrolls to the section (instant jump if
  `prefers-reduced-motion: reduce`) and updates the URL via
  `history.replaceState` (not `pushState`, so the back button isn't
  spammed with one entry per section). This keeps deep links like
  `/#publications` shareable and bookmarkable.
- On page load, if the URL has a hash, scroll to that section
  immediately (no animation) so incoming links land correctly.
- Section-enter reveal animation (fade + slight slide-up) via
  `IntersectionObserver`, CSS transitions only, respects
  `prefers-reduced-motion`. Smooth and consistent across every section
  per user's explicit request — same easing/duration everywhere, no
  per-section one-off effects.
- Mobile: nav links remain real anchors, condensed layout (no
  hamburger-hidden links — accessibility requirement is "always
  reachable," not just on desktop).

## Component changes

**New**:
- `src/components/Nav.js` — replaces `ResponsiveAppBar.js`
- `src/sections/Hero.js` and `src/components/Footer.js` — replace
  `PersonalInfoTab.js`
- `src/components/SectionHeading.js` — shared mono-index-label + h2,
  reused across every section for visual consistency
- `src/hooks/useScrollSpy.js` — `IntersectionObserver`-based active
  section tracking, shared by `Nav.js`

**Moved/renamed** (content preserved, restyled): `pages/HomePage.js` →
`sections/About.js`, `pages/ResumePage.js` → `sections/Resume.js`
(content rewritten per above), `pages/PublicationsPage.js` →
`sections/Publications.js`, `pages/PersonalPage.js` →
`sections/Personal.js`.

**Removed**: `components/ResponsiveAppBar.js`,
`components/PersonalInfoTab.js`, `pages/ProjectsPage.js`, the entire
`pages/` directory (superseded by `sections/`).

**Unchanged**: `PaperEntry.js`, `ImageSlideshow.js`,
`GithubDisplayDate.js`, `Themes.js` (overhauled in place, not replaced).

## Data flow & error handling

No new state beyond what exists today: theme mode (existing), active
nav section (new, local to `useScrollSpy`). `GithubDisplayDate`'s
existing fetch + error handling (`try/catch`, loading/error states) is
unchanged. No new network calls.

## Testing

`src/App.test.js` currently checks for a "learn react" link that
doesn't exist in this app (stale CRA boilerplate) — it fails today.
Replace with a real smoke test: renders without crashing, hero name is
present, nav section links are present.

## Cleanup bundled into this change

- Remove dead CRA boilerplate from `App.css` (`.App-logo`, spin
  keyframes, `.App-header`, `.App-link` — all unused)
- Fix missing mobile responsiveness (today's `.flex-container` never
  stacks on small screens — moot after sidebar removal, but confirming
  the new single-column scroll layout is responsive throughout)
