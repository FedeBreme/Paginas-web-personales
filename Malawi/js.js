function login(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username === 'camila' && password === '13') {
      window.location.href = 'NoEntrar.html?usuario=' + encodeURIComponent(username);
    } else {
      document.getElementById('error-message').textContent = 'נכשל, נסה שוב';
    }
  }


  document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const usuario = urlParams.get('usuario');
  
    if (usuario) {
      const bienvenidaElement = document.getElementById('bienvenida');
      bienvenidaElement.textContent = `Bienvenido/a ${usuario}`;
    }
  });