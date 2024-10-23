// Función para mostrar/ocultar la barra de búsqueda
function toggleSearch() {
    var searchBar = document.querySelector('.search-bar');
    if (searchBar.style.display === 'block') {
        searchBar.style.display = 'none';
    } else {
        searchBar.style.display = 'block';
    }
}

// Función para realizar la búsqueda (puedes personalizarla)
function search() {
    var query = document.getElementById('search-input').value;
    alert('Buscando: ' + query);
}

// Carrusel de imágenes
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Carrusel automático
setInterval(showNextImage, 5000);
