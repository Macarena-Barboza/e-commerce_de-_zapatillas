const sectionBanner = document.getElementById('presentacion')
const sectionBanner2 = document.getElementById('presentacion2')
const carrusel = document.getElementById('carrusel')
const divProductosOcul = document.getElementById('divProductosOcul')

mostrarFavorito.addEventListener("click", ()=> {
    verFavorito()
        sectionBanner.classList.add('active');
        sectionBanner2.classList.add('active');
        carrusel.classList.add('active');
        divProductosOcul.classList.add('divProductoss', 'divProductosss');
}) 
