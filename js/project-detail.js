(() => {
  const root = document.getElementById('project-detail');
  const id = new URLSearchParams(window.location.search).get('id');
  const project = window.portfolioData.projects.find((item) => item.id === id);

  if (!project) {
    document.title = 'Project not found — CHAERIN YEO';
    root.innerHTML = '<section class="not-found"><div><h1>PROJECT NOT FOUND</h1><a href="./index.html#projects">프로젝트 목록으로 돌아가기</a></div></section>';
    return;
  }

  document.title = `${project.title} — CHAERIN YEO`;
  const details = project.sections || [
    { title: '서비스 핵심 기능', description: project.detail },
    { title: '문제 해결 과정', description: '서비스 흐름을 기준으로 데이터 구조와 API를 설계하고, 사용자에게 필요한 정보를 빠르게 전달하는 화면 경험을 구현했습니다.' },
    { title: '나의 역할', description: project.role }
  ];
  const visibleDetails = details.filter((item) => item.description !== project.role);
  const toArray = (value) => Array.isArray(value) ? value : value ? [value] : [];
  const renderParagraphs = (paragraphs) => toArray(paragraphs).map((paragraph) => `<p>${paragraph}</p>`).join('');
  const renderBullets = (bullets) => bullets?.length ? `<ul>${bullets.map((bullet) => `<li>${bullet}</li>`).join('')}</ul>` : '';
  const renderSubsections = (subsections) => toArray(subsections).map((section) => `<section class="feature-subsection"><h4>${section.title}</h4>${renderParagraphs(section.paragraphs || section.description)}${renderBullets(section.bullets)}${renderParagraphs(section.closing)}</section>`).join('');
  const renderFunctionItems = (items) => items.map((item) => `<article class="feature-item"><div class="feature-item-head"><h3>${item.title}</h3></div><div class="feature-content">${renderParagraphs(item.paragraphs || item.description)}${renderBullets(item.bullets)}${renderSubsections(item.subsections)}${renderParagraphs(item.closing)}</div></article>`).join('');
  const renderIntro = (content) => `<div class="function-intro">${renderParagraphs(content)}</div>`;
  const functionIntro = project.functionIntro || project.summary;
  const functionDetails = visibleDetails;
  const troubleshooting = project.troubleshooting;
  const troubleshootingSection = troubleshooting ? `<section class="detail-section detail-functions"><h2>트러블 슈팅 경험</h2>${troubleshooting.description ? renderIntro(troubleshooting.description) : ''}<div class="feature-list">${renderFunctionItems(troubleshooting.items)}</div></section>` : '';
  const github = project.links?.github ? `<a href="${project.links.github}" target="_blank" rel="noreferrer">SEE ON GITHUB <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.27 9.27 0 0 1 12 6.94c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.23 10.23 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" /></svg></a>` : '';

  root.innerHTML = `
    <article>
      <section class="project-hero">
        <div class="project-visual"><img src="${project.image}" alt="${project.title} 프로젝트 대표 이미지" /></div>
      </section>
      <section class="detail-section project-overview">
        <div>
          <h1 class="project-title">${project.title}</h1>
          <div class="project-links">${github}${project.links?.demo ? `<a href="${project.links.demo}" target="_blank" rel="noreferrer">LIVE DEMO <span aria-hidden="true">↗</span></a>` : ''}</div>
          <p class="project-summary">${project.summary}</p>
        </div>
      </section>
      <section class="detail-section detail-functions"><h2>주요 기능 개발</h2>${renderIntro(functionIntro)}<div class="feature-list">${renderFunctionItems(functionDetails)}</div></section>
      ${troubleshootingSection}
    </article>`;
})();
