# Jonas Nettel Portfolio

A minimal editorial portfolio website for Jonas Nettel's photography, fashion, and digital artwork.

## Features

- Responsive portfolio homepage
- Featured projects section
- Complete project overview with search
- Dedicated project detail pages
- Multi-image project galleries
- Lightbox with desktop arrows, keyboard controls, and mobile swipe navigation
- Responsive mobile navigation
- Animated brand marquee
- Client-side watermarking tool for photos

## Project Structure

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

## Run Locally

This is a static website and does not require a development server or build step.

Open `index.html` directly in a browser, or use a local static server if your browser restricts local file access.

The private watermark tool is available at:

```text
tools/watermark.html
```

It runs entirely in the browser. Uploaded photos are not sent to a server.

## GitHub Pages Deployment

1. Push the repository to GitHub.
2. Open the repository's **Settings**.
3. Go to **Pages**.
4. Select the deployment source and branch.
5. Use the repository root as the site folder.
6. Save the settings.

GitHub Pages will use `index.html` as the homepage.

## Adding a Project

Add the project metadata to `js/projects.js`:

```js
{
  id: 5,
  title: "#5 PROJECT TITLE",
  caption: "Collection / 2026",
  type: "Photography / Fashion editorial",
  location: "Austria",
  tools: [
    { name: "Camera name", logo: "canon.svg" }
  ],
  socials: [
    { handle: "@example", role: "Photographer" }
  ],
  description: "A short description of the project.",
  images: [
    "./images/project-5.jpeg"
  ]
}
```

Then create a matching detail page in `projects/` using the existing project page pattern.

## Image Guidelines

- Keep image filenames lowercase and use hyphens.
- Use relative paths only.
- Optimize large images before uploading them.
- Add additional images to a project's `images` array to enable gallery navigation.

## Technologies

- HTML
- CSS
- Vanilla JavaScript
- Canvas API for watermark exports
- GitHub Pages

No framework, build system, npm dependency, or backend service is required.

## Notes

- The watermark tool is intentionally not linked from the main website navigation.
- The original watermark SVG files are preserved in `assets/logos/`.
- External Google Fonts are loaded from Google Fonts when network access is available.
