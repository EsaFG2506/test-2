import '../styles/style-log.css';
import '../styles/style-reg.css';

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      localStorage.setItem('isAuthenticated', 'true');
      window.location.href = '/index.html';
    });
  }

  const registrasiForm = document.getElementById('registrasiForm');
  if (registrasiForm) {
    registrasiForm.addEventListener('submit', (event) => {
      event.preventDefault();
      localStorage.setItem('isAuthenticated', 'true');
      window.location.href = '/login.html';
    });
  }
});
