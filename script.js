document.addEventListener('DOMContentLoaded', () => {

  // Mobile menu
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.querySelector('.main-nav');

  if (hamburger && mainNav) {
    hamburger.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
  }

  // Loan tabs (Active / Closed)
  document.querySelectorAll('.loan-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.panel;

      document.querySelectorAll('.loan-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.loans-panel').forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (mainNav) mainNav.classList.remove('open');
      }
    });
  });

});
