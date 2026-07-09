document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav-primary');
  var backdrop = document.querySelector('.nav-backdrop');
  var header = document.querySelector('.site-header');

  function setHeaderHeight() {
    if (header) {
      document.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px');
    }
  }
  setHeaderHeight();
  window.addEventListener('resize', setHeaderHeight);

  function closeNav() {
    if (!nav) return;
    nav.classList.remove('is-open');
    if (backdrop) backdrop.classList.remove('is-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function openNav() {
    if (!nav) return;
    nav.classList.add('is-open');
    if (backdrop) backdrop.classList.add('is-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      if (expanded) { closeNav(); } else { openNav(); }
    });
  }
  if (backdrop) backdrop.addEventListener('click', closeNav);

  document.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', closeNav);
  });

  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });

  // Contact form: subject dropdown pre-fill via query param (?enquiry=)
  var params = new URLSearchParams(window.location.search);
  var enquiry = params.get('enquiry');
  var select = document.getElementById('enquiry-type');
  if (enquiry && select) {
    Array.from(select.options).forEach(function (opt) {
      if (opt.value === enquiry) select.value = enquiry;
    });
  }

  // Prevent demo form submissions from navigating away
  document.querySelectorAll('form[data-demo-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      if (btn) {
        var original = btn.textContent;
        btn.textContent = 'Message sent';
        setTimeout(function () { btn.textContent = original; }, 2500);
      }
    });
  });
});
