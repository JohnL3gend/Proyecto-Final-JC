const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value.trim();
    const apellido = document.querySelector('#apellido').value.trim();
    const email = document.querySelector('#email').value.trim();
    const contraseña = document.querySelector('#contraseña').value.trim();
    const genero = document.querySelector('#genero').value.trim();

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioRegistrado = usuarios.find(usuario => usuario.email === email);

    if (usuarioRegistrado) {
        return alert('El usuario ya está registrado');
    }

    usuarios.push({ nombre, apellido, email, contraseña, genero });
    alert('Usuario registrado correctamente');

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    window.location.href = 'login.html';
});