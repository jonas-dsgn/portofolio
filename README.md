# Jonas Nettel Portfolio

An editorial portfolio website for Jonas Nettel's photography, fashion work, and digital art. The site uses a restrained grayscale palette, large typography, sharp borders, and image-led layouts to keep the focus on the work.

## Site

The homepage presents a short introduction, three selected projects, an About section, a rotating selection of brands, and an Instagram contact link. The complete project archive is available through a separate overview page with search and dedicated detail pages for individual projects.

Project pages combine descriptive information, location, project type, tools, Instagram credits, and image galleries. Galleries support multiple images with lightbox navigation, keyboard controls, and touch swiping on mobile devices.

The interface is responsive and includes animated typography, scroll reveals, mobile navigation, and a continuously moving brand marquee. The visual language is intentionally minimal, monochrome, and fashion-editorial.

## Private Watermark Tool

The repository also contains an independent, unlinked watermarking tool at `tools/watermark.html`. It runs entirely in the browser and is not part of the public portfolio navigation.

The tool can process one or multiple photos, apply either Jonas Nettel watermark SVG, adjust watermark color and size, preserve the original image dimensions, and export the processed files locally. It uses the Canvas API and does not upload images to an external service.

## Architecture

```text
.
├── index.html                 # Main homepage
├── projects.html              # Complete project overview
├── projects/                  # Individual project pages
├── css/
│   └── style.css              # Shared website styles
├── js/
│   ├── site.js                # Shared header, navigation, and footer
│   ├── script.js              # Shared interactions and animations
│   ├── projects.js            # Project data, cards, search, and lightbox
│   └── project-detail.js      # Individual project page rendering
├── images/                    # Portfolio and profile images
├── assets/logos/              # Jonas Nettel and brand logos
├── tools/
│   ├── watermark.html         # Private watermark tool
│   ├── watermark.css
│   └── watermark.js
└── docs/                      # Design reference documentation
```

## Technology

- HTML
- CSS
- Vanilla JavaScript
- Canvas API for watermark exports
- GitHub Pages

The project is a static website with no framework, build system, npm dependency, backend, or server-side processing. It is structured for direct deployment through GitHub Pages, with `index.html` as the root entry point and relative asset paths throughout.

## Repository Notes

- The watermark tool is intentionally separate from the public portfolio experience.
- The original watermark SVG files are preserved in `assets/logos/`.
- Google Fonts are loaded externally when network access is available.
