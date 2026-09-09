(() => {
  'use strict';
  const root = document.documentElement;
  const theme = document.getElementById('theme-toggle');
  const applyTheme = dark => {
    root.dataset.theme = dark ? 'dark' : 'light';
    theme.setAttribute('aria-pressed', String(dark));
    theme.setAttribute('aria-label', dark ? 'Use light theme' : 'Use dark theme');
    theme.textContent = dark ? 'Light mode' : 'Dark mode';
    document.querySelector('meta[name="theme-color"]').content = dark ? '#10151c' : '#f4f2ec';
  };
  let saved = null;
  try { saved = localStorage.getItem('hq-theme'); } catch (_) { /* Storage is optional. */ }
  applyTheme(saved === 'dark');
  theme.hidden = false;
  theme.addEventListener('click', () => {
    applyTheme(root.dataset.theme !== 'dark');
    try { localStorage.setItem('hq-theme', root.dataset.theme); } catch (_) { /* Keep session theme. */ }
  });
  const filters = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('[data-categories]')];
  document.querySelector('.filters').hidden = false;
  const filterStatus = document.getElementById('filter-status');
  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(other => other.setAttribute('aria-pressed', String(other === button)));
    let count = 0;
    cards.forEach(card => {
      const show = button.dataset.filter === 'all' || card.dataset.categories.split(' ').includes(button.dataset.filter);
      card.hidden = !show;
      if (show) count++;
    });
    filterStatus.textContent = `${count} ${count === 1 ? 'project' : 'projects'} shown: ${button.textContent}.`;
  }));
  const copy = document.getElementById('copy-email');
  const copyStatus = document.getElementById('copy-status');
  copy.hidden = false;
  copy.addEventListener('click', async () => {
    copy.disabled = true;
    try {
      await navigator.clipboard.writeText('chinhueiqi@gmail.com');
      copyStatus.textContent = 'Email copied!';
    } catch (_) {
      copyStatus.textContent = 'Please select and copy the email address above.';
    } finally { copy.disabled = false; }
  });
  const parallaxItems = [
    ...document.querySelectorAll('.skill-board, .about h2, .project')
  ];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let parallaxFrame = null;
  const updateParallax = () => {
    parallaxFrame = null;
    if (reduceMotion.matches) return;
    const viewportCenter = window.innerHeight / 2;
    parallaxItems.forEach((item, index) => {
      const distance = item.getBoundingClientRect().top + item.offsetHeight / 2 - viewportCenter;
      const depth = index === 0 ? -0.035 : index === 1 ? 0.018 : 0.008;
      item.style.setProperty('--parallax-y', `${Math.round(distance * depth)}px`);
    });
  };
  const requestParallax = () => {
    if (parallaxFrame === null) parallaxFrame = requestAnimationFrame(updateParallax);
  };
  window.addEventListener('scroll', requestParallax, { passive: true });
  window.addEventListener('resize', requestParallax);
  reduceMotion.addEventListener('change', requestParallax);
  requestParallax();
})();
