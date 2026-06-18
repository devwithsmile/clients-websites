/* Castor Dental Care — shared chrome (header + footer) and behaviour.
   Ported from .dc Header/Footer components + DCLogic reveal/hover logic.
   Each page sets <body data-page="home|about|services|gallery|financing|contact">. */
(function () {
  var page = document.body.getAttribute('data-page') || '';
  var nav = [
    ['index.html', 'home', 'Home'],
    ['about.html', 'about', 'About'],
    ['services.html', 'services', 'Services'],
    ['gallery.html', 'gallery', 'Smile Gallery'],
    ['financing.html', 'financing', 'Financing'],
    ['contact.html', 'contact', 'Contact']
  ];

  var toothSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5.5c-2-2.2-5.5-2-7 .5-1.4 2.4-.4 5.2 1 7.6.8 1.4 1.6 3 2 4.6.3 1.2 1.8 1.2 2.1 0 .4-1.6 1.2-3.2 2-4.6 1.4-2.4 2.4-5.2 1-7.6-1.5-2.5-5-2.7-7-.5"/></svg>';

  var desktopLinks = nav.map(function (n) {
    return '<a href="' + n[0] + '" class="nav-a' + (n[1] === page ? ' active' : '') + '">' + n[2] + '</a>';
  }).join('');
  var mobileLinks = nav.map(function (n) {
    return '<a href="' + n[0] + '">' + n[2] + '</a>';
  }).join('');

  var header =
    '<header style="position:sticky;top:0;z-index:200;background:rgba(255,255,255,0.82);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border-bottom:1px solid #E6EDF4;">' +
      '<div style="width:min(100% - 48px,1240px);margin:0 auto;height:74px;display:flex;align-items:center;justify-content:space-between;gap:24px;">' +
        '<a href="index.html" style="display:flex;align-items:center;gap:11px;text-decoration:none;flex:none;">' +
          '<span style="width:38px;height:38px;border-radius:11px;background:linear-gradient(145deg,#1F86E8,#0B5FB0);display:grid;place-items:center;box-shadow:0 6px 16px rgba(20,116,212,0.28);">' + toothSvg + '</span>' +
          '<span style="display:flex;flex-direction:column;line-height:1;">' +
            '<strong style="font-family:\'Schibsted Grotesk\',sans-serif;font-size:18px;font-weight:700;color:#0E2A3D;letter-spacing:-0.01em;">Castor Dental Care</strong>' +
            '<span style="font-family:\'Hanken Grotesk\',sans-serif;font-size:11.5px;font-weight:500;color:#7E93A3;letter-spacing:0.04em;margin-top:3px;">NORTHEAST PHILADELPHIA</span>' +
          '</span>' +
        '</a>' +
        '<nav style="display:flex;align-items:center;gap:2px;" data-desktop-nav>' + desktopLinks + '</nav>' +
        '<div style="display:flex;align-items:center;gap:12px;flex:none;">' +
          '<a href="tel:+12157281144" style="display:flex;align-items:center;gap:8px;text-decoration:none;font-family:\'Hanken Grotesk\',sans-serif;font-weight:600;font-size:14.5px;color:#0E2A3D;" data-phone>' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1474D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.74a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"/></svg>' +
            '215-728-1144' +
          '</a>' +
          '<a href="contact.html" data-hover="transform:translateY(-1px);box-shadow:0 12px 26px rgba(20,116,212,0.36);" style="display:inline-flex;align-items:center;gap:8px;background:#1474D4;color:#fff;text-decoration:none;font-family:\'Hanken Grotesk\',sans-serif;font-weight:600;font-size:14.5px;padding:11px 18px;border-radius:999px;box-shadow:0 8px 20px rgba(20,116,212,0.28);transition:transform .2s ease,box-shadow .2s ease;" data-cta>Book a visit</a>' +
          '<button type="button" id="burger" aria-label="Menu" style="display:none;width:42px;height:42px;border-radius:11px;border:1px solid #E0E8F0;background:#fff;place-items:center;cursor:pointer;" data-burger>' +
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E2A3D" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>' +
          '</button>' +
        '</div>' +
      '</div>' +
      '<div class="mobile-panel" id="mobilePanel">' + mobileLinks + '</div>' +
    '</header>';

  var footer =
    '<footer style="background:#0B2230;color:#C7D6E0;font-family:\'Hanken Grotesk\',sans-serif;">' +
      '<div style="width:min(100% - 48px,1240px);margin:0 auto;padding:68px 0 30px;">' +
        '<div style="display:grid;grid-template-columns:1.5fr 1fr 1fr 1.2fr;gap:40px;" data-foot-grid>' +
          '<div>' +
            '<div style="display:flex;align-items:center;gap:11px;margin-bottom:18px;">' +
              '<span style="width:36px;height:36px;border-radius:10px;background:linear-gradient(145deg,#2A93F0,#0B5FB0);display:grid;place-items:center;"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5.5c-2-2.2-5.5-2-7 .5-1.4 2.4-.4 5.2 1 7.6.8 1.4 1.6 3 2 4.6.3 1.2 1.8 1.2 2.1 0 .4-1.6 1.2-3.2 2-4.6 1.4-2.4 2.4-5.2 1-7.6-1.5-2.5-5-2.7-7-.5"/></svg></span>' +
              '<strong style="font-family:\'Schibsted Grotesk\',sans-serif;font-size:18px;font-weight:700;color:#fff;letter-spacing:-0.01em;">Castor Dental Care</strong>' +
            '</div>' +
            '<p style="margin:0;max-width:320px;font-size:14.5px;line-height:1.7;color:#9FB4C2;">Comprehensive family, cosmetic, restorative, implant, and specialty dental care in Northeast Philadelphia. Comfortable, modern, patient-first.</p>' +
            '<div style="display:flex;gap:10px;margin-top:22px;">' +
              '<a href="https://www.facebook.com/CastorDentalCare/" aria-label="Facebook" class="foot-soc"><svg width="17" height="17" viewBox="0 0 24 24" fill="#C7D6E0"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V9z"/></svg></a>' +
              '<a href="https://www.youtube.com/user/castordentalcare" aria-label="YouTube" class="foot-soc"><svg width="17" height="17" viewBox="0 0 24 24" fill="#C7D6E0"><path d="M22 12s0-3-.4-4.4a2.5 2.5 0 0 0-1.8-1.8C18.4 5.4 12 5.4 12 5.4s-6.4 0-7.8.4A2.5 2.5 0 0 0 2.4 7.6C2 9 2 12 2 12s0 3 .4 4.4a2.5 2.5 0 0 0 1.8 1.8c1.4.4 7.8.4 7.8.4s6.4 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8C22 15 22 12 22 12zM10 15V9l5 3-5 3z"/></svg></a>' +
            '</div>' +
          '</div>' +
          '<div>' +
            '<h3 style="font-family:\'Schibsted Grotesk\',sans-serif;color:#fff;font-size:14px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;margin:0 0 16px;">Practice</h3>' +
            '<a href="index.html" class="foot-link">Home</a>' +
            '<a href="about.html" class="foot-link">Meet the Dentists</a>' +
            '<a href="services.html" class="foot-link">Services</a>' +
            '<a href="gallery.html" class="foot-link">Smile Gallery</a>' +
          '</div>' +
          '<div>' +
            '<h3 style="font-family:\'Schibsted Grotesk\',sans-serif;color:#fff;font-size:14px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;margin:0 0 16px;">Patients</h3>' +
            '<a href="financing.html" class="foot-link">Financing</a>' +
            '<a href="financing.html" class="foot-link">New Patient Offer</a>' +
            '<a href="contact.html" class="foot-link">Request Appointment</a>' +
            '<a href="contact.html" class="foot-link">Contact &amp; Hours</a>' +
          '</div>' +
          '<div>' +
            '<h3 style="font-family:\'Schibsted Grotesk\',sans-serif;color:#fff;font-size:14px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;margin:0 0 16px;">Get in touch</h3>' +
            '<p style="margin:0 0 12px;font-size:14.5px;line-height:1.6;color:#9FB4C2;">7258 Castor Avenue<br>Philadelphia, PA 19149</p>' +
            '<a href="tel:+12157281144" style="display:block;color:#fff;text-decoration:none;font-size:16px;font-weight:600;margin-bottom:8px;">215-728-1144</a>' +
            '<a href="mailto:castordentist@gmail.com" class="foot-link" style="margin-bottom:16px;">castordentist@gmail.com</a>' +
            '<div style="font-size:13.5px;line-height:1.7;color:#7E93A3;">Mon&ndash;Tue 9&ndash;7 &middot; Wed&ndash;Thu 9&ndash;6<br>Fri 9&ndash;2 &middot; Sat&ndash;Sun closed</div>' +
          '</div>' +
        '</div>' +
        '<div style="display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;border-top:1px solid rgba(255,255,255,0.1);margin-top:48px;padding-top:24px;font-size:13px;color:#7E93A3;">' +
          '<span>&copy; 2026 Castor Dental Care. All rights reserved.</span>' +
          '<span style="display:flex;gap:18px;align-items:center;flex-wrap:wrap;">' +
            '<a href="privacy.html" class="foot-legal">Privacy</a>' +
            '<span>7258 Castor Avenue, Philadelphia, PA 19149</span>' +
          '</span>' +
        '</div>' +
      '</div>' +
    '</footer>';

  var h = document.getElementById('site-header');
  if (h) h.innerHTML = header;
  var f = document.getElementById('site-footer');
  if (f) f.innerHTML = footer;

  // mobile menu toggle
  var burger = document.getElementById('burger');
  var panel = document.getElementById('mobilePanel');
  if (burger && panel) burger.addEventListener('click', function () { panel.classList.toggle('open'); });

  // hover effects (ported from .dc style-hover attribute)
  document.querySelectorAll('[data-hover]').forEach(function (el) {
    var base = el.getAttribute('style') || '';
    var hover = el.getAttribute('data-hover');
    el.addEventListener('mouseenter', function () { el.setAttribute('style', base + ';' + hover); });
    el.addEventListener('mouseleave', function () { el.setAttribute('style', base); });
  });

  // scroll reveal (ported from DCLogic)
  var reveal = function () {
    var vh = window.innerHeight;
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      if (el.dataset.shown) return;
      if (el.getBoundingClientRect().top < vh * 0.92) {
        el.style.opacity = '1'; el.style.transform = 'none'; el.dataset.shown = '1';
      }
    });
  };
  document.querySelectorAll('[data-reveal-hero]').forEach(function (el) { el.style.opacity = '1'; el.style.transform = 'none'; });
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () { reveal(); ticking = false; });
  }, { passive: true });
  reveal();
  setTimeout(reveal, 600);
})();
