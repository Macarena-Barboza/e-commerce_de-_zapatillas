const filtLateral = document.getElementById('filtLateral')
const favoritProdu = document.getElementById('favoritProdu')

mostrarFavorito.addEventListener("click", ()=> {
    verFavorito()
    favoritProdu.classList.add('active');
    filtLateral.classList.add('active');
}) 
