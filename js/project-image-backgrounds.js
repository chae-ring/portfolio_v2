(() => {
  const projects = window.portfolioData.projects;

  document.querySelectorAll('[data-list="projects"] .project-card').forEach((card, index) => {
    const background = projects[index]?.imageBackground;
    const image = card.querySelector('.project-visual img');
    if (background && image) image.style.backgroundColor = background;
  });
})();
