// Funciones para los modales
function mostrarLogin() {
    document.getElementById('modalLogin').style.display = 'block';
}

function mostrarSignup() {
    document.getElementById('modalSignup').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('modalLogin').style.display = 'none';
    document.getElementById('modalSignup').style.display = 'none';
}

// Cerrar modal al hacer click fuera
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}

// Validación de formulario de registro
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.querySelector('#modalSignup form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const password = this.querySelector('input[type="password"]').value;
            const confirmPassword = this.querySelector('input[type="password"]:last-child').value;
            
            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden');
                return;
            }
            
            alert('Registro exitoso!');
            cerrarModal();
        });
    }
});