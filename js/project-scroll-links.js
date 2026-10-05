(() => {
  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('.archive-view-button');
    if (!trigger) return;

    event.preventDefault();
    event.stopPropagation();
    window.location.assign(trigger.href);
  }, true);
})();
