// script-detalle-restaurante.js

// Base de datos de restaurantes
const restaurantesData = {
    1: {
        nombre: "Doña Mecha",
        slogan: "La cocina potosina más pura y auténtica",
        imagen: "img/domecha.jpg",
        estrellas: "★★★★★",
        puntuacion: "4.9 (320 reseñas)",
        ubicacion: "C. Bustillos 1080, Villa Imperial de Potosí",
        horario: "Lunes a Sábado: 8:00 a.m. - 2:50 p.m. / 5:00 p.m. - 10:00 p.m.<br>Domingo: Cerrado",
        contacto: "Teléfono: 65488968",
        historia: "El Restaurante 'Doña Mecha' no necesita de arquitectura colonial para ser una leyenda en Potosí. Es conocido y venerado por los locales y viajeros como el punto de referencia para degustar la cocina potosina más pura y auténtica.",
        platos: [
            {
                nombre: "Kalapurka",
                precio: "25 BS",
                imagen: "img/kalapurka.jpg",
                descripcion: "Harina de maíz, aji colorado, verduras, papa, carne de res, tocino, perejil, acompañado de maíz pelado"
            },
            {
                nombre: "Chacchu",
                precio: "60 BS",
                imagen: "img/chacchu.jpg",
                descripcion: "Filete de cerdo, papa, chuño aji rojo picante, cebolla picada y caldo"
            },
            {
                nombre: "Fricase",
                precio: "60 BS",
                imagen: "img/fricase.jpg",
                descripcion: "Carne de cerdo en caldo de aji picante, maíz pelado, chuño"
            },
            {
                nombre: "Chicharrón",
                precio: "65 BS",
                imagen: "img/chicharrond.jpg",
                descripcion: "Carne de cerdo frita, papa frita, maíz pelado, plátano frito"
            }
        ]
    },
    2: {
        nombre: "Phisqa Warmi",
        slogan: "Sabor ancestral en cada plato",
        imagen: "img/phisqa.jpg",
        estrellas: "★★★★★",
        puntuacion: "4.9 (203 reseñas)",
        ubicacion: "Sucre 55, Villa Imperial de Potosí",
        horario: "Lunes a Sábado: 8:00 a.m. - 11:00 p.m.<br>Domingo: 8:00 a.m. - 4:00 p.m.",
        contacto: "Teléfono: 72431628",
        historia: "Fundado en 1995, Phisqa Warmi es un legado familiar que preserva las recetas ancestrales potosinas. Su nombre significa 'Cinco Mujeres' en quechua, honrando a las mujeres que han mantenido viva la tradición culinaria a través de las generaciones.",
        platos: [
            {
                nombre: "Charkekan",
                precio: "50 BS",
                imagen: "img/charkekan.jpg",
                descripcion: "Carne de llama deshidratada, queso, huevo, mote de maíz, papa al horno"
            },
            {
                nombre: "Sopa Ligera de Pollo",
                precio: "25 BS",
                imagen: "img/sopa-ligera-de-pollo.jpg",
                descripcion: "Caldo de pollo con verduras"
            },
            {
                nombre: "Pollo a la Plancha",
                precio: "50 BS",
                imagen: "img/poolo-a-la-plancha.jpg",
                descripcion: "Arroz, papa frita, verdura cocida"
            },
            {
                nombre: "Medallones de Champiñón",
                precio: "50 BS",
                imagen: "img/medallones-champiñon.jpg",
                descripcion: "Arroz, papa frita, verdura cocida"
            }
        ]
    },
    3: {
        nombre: "Trufa Negra",
        slogan: "Experiencia gastronómica contemporánea",
        imagen: "img/trufanegra.jpg",
        estrellas: "★★★★☆",
        puntuacion: "4.7 (215 reseñas)",
        ubicacion: "Sucre, Villa Imperial de Potosí",
        horario: "Lunes a Sábado: 7:30 a.m. - 11:00 p.m.<br>Domingo: Cerrado",
        contacto: "Teléfono: 72448803",
        historia: "Trufa Negra ofrece una experiencia gastronómica contemporánea con toques de innovación. Es el lugar perfecto para quienes buscan sabores modernos en el corazón de Potosí.",
        platos: [
            {
                nombre: "Tempura de Camarón",
                precio: "60 BS",
                imagen: "img/tempura_de_camaron.jpg",
                descripcion: "Camarones rebozados en tempura crujiente"
            },
            {
                nombre: "Tallarín de Mariscos",
                precio: "70 BS",
                imagen: "img/tallarin_de_mariscos.jpg",
                descripcion: "Pasta con una selección de mariscos frescos"
            },
            {
                nombre: "Pique Macho",
                precio: "80 BS",
                imagen: "img/pique_macho.jpg",
                descripcion: "Plato tradicional boliviano con carne, salchichas y verduras"
            }
        ]
    },
    4: {
        nombre: "Tambo Señorial",
        slogan: "Vistas espectaculares y platos tradicionales",
        imagen: "img/tambose.jpg",
        estrellas: "★★★★★",
        puntuacion: "4.8 (189 reseñas)",
        ubicacion: "Plaza, Villa Imperial de Potosí",
        horario: "Lunes a Domingo: 6:30 p.m. - 10:00 p.m.",
        contacto: "Teléfono: 61637797",
        historia: "Ubicado estratégicamente en la plaza principal, Tambo Señorial ofrece no solo una gastronomía excepcional sino también una vista espectacular del centro histórico de Potosí. Es el lugar ideal para disfrutar de la cocina tradicional con un ambiente señorial.",
        platos: [
            {
                nombre: "Kalapurka",
                precio: "40 BS",
                imagen: "img/kalapurka.jpg",
                descripcion: "Sopa de carne, maíz molido, cebolla, zanahoria, arveja, haba, especias, aji rojo, orégano, perejil, carne de res, chchacoma"
            },
            {
                nombre: "Kalapurka Vegetariana",
                precio: "40 BS",
                imagen: "img/kalapurka_vegetariana.jpg",
                descripcion: "Sopa de verduras, maíz molido, cebolla, zanahoria, arveja, haba, especias, aji rojo, orégano, perejil, chachacoma"
            },
            {
                nombre: "Pollo a la Leña (¼)",
                precio: "44 BS",
                imagen: "img/pollo_leña.jpg",
                descripcion: "Pollo cocido a leña, arroz, papas fritas, aderezos, mayonesa, ketchup"
            },
            {
                nombre: "Tacos al Pastor",
                precio: "42 BS",
                imagen: "img/tacos_pastor.jpg",
                descripcion: "Dos tortillas, carne de res filete picado, pico de gallo, cebolla, tomate, aderezos, mayonesa, ketchup, llajua"
            }
        ]
    },
    5: {
        nombre: "La 4060",
        slogan: "Cocina potosina auténtica desde 1985",
        imagen: "img/res4060.jpg",
        estrellas: "★★★★★",
        puntuacion: "4.8 (125 reseñas)",
        ubicacion: "Calle Hoyos, Plaza, Villa Imperial de Potosí",
        horario: "Lunes a Sábado: 8:30 a.m. - 11:30 p.m.<br>Domingo: Cerrado",
        contacto: "Teléfono: 76160082",
        historia: "Con más de 35 años de tradición, La 4060 ha sido testigo de la evolución gastronómica de Potosí mientras mantiene vivas las recetas ancestrales que han pasado de generación en generación. Fundado en 1985, es un ícono de la cocina potosina.",
        platos: [
            {
                nombre: "Lomo Salteado",
                precio: "120 BS",
                imagen: "img/lomo-salteado.jpg",
                descripcion: "Lomo de res picado salteado con vegetales, estilo peruano"
            },
            {
                nombre: "Medallones 4060",
                precio: "150 BS",
                imagen: "img/medallones.jpg",
                descripcion: "Medallones de res con salsa de camarones"
            },
            {
                nombre: "Fondue (2 personas)",
                precio: "290 BS",
                imagen: "img/fondue1.jpg",
                descripcion: "500gr de filete picado acompañado de 5 salsas y 2 guarniciones a elección"
            },
            {
                nombre: "Milanesa Napolitana",
                precio: "120 BS",
                imagen: "img/milanesa-napolitana.jpg",
                descripcion: "Con jamón, queso y tomate"
            }
        ]
    }
};

