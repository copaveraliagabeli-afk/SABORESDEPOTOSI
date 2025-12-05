// script-restaurantes.js

let slideActual = 0;
const slides = document.querySelectorAll('.slide-restaurante');
const indicadores = document.querySelectorAll('.indicador');
const totalSlides = slides.length;

function mostrarSlide(n) {
    // Asegurarse de que el índice esté dentro de los límites
    if (n >= totalSlides) {
        slideActual = 0;
    } else if (n < 0) {
        slideActual = totalSlides - 1;
    } else {
        slideActual = n;
    }
    
    // Ocultar todos los slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Mostrar el slide actual
    slides[slideActual].classList.add('active');
    
    // Actualizar indicadores
    indicadores.forEach((indicador, index) => {
        if (index === slideActual) {
            indicador.classList.add('active');
        } else {
            indicador.classList.remove('active');
        }
    });
}

function cambiarSlide(direccion) {
    mostrarSlide(slideActual + direccion);
}

function irASlide(n) {
    mostrarSlide(n);
}

// Inicializar el slider
mostrarSlide(0);

// Configurar eventos para los indicadores
indicadores.forEach((indicador, index) => {
    indicador.addEventListener('click', () => {
        irASlide(index);
    });
});

// Cambio automático cada 5 segundos
setInterval(() => {
    cambiarSlide(1);
}, 5000);

// Funciones para los modales (mantener las existentes)
function mostrarLogin() {
    document.getElementById('modalLogin').style.display = 'block';
    document.getElementById('modalSignup').style.display = 'none';
}

function mostrarSignup() {
    document.getElementById('modalSignup').style.display = 'block';
    document.getElementById('modalLogin').style.display = 'none';
}

function cerrarModal() {
    document.getElementById('modalLogin').style.display = 'none';
    document.getElementById('modalSignup').style.display = 'none';
}

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
    const modalLogin = document.getElementById('modalLogin');
    const modalSignup = document.getElementById('modalSignup');
    
    if (event.target === modalLogin) {
        modalLogin.style.display = 'none';
    }
    if (event.target === modalSignup) {
        modalSignup.style.display = 'none';
    }
}