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

