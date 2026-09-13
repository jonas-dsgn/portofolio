const projectId = Number(document.body.dataset.projectId);
const project = projectsData.find(item => item.id === projectId);
const detailContainer = document.getElementById('projectDetail');
const pageProject = project && {
  ...project,
  images: project.images.map(image => `../${image.slice(2)}`)
};

if (pageProject && detailContainer) {
  detailContainer.innerHTML = `
    <a class="detail-back-link" href="../projects.html">&larr; All Projects</a>
    <div class="project-detail-header">
      <p class="overview-kicker">JONAS NETTEL / PROJECT ${project.id}</p>
      <h1 class="overview-title">${project.title}</h1>
      <p class="project-detail-caption">${project.caption}</p>
    </div>
    <div class="project-detail-intro">
      <img class="project-detail-small-logo" src="../assets/logos/jonasnettel_small.svg" alt="Jonas Nettel mark">
      <p class="project-detail-description">${project.description}</p>
    </div>
    <dl class="project-detail-meta">
      <div><dt>Project type</dt><dd>${project.type}</dd></div>
      <div><dt>Location</dt><dd>${project.location}</dd></div>
      <div><dt>Tools</dt><dd class="project-tools">${project.tools.length ? project.tools.map(tool => `
        <span class="project-tool"><img src="../assets/logos/${tool.logo}" alt="">${tool.name}</span>
      `).join('') : '<span class="project-tools-empty">No tools listed yet.</span>'}</dd></div>
      <div><dt>Instagram</dt><dd class="project-socials">${project.socials.map(person => `
        <a href="https://www.instagram.com/${person.handle.slice(1)}/" target="_blank" rel="noreferrer">${person.handle}</a><span>${person.role}</span>
      `).join('')}</dd></div>
    </dl>
    <div class="project-detail-gallery">
      ${pageProject.images.map((image, index) => `
        <button class="project-detail-image-button" type="button" aria-label="Open image ${index + 1} of ${pageProject.images.length}">
          <img class="project-detail-image" src="${image}" alt="${pageProject.title}, image ${index + 1}" loading="${index === 0 ? 'eager' : 'lazy'}">
        </button>
      `).join('')}
    </div>
  `;

  detailContainer.querySelectorAll('.project-detail-image-button').forEach((button, index) => {
    button.addEventListener('click', () => openLightbox(pageProject, index));
  });
}
