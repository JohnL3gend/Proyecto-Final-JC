
window.onload = function() {
    const usuario = JSON.parse(localStorage.getItem('usuarioLogueado'));

    if (usuario) {
        // Si el usuario está logueado, esconder los botones de login y mostrar el nombre del usuario
        document.getElementById('auth-buttons').style.display = 'none';
        document.getElementById('user-info').style.display = 'block';
        document.getElementById('user-name').textContent = `Bienvenido, ${usuario.nombre}`;
    }
};

function logout() {
    
    localStorage.removeItem('usuarioLogueado');
    window.location.href = 'index.html';
}