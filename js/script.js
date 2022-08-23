  // __________	DARKMODE  ___________

let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');
const zapaToggle = document.querySelector('.darkmode__img');

function habilitarDarkMode() {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'habilitar');
}

function desabilitarDarkMode() {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', null);
}
 
if (darkMode === 'habilitar') {
    habilitarDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); 

    zapaToggle.classList.toggle('active')
    if (darkMode !== 'habilitar') {
    habilitarDarkMode();
    } else {  
       desabilitarDarkMode(); 
    }
});


//   __________________ menu responsive  __________________________  

const menu = document.getElementById('menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener("click",() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

