
    let zapatillas = []

     fetch ('../product/productos.json')
     .then(response => response.json()) 
     .then(data => {
        zapatillas = data
        mostrarProducto(zapatillas)
        return zapatillas
    })

    const divProductos = document.getElementById('productos')

    function mostrarProducto(zapatillas){
        divProductos.innerHTML = ""
        zapatillas.forEach((productoZapatilla) =>{
            const div = document.createElement('div')    
            div.innerHTML += `
            <div class="productos__cont productos__cont__dark" > 
                    <button id ="favorito${productoZapatilla.id}" class="productos__cont__favorito"><i  class="fa-solid fa-heart " ></i></button>
                   <img class="productos__cont__imagen" src="${productoZapatilla.imagen}">
                   <div class="productos__cont__text">
                       <h3 class="productos__titulo">${productoZapatilla.marca}</h3>
                       <p class="productos__descrip">${productoZapatilla.descripcion}</p>
                       <p class="productos__valor">$${productoZapatilla.precio}</p>
                       <button class="productos__btn boton" id = "agregar${productoZapatilla.id}">agregar carrito <i class="fa-solid fa-cart-shopping"></i></button>
                   </div>
            </div>`
            divProductos.appendChild(div)       
        
            const boton = document.getElementById(`agregar${productoZapatilla.id}`)
            boton.addEventListener('click', () => {
                agregarCarrito(productoZapatilla.id)
            })

            // _____________________ corazon favorito _______________________
            const corazon = document.getElementById(`favorito${productoZapatilla.id}`)

            corazon.addEventListener('click', () => {
                agregarfavorito(productoZapatilla.id)
                corazon.classList.toggle('active');
                
            })

        })
    }

// __________________ agregar carrito ______________________________ 

    const divCarrito = document.getElementById("divCarrito")
    const mostrarCarrito = document.getElementById("mostrarCarrito")
    const contadorCarrito = document.getElementById("contadorCarrito")
    const vaciarCarrito = document.getElementById("vaciarCarrito")

    let carrito = []

    // ______ Local Storage _______
    if(localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        mostrarCarritos()
    } else {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }

  function agregarCarrito(IdProducto){
        Toastify({
            text: "Agregado al carrito ",
            duration: 1500,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "linear-gradient(300deg, #7f5a83 10%, #ff5483 94%)",
              borderRadius:"20px",
            },
            offset: {
                y: 50,
            }
        }).showToast();
        const existeProdu = carrito.some (produ => produ.id === IdProducto)
        if(existeProdu){
            const produ = carrito.map (produ => {
                if(produ.id === IdProducto){
                    produ.cantidad++

                }
            })
        } else{ 
        const articulo = zapatillas.find((produ) => produ.id === IdProducto)
        carrito.push(articulo)
        
        }
        localStorage.setItem("carrito",JSON.stringify(carrito))
        mostrarCarritos();  
    }

    mostrarCarrito.addEventListener("click", mostrarCarritos)


 // _________________________ Modal _________________________

    function mostrarCarritos(){
        let carritoStorage = JSON.parse(localStorage.getItem('carrito'))

        if(carrito.length != 0) { 
            divCarrito.innerHTML =""
            carritoStorage.forEach((productoZapatilla, id) => {
                divCarrito.innerHTML +=`
                <div class="conte-carrito-div ">
                <div id="agregar${productoZapatilla.id}"class="conte-carrito row">
                    <img class="conte-carrito__img  conte-carrito_dark col-2" src="${productoZapatilla.imagen}" alt="Productos zapas">
                    <p class="conte-carrito__txt__titulo col-2
                    ">${productoZapatilla.marca} ${productoZapatilla.nombre}</p>
                    <p class="conte-carrito__precioUnid  col-2">$${productoZapatilla.precio}</p>
                    <p class="conte-carrito__txt  col-2"> <button onclick="agregarCarrito(${productoZapatilla.id})" class="btn btn-outline-info btn-sm btnInc">+</button> ${productoZapatilla.cantidad}  <button onclick="quitarCarrito(${productoZapatilla.id})" class="btn btn-outline-info btn-sm  btnDec">-</button></p>
                    <p class="conte-carrito__precio  col-2">$${(productoZapatilla.precio * productoZapatilla.cantidad)}</p>
                    <button onclick="eliminarProducto(${productoZapatilla.id})" class="conte-carrito__btn"> <i class="fa-solid fa-trash"></i> </button>
                </div>
            </div>`
            })
        } else {
            divCarrito.innerHTML = `<p class="modal-body__vacio"> No hay productos en el carrito</p>`
        }
        contadorCarrito.innerText = carrito.length
        total()
    }
    
