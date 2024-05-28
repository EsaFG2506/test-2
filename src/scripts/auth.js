document.addEventListener('DOMContentLoaded', () => {
  const isAuthenticated = !!localStorage.getItem('isAuthenticated');

  if (!isAuthenticated && window.location.pathname !== '/login.html') {
    window.location.href = '/login.html';
  }

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      localStorage.setItem('isAuthenticated', 'true');
      window.location.href = '/index.html';
    });
  }
});
