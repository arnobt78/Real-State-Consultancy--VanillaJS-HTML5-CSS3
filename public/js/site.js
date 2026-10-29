/* Shared behavior for every page: language, menu, old home hashes, and the contact handoff. */
(function () {
  var root = document.documentElement;
  var F = function (id) { return document.getElementById(id); };
  var navLinks = document.querySelectorAll('[data-nav]');
  var nav = document.getElementById('nav'), menuBtn = document.getElementById('menu-btn');
  var page = document.body.getAttribute('data-page') || 'home';
  var STAGE = {1: ['পরিকল্পনা পর্যায়ে', 'Planning'], 2: ['নির্মাণ চলছে', 'Under construction'], 3: ['বিদ্যমান ভবন', 'Existing building']};
  var lang = 'bn';
  /* Bangla is the default. A saved choice lives only on this device under bs-lang. */
  try { lang = localStorage.getItem('bs-lang') || 'bn'; } catch (e) {}

  /* Old links such as /#services now open the real page. The return skips the rest of this file. */
  if (page === 'home') {
    var legacy = { services: '/services/', about: '/about/', projects: '/projects/', contact: '/contact/' };
    var hash = location.hash.replace(/^#/, '');
    if (legacy[hash]) { location.replace(legacy[hash]); return; }
  }

  /* Shows one language. Placeholders and option labels follow the same choice. */
  function setLang(l) {
    lang = l; root.setAttribute('data-lang', l); root.setAttribute('lang', l);
    document.getElementById('lang-bn').setAttribute('aria-pressed', l === 'bn');
    document.getElementById('lang-en').setAttribute('aria-pressed', l === 'en');
    document.querySelectorAll('[data-bn][data-en]').forEach(function (el) {
      el.setAttribute('placeholder', el.getAttribute('data-' + l));
    });
    var svcBn = document.getElementById('f-svc'), svcEn = document.getElementById('f-svc-en');
    if (svcBn && svcEn) { if (l === 'en') svcEn.value = svcBn.value; else svcBn.value = svcEn.value; }
    try { localStorage.setItem('bs-lang', l); } catch (e) {}
  }
  document.getElementById('lang-bn').addEventListener('click', function () { setLang('bn'); });
  document.getElementById('lang-en').addEventListener('click', function () { setLang('en'); });

  navLinks.forEach(function (a) { a.classList.toggle('on', a.dataset.nav === page); });
  menuBtn.addEventListener('click', function () {
    var open = nav.classList.toggle('open'); menuBtn.setAttribute('aria-expanded', open);
  });

  var toastEl = document.getElementById('toast'), toastT;
  function toast(msg) { toastEl.textContent = msg; toastEl.hidden = false; clearTimeout(toastT); toastT = setTimeout(function () { toastEl.hidden = true; }, 2200); }
  function copyText(text, srcEl) {
    var ok = function () { toast(lang === 'bn' ? 'কপি হয়েছে' : 'Copied'); };
    var fallback = function () {
      if (!srcEl) return; var r = document.createRange(); r.selectNodeContents(srcEl);
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      toast(lang === 'bn' ? 'লেখাটি সিলেক্ট করা হয়েছে, কপি করুন' : 'Text selected. Copy it now');
    };
    try { navigator.clipboard.writeText(text).then(ok, fallback); } catch (e) { fallback(); }
  }
  document.querySelectorAll('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () { copyText(b.dataset.copy, b.previousElementSibling); });
  });

  /* The enquiry form exists only on /contact/. Other pages skip this block. */
  var form = document.getElementById('enq');
  if (form) {
    function digits(s) { return s.replace(/[০-৯]/g, function (d) { return '০১২৩৪৫৬৭৮৯'.indexOf(d); }).replace(/\D/g, ''); }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = F('f-name').value.trim(), phone = digits(F('f-phone').value);
      if (phone.indexOf('880') === 0) phone = phone.slice(2);
      var okName = name.length > 1, okPhone = /^01[3-9]\d{8}$/.test(phone);
      document.getElementById('e-name').hidden = okName;
      document.getElementById('e-phone').hidden = okPhone;
      if (!okName) { F('f-name').focus(); return; }
      if (!okPhone) { F('f-phone').focus(); return; }
      var svcEl = lang === 'en' && document.getElementById('f-svc-en') ? document.getElementById('f-svc-en') : F('f-svc');
      var svcOpt = svcEl.options[svcEl.selectedIndex];
      var stage = STAGE[form.querySelector('input[name=stage]:checked').value];
      var bn = lang === 'bn';
      var lines = [
        bn ? 'আসসালামু আলাইকুম, Build Safe।' : 'Hello Build Safe,',
        bn ? 'ওয়েবসাইট থেকে একটি এনকোয়ারি:' : 'An enquiry from your website:',
        '',
        (bn ? 'নাম: ' : 'Name: ') + name,
        (bn ? 'মোবাইল: ' : 'Mobile: ') + phone,
        F('f-area').value.trim() ? (bn ? 'এলাকা: ' : 'Location: ') + F('f-area').value.trim() : null,
        (bn ? 'সেবা: ' : 'Service: ') + svcOpt.textContent,
        (bn ? 'প্রকল্পের অবস্থা: ' : 'Project stage: ') + stage[bn ? 0 : 1],
        F('f-msg').value.trim() ? (bn ? 'বিস্তারিত: ' : 'Details: ') + F('f-msg').value.trim() : null
      ].filter(function (x) { return x !== null; });
      var text = lines.join('\n');
      /* The message is shown as text and placed on a fixed WhatsApp link. Nothing is stored on a server. */
      var sent = document.getElementById('sent'), sentText = document.getElementById('sent-text');
      sentText.textContent = text;
      document.getElementById('wa-link').href = 'https://wa.me/8801814116677?text=' + encodeURIComponent(text);
      form.hidden = true; sent.hidden = false; sent.scrollIntoView({ block: 'start' });
    });
    document.getElementById('copy-msg').addEventListener('click', function () { copyText(document.getElementById('sent-text').textContent, document.getElementById('sent-text')); });
    document.getElementById('edit-msg').addEventListener('click', function () { document.getElementById('sent').hidden = true; form.hidden = false; });
  }

  /* Home photo frame. The settled picture stays, then both pictures ease together. */
  var slides = document.querySelector('.hero-slides');
  if (slides && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var frames = slides.querySelectorAll('img');
    var caps = slides.parentNode.querySelectorAll('.cap-line');
    var frame = 0;
    var wait = 0;
    var due = 0;
    var step = null;
    var held = false;
    var unseen = document.hidden;
    var pausedAt = 0;
    var fading = false;
    var layer = 1;
    function whenReady(el, ok, fail) {
      function success() {
        if (el.decode) el.decode().then(ok, ok);
        else ok();
      }
      if (el.complete && el.naturalWidth) { success(); return; }
      if (el.complete) { fail(); return; }
      el.addEventListener('load', success, { once: true });
      el.addEventListener('error', fail, { once: true });
    }
    function run() {
      clearTimeout(wait);
      if (held || unseen) { if (!pausedAt) pausedAt = performance.now(); return; }
      if (pausedAt) { due += performance.now() - pausedAt; pausedAt = 0; }
      if (!step || fading) return;
      wait = setTimeout(function () {
        var done = step;
        step = null;
        done();
      }, Math.max(0, due - performance.now()));
    }
    function after(ms, done) {
      step = done;
      due = performance.now() + ms;
      run();
    }
    function retire(prev, next) {
      if (prev === next) return;
      prev.classList.remove('is-on');
      prev.classList.remove('is-leaving');
      var line = caps[Array.prototype.indexOf.call(frames, prev)];
      if (line) { line.classList.remove('is-on'); line.classList.remove('is-leaving'); }
    }
    function begin(n) {
      var next = frames[n];
      var prev = frames[frame];
      var nextLine = caps[n];
      var prevLine = caps[frame];
      if (held || unseen) { after(0, function () { begin(n); }); return; }
      fading = true;
      layer += 1;
      next.style.zIndex = String(layer);
      next.classList.add('is-on');
      if (nextLine) nextLine.classList.add('is-on');
      if (prev === next) { fading = false; after(3000, function () { go((frame + 1) % frames.length, 0); }); return; }
      prev.classList.add('is-leaving');
      if (prevLine && prevLine !== nextLine) prevLine.classList.add('is-leaving');
      frame = n;
      var settled = false;
      function finish(e) {
        if (settled) return;
        if (e && e.target !== prev) return;
        if (e && e.propertyName && e.propertyName !== 'opacity') return;
        settled = true;
        prev.removeEventListener('transitionend', finish);
        retire(prev, next);
        fading = false;
        after(3000, function () { go((frame + 1) % frames.length, 0); });
      }
      prev.addEventListener('transitionend', finish);
      setTimeout(function () { finish({ target: prev, propertyName: 'opacity' }); }, 800);
    }
    function go(n, skipped) {
      var next = frames[n];
      whenReady(next, function () { begin(n); }, function () {
        if (skipped + 1 >= frames.length) return;
        go((n + 1) % frames.length, skipped + 1);
      });
    }
    slides.addEventListener('pointerenter', function () { held = true; run(); });
    slides.addEventListener('pointerleave', function () { held = false; run(); });
    document.addEventListener('visibilitychange', function () { unseen = document.hidden; run(); });
    frames[0].style.zIndex = '1';
    whenReady(frames[1 % frames.length], function () {}, function () {});
    after(3000, function () { go(1 % frames.length, 0); });
  }

  setLang(lang === 'en' ? 'en' : 'bn');
  if (form) {
    var svc = new URLSearchParams(location.search).get('service');
    if (svc && /^[0-8]$/.test(svc)) { F('f-svc').value = svc; var svcEn = document.getElementById('f-svc-en'); if (svcEn) svcEn.value = svc; }
  }
})();
