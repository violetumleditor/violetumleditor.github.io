(function () {
  'use strict';

  // Mobile menu
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mmenu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.hasAttribute('hidden');
      if (open) menu.removeAttribute('hidden'); else menu.setAttribute('hidden', '');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) { menu.setAttribute('hidden', ''); burger.setAttribute('aria-expanded', 'false'); }
    });
  }

  // Docs menu on small screens
  var docbtn = document.getElementById('docbtn');
  var dside = document.getElementById('dside');
  if (docbtn && dside) {
    docbtn.addEventListener('click', function () {
      var open = dside.classList.toggle('open');
      docbtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Scale the Violet window replica to the available width
  var wrap = document.getElementById('vwin');
  var inner = document.getElementById('vwinInner');
  if (wrap && inner) {
    var fit = function () {
      var s = Math.min(1, (wrap.clientWidth || 1136) / 1136);
      inner.style.transform = 'scale(' + s + ')';
      wrap.style.height = Math.round(760 * s) + 'px';
    };
    fit();
    if ('ResizeObserver' in window) new ResizeObserver(fit).observe(wrap);
    else window.addEventListener('resize', fit);
  }

  // Hide the ad band when no ad is served (blocked, unfilled or site not approved yet)
  var band = document.querySelector('.adband');
  if (band) {
    window.setTimeout(function () {
      var ins = band.querySelector('ins.adsbygoogle');
      var filled = ins && (ins.getAttribute('data-ad-status') === 'filled' || ins.querySelector('iframe'));
      if (!filled) band.classList.add('ad-hidden');
    }, 6000);
  }
})();