// __________________ Boton Confirma Carrito  _____________ 
    document.getElementById("btnConfirmar").addEventListener('click',()=>{
        if (carrito.length>0){
            Swal.fire({
                html: '<h2>Elegi el medio de pago</h2>',
                imageUrl: '/images/pago.png',
                imageWidth: 122,
                imageHeight: 112,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: '<p class="confiBtn">Debito/Credito</p>',
                denyButtonText: `<p class="confiBtn">Mercado Pago</p>`,
                confirmButtonColor: "rgb(190, 106, 255)",
                denyButtonColor: "rgb(255, 101, 158)"
            }).then((result) => {   
                if (result.isConfirmed) {
                    swal.fire({
                        html: `<h2 >Pago realizado!</h2><p>Gracias por tu compra!</p><p>Enseguida enviamos tu producto!</p>
                        `,
                        icon: "success",
                        timer: "2900",
                        timerProgressBar: "true",
                        showConfirmButton: false,
                    });
                } else if (result.isDenied) {
                    swal.fire({
                        html: `<h2>Pago realizado!</h2> <p>Gracias por tu compra!</p><p>Enseguida enviamos tu producto!</p>`,
                        icon: "success",
                        timer: "2900",
                        timerProgressBar: "true",
                        showConfirmButton: false,
                    });
                }
            })
            mostrarCarritos();
        }
        localStorage.setItem('carrito', JSON.stringify(carrito))
        carrito.splice(0,carrito.length);

    });

// __________  Elimina Producto/s  ___________
    function eliminarProducto(id) {
        const articulo = carrito.find((produ) => produ.id === id)
        const indice = carrito.indexOf(articulo)
        carrito.splice(indice, 1)
        localStorage.setItem('carrito', JSON.stringify(carrito))
        mostrarCarritos();
    }
    vaciarCarrito.addEventListener('click', () => {
        carrito.length = 0
        localStorage.setItem('carrito', JSON.stringify(carrito))
        mostrarCarritos();
    })

    function quitarCarrito(IdProducto) {
        const articulo = carrito.find((produ) => produ.id === IdProducto)
        const indice = carrito.indexOf(articulo)
        if(articulo.cantidad > 1){
            carrito[indice].cantidad--;
        }else if(articulo.cantidad < 1){
            carrito.splice(indice, 1)
        }
        localStorage.setItem('carrito', JSON.stringify(carrito))
        mostrarCarritos();
    }

    
    function total(){
        contadorCarrito.innerText = carrito.length
        precioTotal.innerText = carrito.reduce((acc, produ) => acc + produ.precio * produ.cantidad, 0)
    }



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


// ________________________    FAVORITO    ___________________________________

let favorito = []
const mostrarFavorito = document.getElementById('mostrarFavorito')

mostrarFavorito.addEventListener("click", ()=> {
    verFavorito()
}) 


if(localStorage.getItem("favorito")) {
    favorito = JSON.parse(localStorage.getItem("favorito"))
} else {
    localStorage.setItem("favorito", JSON.stringify(favorito))
}


function agregarfavorito(ProductoId){
    // _____ Si existe ______
    const existeProdu = favorito.some (produ => produ.id === ProductoId)
    if(existeProdu){
        const produ = favorito.map (produ => {
            if(produ.id === ProductoId){
                produ.cantidad++
                Toastify({
                    text: "Ya lo tienes a Favorito",
                    duration: 1500,
                    style: {
                      background: "linear-gradient(19deg, #E333E 0%, #RR36F3 100%)",
                      borderRadius:"7px",
                      margin:"20px",     
                      fontWeight: "600",
                    },
                    position: "lefth",
                    gravity:"top",
                  }).showToast();
            }
        })
    } else{ 
    const articulo = zapatillas.find((produ) => produ.id === ProductoId)
    favorito.push(articulo)
    Toastify({
        text: "Agregado a Favorito",
        duration: 1500,
        style: {
          background: "linear-gradient(19deg, #E333E 0%, #RR36F3 100%)",
          borderRadius:"7px",
          margin:"20px",     
          fontWeight: "600",
        },
        position: "lefth",
        gravity:"top",
      }).showToast();
    }
    localStorage.setItem("favorito",JSON.stringify(favorito))
}

function eliminarFavorito(ProductoId) {
    const articulo = favorito.find((produ) => produ.id === ProductoId)
    const indice = favorito.indexOf(articulo)
    favorito.splice(indice, 1)
    localStorage.setItem('favorito', JSON.stringify(favorito))
    verFavorito();
}

 function verFavorito(){
    let favoritoStorage = JSON.parse(localStorage.getItem('favorito'))

    divProductos.innerHTML = ""
    if(favorito.length != 0) {
        favoritoStorage.forEach((productoZapatilla, id) => {
            divProductos.innerHTML +=`
            <div class="productos__cont productos__cont__dark" > 
                 <a onclick="eliminarFavorito(${productoZapatilla.id})" class="conte__favorito"><i class="fa-solid fa-heart productos__cont__favorito" ></i></a>
                <img class="productos__cont__imagen" src="${productoZapatilla.imagen}">
                <div class="productos__cont__text">
                    <h3 class="productos__titulo">${productoZapatilla.marca}</h3>
                    <p class="productos__descrip">${productoZapatilla.descripcion}</p>
                    <p class="productos__valor">$${productoZapatilla.precio}</p>
                    <button class="productos__btn boton" onclick="agregarCarrito(${productoZapatilla.id})">agregar carrito <i class="fa-solid fa-cart-shopping"></i></button>
                </div>
            </div>`
        })
    } else {
        divProductos.innerHTML = `<p class="modal-body__vacio">No hay productos en el favorito</p>`
    }

}
