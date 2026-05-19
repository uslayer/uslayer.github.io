/*!
 * US LAYER — Gallery Lightbox
 * Appends overlay directly to <body> to avoid CSS transform stacking-context issues.
 */
(function () {
  'use strict';

  var overlay = null;

  function createOverlay() {
    var el = document.createElement('div');
    el.id = 'lb';
    el.className = 'lb-overlay';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-label', 'Photo viewer');
    el.innerHTML =
      '<button class="lb-close" aria-label="Close image viewer">&times;</button>' +
      '<img id="lb-img" src="" alt="">';
    el.addEventListener('click', function (e) {
      if (e.target === el || e.target.classList.contains('lb-close')) {
        closeLightbox();
      }
    });
    document.body.appendChild(el);
    return el;
  }

  function closeLightbox() {
    if (overlay) {
      overlay.classList.remove('active');
      // reset src after fade so the old image doesn't flash on next open
      setTimeout(function () {
        var img = document.getElementById('lb-img');
        if (img) img.src = '';
      }, 200);
    }
  }

  window.openLightbox = function (src, alt) {
    if (!overlay) overlay = createOverlay();
    var img = document.getElementById('lb-img');
    img.src = src;
    img.alt = alt || '';
    // force reflow so animation replays each open
    overlay.classList.remove('active');
    void overlay.offsetWidth;
    overlay.classList.add('active');
  };

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
}());
