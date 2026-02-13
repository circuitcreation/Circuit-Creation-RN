// navbar.js — toggles scrolled state and ensures body padding for floating navbar
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.container.floating-navbar');
  if (!nav) return;
  document.body.classList.add('has-floating-navbar');

  function onScroll() {
    if (window.scrollY > 8) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
});
