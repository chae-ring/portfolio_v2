(() => {
  const data = window.portfolioData;
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  $('#contact-form button[type="submit"]').textContent = 'SUBMIT';
  $('.contact-copy .muted').remove();
  $('#all-projects-title + p')?.remove();
  $('.section-intro').innerHTML = '백엔드 서비스와 데이터 흐름을 설계해 사용자 문제를 해결한 프로젝트입니다.<br />AI 연동부터 데이터 처리·검색·알림까지, 각 기능을 실제 서비스 흐름으로 구현했습니다.';

  $$('[data-bind]').forEach((node) => { const value = data[node.dataset.bind]; if (value !== undefined) node.textContent = value; });
  $('[data-bind="email"]').textContent = data.contacts.email;
  $$('[data-social]').forEach((node) => { node.href = data.contacts[node.dataset.social] || '#'; });
  const contactGithub = $('.contact-socials [data-social="github"]');
  const contactLinkedin = $('.contact-socials [data-social="linkedin"]');
  contactGithub.setAttribute('aria-label', 'GitHub');
  contactGithub.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.27 9.27 0 0 1 12 6.94c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.23 10.23 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" /></svg>';
  contactLinkedin.setAttribute('aria-label', 'LinkedIn');
  contactLinkedin.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.24 6.94 1.97 1.97 0 0 0 5.25 3ZM20.44 13.4c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.38 1.87V8.5H9.36V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.72 1.85 3.05V20h3.37v-6.6h.34Z" /></svg>';
  $('[data-list="focus"]').innerHTML = data.focus.map((item) => `<li>${item}</li>`).join('');
  $('[data-list="profile"]').innerHTML = data.profile.map(([label, value]) => {
    const content = label === 'GITHUB'
      ? `<a href="${data.contacts.github}" target="_blank" rel="noopener noreferrer">${value}</a>`
      : value;
    return `<div><dt>${label}</dt><dd>${content}</dd></div>`;
  }).join('');
  $('#about .section-label').textContent = 'TECHNICAL SKILLS';
  $('[data-list="skillGroups"]').innerHTML = data.skills.map((group) => `<section class="skill-group"><h3>${group.title}</h3><ul>${group.items.map((item) => `<li>${item}</li>`).join('')}</ul></section>`).join('');
  $('[data-list="experiences"]').innerHTML = data.experiences.map((item) => `<article class="experience-item reveal"><div class="experience-item-header"><h3>${item.title}</h3><time>${item.period}</time></div>${item.status || item.location ? `<p class="experience-context">${[item.status, item.location].filter(Boolean).join(' · ')}</p>` : ''}<p>${item.description}</p>${item.highlights?.length ? `<section class="experience-highlights"><h4>주요 성과 및 활동</h4><ul>${item.highlights.map((highlight) => `<li>${highlight}</li>`).join('')}</ul></section>` : ''}${item.skills?.length ? `<section class="experience-skills"><h4>습득 역량</h4><ul>${item.skills.map((skill) => `<li>${skill}</li>`).join('')}</ul></section>` : ''}${!item.highlights?.length && !item.skills?.length ? `<a class="experience-detail-link" href="./experience-detail.html?id=${encodeURIComponent(item.id)}">활동 자세히 보기 <span aria-hidden="true">→</span></a>` : ''}</article>`).join('');
  const featuredTikitakaIndex = data.projects.findIndex((project) => project.id === 'tikitaka');
  if (featuredTikitakaIndex > 0) data.projects.unshift(data.projects.splice(featuredTikitakaIndex, 1)[0]);
  $('[data-list="projects"]').innerHTML = data.projects.map((project) => `<article class="project-card reveal" id="project-${project.id}"><div class="project-visual"><span class="project-type">${project.type}</span><img src="${project.image}" alt="${project.title} 프로젝트 미리보기" loading="lazy" /></div><div class="project-content"><h3>${project.title}</h3><p>${project.summary}</p><div class="project-tech">${project.tech.map((item) => `<span class="tech-chip">${item}</span>`).join('')}</div><div class="project-meta"><div><span>Period</span><span>${project.period}</span></div><div><span>Role</span><span>${project.role}</span></div></div><a class="text-link" href="./project-detail.html?id=${encodeURIComponent(project.id)}">VIEW PROJECT DETAIL ↗</a></div></article>`).join('');
  const scrollProjectFromHash = () => {
    const target = document.getElementById(window.location.hash.slice(1));
    if (!target?.classList.contains('project-card')) return;
    requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth', block: 'center' }));
  };
  scrollProjectFromHash();
  window.addEventListener('hashchange', scrollProjectFromHash);
  $$('[data-list="projects"] .project-card').forEach((card, index) => {
    const project = data.projects[index];
    const detailUrl = `./project-detail.html?id=${encodeURIComponent(project.id)}`;
    const githubUrl = project.links?.github || data.contacts.github;
    $('.project-visual', card).insertAdjacentHTML('beforeend', `<a class="project-detail-button" href="${detailUrl}">PROJECT DETAIL <span aria-hidden="true">↗</span></a>`);
    $('.text-link', card).outerHTML = `<div class="project-actions"><a class="github-link" href="${githubUrl}" target="_blank" rel="noreferrer">SEE ON GITHUB <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.27 9.27 0 0 1 12 6.94c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.37.01 2.47.01 2.81 0 .27.18.6.69.49A10.23 10.23 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" /></svg></a>${project.links?.demo ? `<a class="github-link" href="${project.links.demo}" target="_blank" rel="noreferrer">LIVE DEMO <span aria-hidden="true">↗</span></a>` : ''}</div>`;
  });

  const carousel = $('[data-project-carousel]');
  const carouselDots = $('[data-carousel-dots]');
  const archiveProjects = data.archiveProjects;
  const archiveTikitakaIndex = archiveProjects.findIndex((project) => project.id === 'tikitaka');
  const archiveCenterIndex = Math.floor(archiveProjects.length / 2);
  if (archiveTikitakaIndex >= 0 && archiveTikitakaIndex !== archiveCenterIndex) {
    const [tikitakaProject] = archiveProjects.splice(archiveTikitakaIndex, 1);
    archiveProjects.splice(archiveCenterIndex, 0, tikitakaProject);
  }
  const scrollToFeaturedProject = (id) => {
    const target = document.getElementById(`project-${id}`);
    if (!target) return;

    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    if (window.location.hash !== `#project-${id}`) window.location.hash = `project-${id}`;
  };
  let activeArchive = archiveCenterIndex;
  let pointerStart = null;
  let transitionTimer;
  const circularOffset = (index) => {
    let offset = index - activeArchive;
    const half = archiveProjects.length / 2;
    if (offset > half) offset -= archiveProjects.length;
    if (offset < -half) offset += archiveProjects.length;
    return offset;
  };
  const buildArchive = () => {
    carousel.innerHTML = archiveProjects.map((project, index) => {
      return `<article class="archive-card" data-archive-index="${index}" data-project-id="${project.id}" aria-label="${project.title} 카드"><span class="archive-content"><small>${project.type}</small><strong>${project.title}</strong><p>${project.description || project.subtitle}</p><button class="archive-view-button" type="button">VIEW PROJECT <span aria-hidden="true">→</span></button></span></article>`;
    }).join('');
    carouselDots.innerHTML = archiveProjects.map((project, index) => `<button type="button" data-carousel-index="${index}" aria-label="${project.title} 보기"></button>`).join('');
  };
  const updateArchive = () => {
    const gap = window.matchMedia('(max-width: 760px)').matches ? 148 : 250;
    $$('.archive-card', carousel).forEach((card, index) => {
      const offset = circularOffset(index);
      const distance = Math.abs(offset);
      card.style.setProperty('--x', `${offset * gap}px`);
      card.style.setProperty('--y', `${distance * 19}px`);
      card.style.setProperty('--z', `${-distance * 125}px`);
      card.style.setProperty('--ry', `${offset * -21}deg`);
      card.style.setProperty('--rz', `${offset * 4}deg`);
      card.style.setProperty('--scale', `${1 - distance * .105}`);
      card.style.setProperty('--opacity', `${1 - distance * .21}`);
      card.style.setProperty('--brightness', `${1 - distance * .2}`);
      card.style.setProperty('--order', `${10 - distance}`);
      card.classList.toggle('active', offset === 0);
      card.setAttribute('aria-label', `${archiveProjects[index].title} ${offset === 0 ? '프로젝트 상세 보기' : '카드 선택'}`);
    });
    $$('[data-carousel-index]', carouselDots).forEach((dot, index) => dot.classList.toggle('active', index === activeArchive));
  };
  const setActiveArchive = (nextIndex) => {
    activeArchive = (nextIndex + archiveProjects.length) % archiveProjects.length;
    carousel.classList.remove('is-sliding');
    void carousel.offsetWidth;
    carousel.classList.add('is-sliding');
    clearTimeout(transitionTimer);
    transitionTimer = setTimeout(() => carousel.classList.remove('is-sliding'), 460);
    updateArchive();
  };
  buildArchive();
  requestAnimationFrame(updateArchive);
  $('[data-carousel-control="previous"]').addEventListener('click', () => setActiveArchive(activeArchive - 1));
  $('[data-carousel-control="next"]').addEventListener('click', () => setActiveArchive(activeArchive + 1));
  carouselDots.addEventListener('click', (event) => { const dot = event.target.closest('[data-carousel-index]'); if (dot) setActiveArchive(Number(dot.dataset.carouselIndex)); });
  carousel.addEventListener('click', (event) => {
    const viewButton = event.target.closest('.archive-view-button');
    if (viewButton) {
      event.preventDefault();
      event.stopPropagation();
      scrollToFeaturedProject(viewButton.closest('[data-project-id]')?.dataset.projectId);
      return;
    }
    const card = event.target.closest('[data-archive-index]');
    if (!card) return;
    const index = Number(card.dataset.archiveIndex);
    if (index !== activeArchive) {
      event.preventDefault();
      event.stopPropagation();
      setActiveArchive(index);
      return;
    }
  });
  carousel.addEventListener('pointerdown', (event) => { pointerStart = event.clientX; });
  carousel.addEventListener('pointerup', (event) => {
    if (pointerStart === null) return;
    const distance = event.clientX - pointerStart;
    if (Math.abs(distance) > 35) { event.preventDefault(); setActiveArchive(activeArchive + (distance < 0 ? 1 : -1)); }
    pointerStart = null;
  });
  carousel.addEventListener('pointercancel', () => { pointerStart = null; });
  carousel.addEventListener('keydown', (event) => { if (event.key === 'ArrowLeft') setActiveArchive(activeArchive - 1); if (event.key === 'ArrowRight') setActiveArchive(activeArchive + 1); });
  window.addEventListener('resize', updateArchive);

  const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { entry.target.classList.toggle('is-visible', entry.isIntersecting); }), { threshold: .14 });
  $$('.reveal').forEach((element) => revealObserver.observe(element));
  const navLinks = $$('.primary-navigation a');
  const navObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) navLinks.forEach((link) => link.classList.toggle('active', link.hash === `#${entry.target.id}`)); }), { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach((section) => navObserver.observe(section));
  const menu = $('.primary-navigation');
  const toggle = $('.menu-toggle');
  toggle.addEventListener('click', () => { const open = menu.classList.toggle('is-open'); toggle.setAttribute('aria-expanded', open); });
  navLinks.forEach((link) => link.addEventListener('click', () => { menu.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); }));
  const contactForm = $('#contact-form');
  contactForm.action = data.contacts.formEndpoint;
  contactForm.method = 'post';
  contactForm.insertAdjacentHTML('beforeend', '<input type="hidden" name="_subject" value="[Portfolio] 새 문의가 도착했습니다."><input type="hidden" name="_template" value="table">');
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const submitButton = $('button[type="submit"]', contactForm);
    const note = $('#form-note');
    const endpoint = data.contacts.formEndpoint.replace('formsubmit.co/', 'formsubmit.co/ajax/');
    submitButton.disabled = true;
    note.textContent = '문의 내용을 전송하고 있습니다.';
    try {
      const response = await fetch(endpoint, { method: 'POST', body: new FormData(contactForm), headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error('Submission failed');
      contactForm.reset();
      note.textContent = '문의가 제출되었습니다. 감사합니다!';
    } catch (error) {
      note.textContent = '전송에 실패했습니다. 잠시 후 다시 시도해 주세요.';
    } finally {
      submitButton.disabled = false;
    }
  });
  $('#year').textContent = new Date().getFullYear();
})();
