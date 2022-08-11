
     fetch ('./product/productos.json')
     .then(response => response.json()) 
     .then(data => {
        zapatillas = data
        mostrarProducto(zapatillas)
        return zapatillas
    })
    let zapatillas = []


    const divProductos = document.getElementById('productos')

    function mostrarProducto(zapatillas){
        divProductos.innerHTML = ""
        zapatillas.forEach((productoZapatilla) =>{
            const div = document.createElement('div')    
            div.innerHTML += `
            <div class="productos__cont productos__cont__dark" > 
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
            // _____ Si existe, Suma la Cantidad __ 
        const existeProdu = carrito.some (produ => produ.id === IdProducto)
        if(existeProdu){  
            const produ = carrito.map (produ => {
                if(produ.id === IdProducto){
                    produ.cantidad++
                }
            })
        } else{ // _____ si No existe lo Agrega al Carrito ______
            const articulo = zapatillas.find((produ) => produ.id === IdProducto)
            carrito.push(articulo)
        }
        localStorage.setItem("carrito",JSON.stringify(carrito))
        mostrarCarritos();  
    }

    mostrarCarrito.addEventListener("click", mostrarCarritos)


 // _________________________ Modal Carrito_________________________

    function mostrarCarritos(){
        let carrito = JSON.parse(localStorage.getItem('carrito'))
        if(carrito.length != 0) { 
            divCarrito.innerHTML =""
            carrito.forEach((productoZapatilla, id) => {
                divCarrito.innerHTML +=`
                <div class="conte-carrito-div ">
                    <div id="agregar${productoZapatilla.id}"class="conte-carrito ">
                        <img class="conte-carrito__img  conte-carrito_dark" src="${productoZapatilla.imagen}" alt="Productos zapas">
                        <h2 class="conte-carrito__txt__titulo">${productoZapatilla.marca} ${productoZapatilla.nombre}</h2>
                        <p class="conte-carrito__txt">$${productoZapatilla.precio}</p>
                        <p class="conte-carrito__txt"> <button onclick="agregarCarrito(${productoZapatilla.id})" href="#" id="${productoZapatilla.id}" class="btn btn-outline-info btn-sm btnInc">+</button> ${productoZapatilla.cantidad} <button onclick="quitarCarrito(${productoZapatilla.id})" href="#" id="${productoZapatilla.id}" class="btn btn-outline-info btn-sm  btnDec">-</button></p>
                        <p class="conte-carrito__precio">$${(productoZapatilla.precio * productoZapatilla.cantidad)}</p>
                        <div class="conte-carrito__txt">
                        </div>
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
        if (carrito.length > 0){
            Swal.fire({
                title: 'Elegi el medio de pago',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Debito/Credito',
                denyButtonText: `Mercado Pago`,
            }).then((result) => {
                if (result.isConfirmed) {
                    swal.fire({
                        title: "Gracias por tu compra!",
                        text: `enseguida enviamos tu producto!`,
                        icon: "success",
                        timer: "2900",
                        timerProgressBar: "true",
                        showConfirmButton: false,
                    });
                } else if (result.isDenied) {
                    swal.fire({
                        title: "Gracias por tu compra!",
                        text: `enseguida enviamos tu producto!`,
                        icon: "success",
                        timer: "2900",
                        timerProgressBar: "true",
                        showConfirmButton: false,
                    });
                }
            })
            carrito.splice(0,carrito.length);
            mostrarCarritos();
            localStorage.setItem('carrito', JSON.stringify(carrito))
        }
    });

  
// __________  Elimina Producto/s  ___________

    function eliminarProducto(IdProducto) {
        const articulo = carrito.find((produ) => produ.id === IdProducto)
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

 // __________________ Buscador ____________________________ 

    const btnFiltrar = document.getElementById("buscar");
    btnFiltrar.addEventListener('input', (e) => {
        e.preventDefault();
        btnFiltrar.value == "" ? mostrarProducto(zapatillas) : mostrarProducto(zapatillas.filter((elemento) => elemento.marca.toLowerCase().includes(btnFiltrar.value.toLowerCase())))
    })


 // __________________ Filtros ____________________________ 

    const mujer = document.getElementById('mujer')
    mujer.addEventListener('click', () => {
        mostrarProducto(zapatillas.filter((elemento) => elemento.genero.includes('mujer')))
    })
    const hombre = document.getElementById('hombre')
    hombre.addEventListener('click', () => {
        mostrarProducto(zapatillas.filter((elemento) => elemento.genero.includes('hombre')))
    })

// __________________ boton dark o light  ____________________________ 

    const botonDark = document.getElementById('btnDark')
    const botonLight = document.getElementById('btnLight')

    let darkMode 
    if(localStorage.getItem('theme')){
     
        darkMode = localStorage.getItem('theme')
    }else {
        localStorage.setItem('theme','light')   
    }
    if (darkMode == 'dark'){
        document.body.classList.add('modeDark')
    }

    botonDark.addEventListener('click', () => {
        document.body.classList.add('modeDark','productos__cont__dark', 'darkMode__btn')
        localStorage.setItem('theme','dark')
    })
    botonLight.addEventListener('click', () => {
        document.body.classList.remove('modeDark','productos__cont__dark')
        localStorage.setItem('theme','light')
    })
