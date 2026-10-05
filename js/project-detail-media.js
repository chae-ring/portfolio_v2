(() => {
  const id = new URLSearchParams(window.location.search).get('id');
  const project = window.portfolioData.projects.find((item) => item.id === id);
  const visual = document.querySelector('.project-hero .project-visual');
  if (!project || !visual) return;

  if (project.detailImages?.length) {
    const gallery = document.createElement('div');
    gallery.className = 'project-detail-gallery';
    const slides = project.detailImages.map((src, index) => {
      const image = document.createElement('img');
      image.src = src;
      image.alt = `${project.title} 상세 화면 ${index + 1}`;
      image.className = 'project-detail-slide';
      image.classList.toggle('is-active', index === 0);
      gallery.append(image);
      return image;
    });
    const dots = document.createElement('div');
    dots.className = 'project-detail-gallery-dots';
    const dotItems = slides.map((_, index) => {
      const dot = document.createElement('span');
      dot.className = 'project-detail-gallery-dot';
      dot.classList.toggle('is-active', index === 0);
      dots.append(dot);
      return dot;
    });
    gallery.append(dots);
    visual.replaceChildren(gallery);

    let activeIndex = 0;
    window.setInterval(() => {
      slides[activeIndex].classList.remove('is-active');
      dotItems[activeIndex].classList.remove('is-active');
      activeIndex = (activeIndex + 1) % slides.length;
      slides[activeIndex].classList.add('is-active');
      dotItems[activeIndex].classList.add('is-active');
    }, 3200);
    return;
  }

  if (project.mediaType !== 'video') return;

  const video = document.createElement('video');
  video.className = 'project-cover-video';
  video.src = project.image;
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = 'metadata';
  video.setAttribute('aria-label', `${project.title} 프로젝트 대표 영상`);
  visual.replaceChildren(video);
})();
