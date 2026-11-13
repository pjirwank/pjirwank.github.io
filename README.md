# Piyush P. Jirwankar — Personal Website

This repository contains the complete static website. Keep the repository private and GitHub Pages disabled until publication is explicitly requested.

## Preview locally

From the repository folder, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://localhost:8000 in your browser. Stop the server with Ctrl+C.

## Editing in VS Code with Codex

Clone this repository and open the folder in VS Code. Ask Codex to edit the HTML, CSS, or JavaScript, preview the result locally, and commit and push the changes when ready.

- `index.html`: Home
- `research.html`: Research projects and animations
- `publications.html`: Grouped publications and sorting controls
- `about.html`: Biography, education, and resume download
- `contact.html`: Contact details
- `style.css`: Shared styling and responsive layout
- `site.js`: Theme switching and publication sorting
- `media/`: GIF animations and plots
- `papers/`: Paper PDFs
- `bibtex/`: Individual publication BibTeX files
- `references.bib`: Full bibliography
- `resume.pdf`: Downloadable resume

Project 2 runs at original speed; Project 4 runs at half speed. Project 3 media and project descriptions remain to be supplied.

## Publishing later

Do not enable GitHub Pages yet. When publication is requested, configure it separately. Repository privacy and website visibility are separate settings.

The Sites preview is a separate copy; changes pushed here do not automatically update it.

## Search engine optimization

Each page has its own title and description, canonical URL, and social sharing
metadata. The home page includes Schema.org Person and WebSite data connecting
both name variants (Piyush Jirwankar and Piyush P. Jirwankar) to existing profiles.
`robots.txt` permits crawling and points to `sitemap.xml`, which lists all five
navigation pages. These files do not publish the site or change repository privacy.

The SEO URLs currently assume `https://pjirwank.github.io/`, based on this
repository's name. Confirm the intended public address before publishing. If it
is different, replace that origin throughout the five HTML files, `robots.txt`,
and `sitemap.xml`; keep canonical, structured-data, and sharing URLs consistent.

Once public publication is explicitly authorized:

1. Publish the updated files at the chosen URL. Confirm that each page,
   `robots.txt`, and `sitemap.xml` returns HTTP 200 without requiring a login.
   Check that the hosting service does not add a `noindex` meta tag or
   `X-Robots-Tag: noindex` response header.
2. Verify the site in [Google Search Console](https://search.google.com/search-console/).
   Submit `sitemap.xml`, inspect the home URL, and request indexing. Use Page
   indexing reports to diagnose excluded pages. Verification requires the owner’s
   account; no verification token has been added to this repository.
3. Link the public homepage from your Google Scholar, LinkedIn, GitHub, and
   university/lab profiles where possible. Use one consistent homepage URL.
4. Monitor indexing and searches for both name variants. Crawling and ranking
   take time; metadata and sitemap submission do not guarantee inclusion or rank.

Reference: [Google's SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).
