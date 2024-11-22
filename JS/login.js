const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value.trim();
    const contraseña = document.querySelector('#contraseña').value.trim();

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const validarUsuario = usuarios.find(usuario => usuario.email === email && usuario.contraseña === contraseña);

    if (!validarUsuario) {
        return alert('Usuario y/o contraseña incorrectos');
    }

    alert(`Bienvenido ${validarUsuario.nombre}`);

    localStorage.setItem('usuarioLogueado', JSON.stringify(validarUsuario));
    window.location.href = 'index.html';
});