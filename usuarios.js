// Script para manejar registro e inicio de sesión usando localStorage

// Registro de usuario
const formRegistro = document.getElementById('form-registro');
if (formRegistro) {
  formRegistro.addEventListener('submit', function (e) {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    // Guardamos el usuario y contraseña en localStorage
    localStorage.setItem('usuario', usuario);
    localStorage.setItem('contrasena', contrasena);
    alert('✅ Usuario registrado correctamente');
    window.location.href = 'login.html';
  });
}

// Inicio de sesión
const formLogin = document.getElementById('form-login');
if (formLogin) {
  formLogin.addEventListener('submit', function (e) {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    // Comprobamos si coincide con los datos guardados
    const guardado = localStorage.getItem('usuario');
    const clave = localStorage.getItem('contrasena');

    if (usuario === guardado && contrasena === clave) {
      alert('✅ Sesión iniciada');
      window.location.href = 'index.html';
    } else {
      alert('❌ Usuario o contraseña incorrectos');
    }
  });
}
