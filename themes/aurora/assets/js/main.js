/* Mobile nav toggle — progressive enhancement; the site works without it */
(function () {
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('nav-menu');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
})();

/* CV page: print / save as PDF */
(function () {
  var btn = document.getElementById('print-cv');
  if (btn) btn.addEventListener('click', function () { window.print(); });
})();

/* Contact form: compose a mailto message. Owner can swap in a real backend. */
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  var note = document.getElementById('form-note');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var subject = encodeURIComponent(form.subject.value + ' — via naumanazeem.work');
    var body = encodeURIComponent(
      'Name: ' + form.name.value + '\n' +
      'Email: ' + form.email.value + '\n\n' +
      form.body.value
    );
    var endpoint = 'mailto:' + form.action.replace(/^mailto:/, '') + '?subject=' + subject + '&body=' + body;
    window.location.href = endpoint;
    if (note) note.textContent = 'Opening your mail client…';
  });
})();
