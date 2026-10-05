(() => {
  const root = document.getElementById('experience-detail');
  const id = new URLSearchParams(window.location.search).get('id');
  const experience = window.portfolioData.experiences.find((item) => item.id === id);

  if (!experience) {
    document.title = 'Experience not found — CHAERIN YEO';
    root.innerHTML = '<section class="not-found"><div><h1>ACTIVITY NOT FOUND</h1><a href="./index.html#experience">활동 목록으로 돌아가기</a></div></section>';
    return;
  }

  document.title = `${experience.title} — CHAERIN YEO`;
  root.innerHTML = `
    <p class="detail-kicker">ACTIVITY DETAIL</p>
    <h1 class="detail-title">${experience.title}</h1>
    <p class="detail-company">${experience.company}</p>
    <p class="detail-period">${experience.period}</p>
    <section class="activity-section" aria-labelledby="activity-intro-title">
      <h2 id="activity-intro-title">활동 소개</h2>
      <p>${experience.description}</p>
    </section>
    <dl class="detail-facts">
      <dt>활동</dt><dd>${experience.company}</dd>
      <dt>기간</dt><dd>${experience.period}</dd>
    </dl>
  `;
})();