// Función para cargar los datos del restaurante
function cargarRestaurante() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    if (!id || !restaurantesData[id]) {
        // Redirigir a la página de restaurantes si no hay ID válido
        window.location.href = 'restaurantes.html';
        return;
    }
    
    const restaurante = restaurantesData[id];
    
    // Actualizar la información del restaurante
    document.getElementById('restaurante-nombre').textContent = restaurante.nombre;
    document.getElementById('restaurante-slogan').textContent = restaurante.slogan;
    document.getElementById('restaurante-imagen').src = restaurante.imagen;
    document.getElementById('restaurante-imagen').alt = restaurante.nombre;
    document.getElementById('restaurante-estrellas').textContent = restaurante.estrellas;
    document.getElementById('restaurante-puntuacion').textContent = restaurante.puntuacion;
    document.getElementById('restaurante-ubicacion').textContent = restaurante.ubicacion;
    document.getElementById('restaurante-horario').innerHTML = restaurante.horario;
    document.getElementById('restaurante-contacto').innerHTML = restaurante.contacto;
    document.getElementById('restaurante-historia').textContent = restaurante.historia;
    
    // En la función cargarRestaurante, modifica la parte de platos:
// Cargar los platos (máximo 4)
const platosGrid = document.getElementById('platos-grid');
platosGrid.innerHTML = '';

// Tomar solo los primeros 4 platos si hay más
const platosMostrar = restaurante.platos.slice(0, 4);

platosMostrar.forEach(plato => {
    const platoCard = document.createElement('div');
    platoCard.className = 'plato-card';
    platoCard.innerHTML = `
        <img src="${plato.imagen}" alt="${plato.nombre}">
        <h4>${plato.nombre}</h4>
        <p class="precio">${plato.precio}</p>
        <p>${plato.descripcion}</p>
    `;
    platosGrid.appendChild(platoCard);
});
}

// Ejecutar cuando se cargue la página
document.addEventListener('DOMContentLoaded', cargarRestaurante);