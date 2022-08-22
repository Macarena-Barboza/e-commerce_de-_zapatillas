const sectionBanner2 = document.getElementById('presentacion2')
const divProductosOcul = document.getElementById('divProductosOcul')

mostrarFavorito.addEventListener("click", ()=> {
    verFavorito()
        sectionBanner2.classList.add('active');
        divProductosOcul.classList.add('divProductoss', 'divProductosss');
}) 
