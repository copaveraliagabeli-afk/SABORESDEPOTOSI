// script-restaurantes.js
let slideActual = 0;
const slides = document.querySelectorAll('.slide-restaurante');
const indicadores = document.querySelectorAll('.indicador');
const totalSlides = slides.length;

function mostrarSlide(index) {
    // Ocultar todos los slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Remover activo de todos los indicadores
    indicadores.forEach(ind => {
        ind.classList.remove('active');
    });
    
    // Mostrar slide actual
    slides[index].classList.add('active');
    indicadores[index].classList.add('active');
    slideActual = index;
}

function cambiarSlide(direccion) {
    let nuevoSlide = slideActual + direccion;
    
    // Circular slides
    if (nuevoSlide < 0) {
        nuevoSlide = totalSlides - 1;
    } else if (nuevoSlide >= totalSlides) {
        nuevoSlide = 0;
    }
    
    mostrarSlide(nuevoSlide);
}

// Event listeners para indicadores
indicadores.forEach((indicador, index) => {
    indicador.addEventListener('click', () => {
        mostrarSlide(index);
    });
});

// Navegación con teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        cambiarSlide(-1);
    } else if (e.key === 'ArrowRight') {
        cambiarSlide(1);
    }
});

// Auto-slide cada 5 segundos
setInterval(() => {
    cambiarSlide(1);
}, 5000);

// Inicializar slider
mostrarSlide(0);