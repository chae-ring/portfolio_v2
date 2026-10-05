(() => {
  const projects = window.portfolioData.projects;

  const createVideo = (src) => {
    const video = document.createElement('video');
    video.className = 'project-cover-video';
    video.src = src;
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.setAttribute('aria-label', '프로젝트 대표 영상');
    return video;
  };

  document.querySelectorAll('[data-list="projects"] .project-card').forEach((card, index) => {
    const project = projects[index];
    if (project?.mediaType !== 'video') return;

    const image = card.querySelector('.project-visual img');
    if (image) image.replaceWith(createVideo(project.image));
  });
})();
