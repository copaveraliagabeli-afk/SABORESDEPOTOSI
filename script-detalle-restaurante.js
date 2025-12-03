// script-detalle-restaurante.js - Versión actualizada

// Base de datos de restaurantes extendida
const restaurantes = {
    1: {
        id: 1,
        nombre: "Phisqa Warmi",
        slogan: "Sabor ancestral en cada plato",
        imagen: "img/phisqa.jpg",
        ubicacion: "Sucre 55, Villa Imperial de Potosí",
        horario: "Lunes a Sábado: 8:00 AM - 11:00 PM Domingo: 8:00 AM - 04:00 PM",
        contacto: "+591 72431628",
        estrellas: "★★★★★",
        puntuacion: "4.8 (125 reseñas)",
        historia: "Fundado en 1995 por la familia Mendoza, Phisqa Warmi nació con la misión de preservar las recetas ancestrales de la región potosina. Nuestro restaurante se ha convertido en un referente de la gastronomía local, combinando técnicas tradicionales con ingredientes frescos de productores locales. Cada plato cuenta una historia que se remonta a las tradiciones de nuestros antepasados.",
        platos: [
            { nombre: "Kala Purka Tradicional", imagen: "img/kalapurka.jpg", precio: "Bs. 25" },
            { nombre: "Chicharrón Potosino", imagen: "img/chicharron.jpg", precio: "Bs. 35" },
            { nombre: "Sajta de Pollo", imagen: "img/sajta.jpg", precio: "Bs. 30" }
        ]
    },
    2: {
        id: 2,
        nombre: "La 4060",
        slogan: "Cocina potosina auténtica desde 1985",
        imagen: "img/res4060.jpg",
        ubicacion: "Av. Villazón #456, Centro, Potosí",
        horario: "Martes a Domingo: 9:00 AM - 9:00 PM",
        contacto: "+591 23456789",
        estrellas: "★★★★☆",
        puntuacion: "4.6 (89 reseñas)",
        historia: "Con más de 35 años de experiencia, La 4060 ha sido testigo de la evolución gastronómica de Potosí mientras mantiene vivas las recetas que han pasado de generación en generación. Nuestro fundador, Don Carlos Rodríguez, comenzó este proyecto con la visión de crear un espacio donde los sabores auténticos nunca se perdieran.",
        platos: [
            { nombre: "Fritanga Potosina", imagen: "img/fritanga.jpg", precio: "Bs. 28" },
            { nombre: "Picana Familiar", imagen: "img/picana.jpg", precio: "Bs. 45" },
            { nombre: "Chairo Paceño", imagen: "img/chairopace.jpg", precio: "Bs. 22" }
        ]
    },
    3: {
        id: 3,
        nombre: "El Tenedor de Plata",
        slogan: "Donde el cerro Rico se convierte en sabor",
        imagen: "img/tenedordeplata.jpg",
        ubicacion: "Calle Bolívar #789, Plaza 10 de Noviembre, Potosí",
        horario: "Lunes a Sábado: 7:00 AM - 11:00 PM",
        contacto: "+591 34567890",
        estrellas: "★★★★★",
        puntuacion: "4.9 (203 reseñas)",
        historia: "Inaugurado en el 2010, El Tenedor de Plata rinde homenaje a la riqueza cultural e histórica del Cerro Rico de Potosí. Nuestra chef, Ana Martínez, fusiona la tradición con la innovación, creando experiencias culinarias únicas que reflejan la grandeza de nuestra tierra. Cada visita es un viaje sensorial a través de la historia potosina.",
        platos: [
            { nombre: "Kala Purka Especial", imagen: "img/kalapurka.jpg", precio: "Bs. 32" },
            { nombre: "Chicharrón Premium", imagen: "img/chicharron.jpg", precio: "Bs. 40" },
            { nombre: "Fritanga de la Casa", imagen: "img/fritanga.jpg", precio: "Bs. 35" }
        ]
    },
    4: {
        id: 4,
        nombre: "Doña Mecha",
        slogan: "Innovación y tradición en cada plato",
        imagen: "img/domecha.jpg",
        ubicacion: "Av. Arce #101, Zona Norte, Potosí",
        horario: "Lunes a Domingo: 11:00 AM - 11:00 PM",
        contacto: "+591 45678901",
        estrellas: "★★★★☆",
        puntuacion: "4.5 (156 reseñas)",
        historia: "Doña Mecha combina lo mejor de la cocina internacional con los sabores tradicionales potosinos. Fundado en 2015, nuestro restaurante se ha destacado por su ambiente moderno y propuestas culinarias innovadoras que respetan las raíces locales.",
        platos: [
            { nombre: "Parrillada Factory", imagen: "img/parrillada.jpg", precio: "Bs. 85" },
            { nombre: "Risotto Andino", imagen: "img/risotto.jpg", precio: "Bs. 45" },
            { nombre: "Tiradito Potosino", imagen: "img/tiradito.jpg", precio: "Bs. 38" }
        ]
    },
    5: {
        id: 5,
        nombre: "Restaurante Tambo Señorial",
        slogan: "Elegancia y tradición en cada bocado",
        imagen: "img/restambose.jpeg",
        ubicacion: "Calle Sucre #234, Centro Histórico, Potosí",
        horario: "Martes a Domingo: 12:00 PM - 10:00 PM",
        contacto: "+591 56789012",
        estrellas: "★★★★★",
        puntuacion: "4.7 (98 reseñas)",
        historia: "Ubicado en una casona colonial restaurada, Tambo Señorial ofrece una experiencia gastronómica única donde la historia y la cocina se entrelazan. Desde 2008, hemos sido el lugar preferido para quienes buscan sabores auténticos en un ambiente señorial.",
        platos: [
            { nombre: "Cordero al Horno", imagen: "img/cordero.jpg", precio: "Bs. 65" },
            { nombre: "Quinoa Real", imagen: "img/quinoa.jpg", precio: "Bs. 32" },
            { nombre: "Trucha del Lago", imagen: "img/trucha.jpg", precio: "Bs. 42" }
        ]
    }
};

