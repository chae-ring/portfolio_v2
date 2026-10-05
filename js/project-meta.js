(() => {
  const projects = window.portfolioData.projects;
  document.querySelectorAll('[data-list="projects"] .project-card').forEach((card, index) => {
    const project = projects[index];
    const people = project?.people;
    if (project?.id) card.id = `project-${project.id}`;
    if (!people) return;

    card.querySelector('.project-meta').insertAdjacentHTML(
      'beforeend',
      `<div><span>People</span><span>${people}</span></div>`
    );
  });
})();
