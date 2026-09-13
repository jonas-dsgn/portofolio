const projectsData = [
  {
    id: 1,
    title: "#1 VINTAGE NOISE",
    caption: "Vintage Collection / 2026",
    type: "Photography / Fashion editorial",
    location: "Vienna, Austria",
    tools: [
      { name: "iPhone", logo: "apple.svg" },
      { name: "Lightroom", logo: "adobe.svg" }
    ],
    socials: [
      { handle: "@jonasnettel", role: "Creative direction" },
      { handle: "@tob1_rx", role: "Photographer" }
    ],
    description: "A study in texture, attitude, and the imperfect energy of vintage fashion.",
    images: ["./images/project-1.jpeg"]
  },
  {
    id: 2,
    title: "#2 URBAN COMPOSITION",
    caption: "Studio Series / 2026",
    type: "Photography / Visual composition",
    location: "Lower Austria",
    tools: [
      { name: "iPhone", logo: "apple.svg" },
      { name: "Lightroom", logo: "adobe.svg" }
    ],
    socials: [{ handle: "@jonasnettel", role: "Creative direction and photography" }],
    description: "A studio-led composition built around shape, contrast, and a quiet urban rhythm.",
    images: ["./images/project-2.jpeg"]
  },
  {
    id: 3,
    title: "#3 HANGING ME",
    caption: "Spring Campaign / 2026",
    type: "Photography / Fashion shooting",
    location: "Lower Austria",
    tools: [
      { name: "iPhone", logo: "apple.svg" },
      { name: "Lightroom", logo: "adobe.svg" }
    ],
    socials: [
      { handle: "@jonasnettel", role: "Creative direction" },
      { handle: "@tob1_rx", role: "Photographer" }
    ],
    description: "A fashion image focused on movement, suspension, and the tension between figure and space.",
    images: ["./images/project-3.jpeg"]
  },
  {
    id: 4,
    title: "#4 VINTAGE GARAGE",
    caption: "Vintage Collection / 2026",
    type: "Photography / Fashion editorial",
    location: "Mödling, Austria",
    tools: [
      { name: "iPhone", logo: "apple.svg" },
      { name: "Lightroom", logo: "adobe.svg" }
    ],
    socials: [{ handle: "@jonasnettel", role: "Creative direction and photography" }],
    description: "A raw vintage study where clothing, place, and atmosphere come together in one frame.",
    images: ["./images/project-4.jpeg"]
  }
];

function renderProjects(searchTerm = '') {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.replaceChildren();
  const projectLimit = Number(document.body.dataset.projectLimit) || projectsData.length;
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const visibleProjects = projectsData
    .slice(0, projectLimit)
    .filter(project => `${project.title} ${project.caption}`.toLowerCase().includes(normalizedSearch));

  visibleProjects.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.setProperty('--order', index);
    card.innerHTML = `
      <a class="project-card-link" href="./projects/project-${project.id}.html" aria-label="View ${project.title}">
        <div class="project-img-wrapper">
          <img class="project-img" src="${project.images[0]}" alt="${project.title}" loading="lazy">
        </div>
        <div class="project-info">
          <div class="project-title">${project.title}</div>
          <div class="project-caption">${project.caption}</div>
        </div>
      </a>
    `;
    grid.appendChild(card);
  });

  if (!visibleProjects.length) {
    const emptyState = document.createElement('p');
    emptyState.className = 'project-search-empty';
    emptyState.textContent = 'No projects found.';
    grid.appendChild(emptyState);
  }
}

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const previousImage = document.getElementById('previousImage');
const nextImage = document.getElementById('nextImage');
let activeProject = null;
let activeImageIndex = 0;
let touchStartX = 0;

function updateLightboxImage() {
  if (!activeProject) return;
  const imageCount = activeProject.images.length;
  lightboxImg.src = activeProject.images[activeImageIndex];
  lightboxImg.alt = `${activeProject.title}, image ${activeImageIndex + 1} of ${imageCount}`;
  lightboxCaption.textContent = `${activeProject.title} - ${activeProject.caption}${imageCount > 1 ? ` (${activeImageIndex + 1}/${imageCount})` : ''}`;
  const hasMultipleImages = imageCount > 1;
  previousImage.hidden = !hasMultipleImages;
  nextImage.hidden = !hasMultipleImages;
}

function openLightbox(project, imageIndex = 0) {
  activeProject = project;
  activeImageIndex = imageIndex;
  updateLightboxImage();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
  lightbox.focus();
}

function showImage(step) {
  if (!activeProject || activeProject.images.length < 2) return;
  const imageCount = activeProject.images.length;
  activeImageIndex = (activeImageIndex + step + imageCount) % imageCount;
  updateLightboxImage();
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
  lightboxImg.src = '';
  activeProject = null;
}

if (lightbox) {
  document.getElementById('closeLightbox').addEventListener('click', closeLightbox);
  previousImage.addEventListener('click', () => showImage(-1));
  nextImage.addEventListener('click', () => showImage(1));
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  lightbox.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') showImage(-1);
    if (event.key === 'ArrowRight') showImage(1);
    if (event.key === 'Escape') closeLightbox();
  });
  lightbox.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX;
  }, { passive: true });
  lightbox.addEventListener('touchend', (event) => {
    const swipeDistance = event.changedTouches[0].screenX - touchStartX;
    if (Math.abs(swipeDistance) >= 50) showImage(swipeDistance > 0 ? -1 : 1);
  }, { passive: true });
}

const projectSearch = document.getElementById('projectSearch');
if (projectSearch) {
  projectSearch.addEventListener('input', event => renderProjects(event.target.value));
}

renderProjects();