// Cargar datos del restaurante (función existente - mantener igual)
function cargarRestaurante() {
    const urlParams = new URLSearchParams(window.location.search);
    const restauranteId = parseInt(urlParams.get('id'));
    
    const restaurante = restaurantes[restauranteId];
    
    if (restaurante) {
        // Actualizar la página con los datos del restaurante
        document.getElementById('restaurante-imagen').src = restaurante.imagen;
        document.getElementById('restaurante-imagen').alt = restaurante.nombre;
        document.getElementById('restaurante-nombre').textContent = restaurante.nombre;
        document.getElementById('restaurante-slogan').textContent = restaurante.slogan;
        document.getElementById('restaurante-ubicacion').textContent = restaurante.ubicacion;
        document.getElementById('restaurante-horario').textContent = restaurante.horario;
        document.getElementById('restaurante-contacto').textContent = restaurante.contacto;
        document.getElementById('restaurante-estrellas').textContent = restaurante.estrellas;
        document.getElementById('restaurante-puntuacion').textContent = restaurante.puntuacion;
        document.getElementById('restaurante-historia').textContent = restaurante.historia;
        
        // Cargar platos
        const platosGrid = document.getElementById('platos-grid');
        platosGrid.innerHTML = '';
        
        restaurante.platos.forEach(plato => {
            const platoHTML = `
                <div class="plato-card">
                    <img src="${plato.imagen}" alt="${plato.nombre}">
                    <h4>${plato.nombre}</h4>
                    <p class="precio">${plato.precio}</p>
                </div>
            `;
            platosGrid.innerHTML += platoHTML;
        });
        
        // Actualizar título de la página
        document.title = `${restaurante.nombre} - Sabores de Potosí`;
    } else {
        // Redirigir si no se encuentra el restaurante
        window.location.href = 'restaurantes.html';
    }
}

function realizarReserva() {
    alert('¡Sistema de reservas próximamente! Serás redirigido a nuestro sistema de reservas online.');
    // Aquí iría la lógica para el sistema de reservas
}

// Cargar los datos cuando la página esté lista
document.addEventListener('DOMContentLoaded', cargarRestaurante);

// Función para inicializar el slider de platos
function inicializarSliderPlatos() {
    const sliderWrapper = document.querySelector('.platos-slider-wrapper');
    const slides = document.querySelectorAll('.plato-slide');
    const prevBtn = document.querySelector('.platos-slider-btn.prev');
    const nextBtn = document.querySelector('.platos-slider-btn.next');
    const indicadores = document.querySelectorAll('.plato-indicador');
    
    if (!sliderWrapper || !slides.length) return;
    
    let slideIndex = 0;
    const slidesToShow = 4;
    const slideWidth = slides[0].offsetWidth + 25; // width + gap
    
    function updateSlider() {
        const translateX = -slideIndex * slideWidth;
        sliderWrapper.style.transform = `translateX(${translateX}px)`;
        
        // Actualizar indicadores
        indicadores.forEach((ind, index) => {
            ind.classList.toggle('active', index === Math.floor(slideIndex / slidesToShow));
        });
        
        // Ocultar/mostrar botones según la posición
        prevBtn.style.display = slideIndex === 0 ? 'none' : 'flex';
        nextBtn.style.display = slideIndex >= slides.length - slidesToShow ? 'none' : 'flex';
    }
    
    function nextSlide() {
        if (slideIndex < slides.length - slidesToShow) {
            slideIndex++;
            updateSlider();
        }
    }
    
    function prevSlide() {
        if (slideIndex > 0) {
            slideIndex--;
            updateSlider();
        }
    }
    
    // Event listeners
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    // Event listeners para indicadores
    indicadores.forEach((indicador, index) => {
        indicador.addEventListener('click', () => {
            slideIndex = index * slidesToShow;
            updateSlider();
        });
    });
    
    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
    
    // Auto-slide cada 5 segundos
    setInterval(() => {
        if (slideIndex < slides.length - slidesToShow) {
            nextSlide();
        } else {
            slideIndex = 0;
            updateSlider();
        }
    }, 5000);
    
    // Inicializar
    updateSlider();
    
    // Ajustar en resize
    window.addEventListener('resize', updateSlider);
}

// Llamar la función cuando se cargue la página
document.addEventListener('DOMContentLoaded', function() {
    cargarRestaurante();
    inicializarSliderPlatos();
});