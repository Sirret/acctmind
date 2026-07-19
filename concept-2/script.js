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

  // Video testimonial carousels
  document.querySelectorAll('.testi-carousel').forEach(function (carousel) {
    var track = carousel.querySelector('.testi-track');
    var prev = carousel.querySelector('.testi-nav.prev');
    var next = carousel.querySelector('.testi-nav.next');
    if (!track) return;

    function update() {
      var maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= 2) {
        carousel.classList.add('no-overflow');
        return;
      }
      carousel.classList.remove('no-overflow');
      carousel.classList.toggle('at-start', track.scrollLeft <= 2);
      carousel.classList.toggle('at-end', track.scrollLeft >= maxScroll - 2);
    }

    function scrollByCards(direction) {
      var card = track.querySelector('.testi-video');
      var step = card ? card.getBoundingClientRect().width + 16 : track.clientWidth * 0.8;
      track.scrollBy({ left: direction * step * 2, behavior: 'smooth' });
    }

    if (prev) prev.addEventListener('click', function () { scrollByCards(-1); });
    if (next) next.addEventListener('click', function () { scrollByCards(1); });
    track.addEventListener('scroll', update);
    window.addEventListener('resize', update);
    update();
  });
});
