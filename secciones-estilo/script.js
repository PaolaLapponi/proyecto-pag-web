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

//carrousel vertical//

function setupCarousel(carouselId, slideHeight, slideCount, interval) {
    const slides = document.getElementById(carouselId);
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        slides.style.transform = `translateY(-${currentIndex * slideHeight}px)`;
    }, interval);
}

// // Configurar carruseles
// setupCarousel('carousel1', 1400, 3, 3000); // Carrusel 1