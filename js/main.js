(() => {
  const menuButton = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');

  const closeMenu = () => {
    if (!menuButton || !nav) return;
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  };

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = !nav.classList.contains('is-open');
      nav.classList.toggle('is-open', open);
      menuButton.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start'});
      history.replaceState(null, '', href);
    });
  });

  const input = document.querySelector('[data-post-input]');
  const count = document.querySelector('[data-post-count]');
  const preview = document.querySelector('[data-post-preview]');
  const shareButton = document.querySelector('[data-share-button]');
  const previewShare = document.querySelector('[data-preview-share]');

  if (input && count && preview && shareButton && previewShare) {
    const syncPost = () => {
      const value = input.value.slice(0, 100);
      if (input.value !== value) input.value = value;
      count.textContent = `${value.length} / 100`;
      preview.textContent = value || 'Your 100-character business post will preview here.';
      shareButton.disabled = value.trim().length === 0;
      previewShare.disabled = value.trim().length === 0;
    };

    const share = async () => {
      const text = input.value.trim();
      if (!text) return;
      if (navigator.share) {
        try { await navigator.share({text}); } catch (error) { if (error?.name !== 'AbortError') console.warn('Share unavailable'); }
        return;
      }
      if (navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(text);
          const original = shareButton.textContent;
          shareButton.textContent = 'Copied';
          window.setTimeout(() => { shareButton.textContent = original; }, 1200);
        } catch (_) { /* no silent data submission fallback */ }
      }
    };

    input.addEventListener('input', syncPost);
    shareButton.addEventListener('click', share);
    previewShare.addEventListener('click', share);
    syncPost();
  }
})();
