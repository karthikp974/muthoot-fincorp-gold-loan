document.addEventListener('DOMContentLoaded', () => {

  if (sessionStorage.getItem('mfLoggedIn') === 'true') {
    window.location.replace('dashboard.html');
    return;
  }

  const form = document.getElementById('loginForm');
  const errorBox = document.getElementById('loginError');

  const VALID_NAME = 'pavan karthik nukala';
  const VALID_PASSWORD = 'karhope';

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('username').value.trim().toLowerCase();
    const password = document.getElementById('password').value;

    if (name === VALID_NAME && password === VALID_PASSWORD) {
      sessionStorage.setItem('mfLoggedIn', 'true');
      sessionStorage.setItem('mfUser', 'PAVAN KARTHIK NUKALA');
      window.location.href = 'dashboard.html';
      return;
    }

    errorBox.textContent = 'Invalid name or password. Please try again.';
    errorBox.classList.add('show');
  });

});
