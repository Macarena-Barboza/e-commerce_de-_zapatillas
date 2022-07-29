

    class Zapatilla{
        constructor(id, marca, nombre, color, talle, precio, stock, imagen, descripcion){
            this.id = id
            this.marca = marca
            this.nombre = nombre
            this.color = color
            this.talle = talle
            this.precio = precio
            this.stock = stock
            this.imagen = imagen
            this.descripcion = descripcion

        }      
    }
        
    const zapatillas1 = new Zapatilla(1,"Converse", "Run Star Hike", "Beige", [36, 38, 39, 40], 9000, 4,"./images/Converse.png","es apta para correr una maratón y ademas es suavecita")
    const zapatillas2 = new Zapatilla(2, "Nike", "Air Force", "Rosa", [35, 36], 22000, 4,"./images/Nike1.png", "es apta para correr una maratón y ademas es suavecita")
    const zapatillas3 = new Zapatilla(3, "Adidas", "Forum Mid", "Blanco", [40, 42, 43, 44], 33000, 5,"./images/Adidas2.png","es apta para correr una maratón y ademas es suavecita")
    const zapatillas4 = new Zapatilla(4, "Puma", "Future Rider Play On", "Celeste", [39, 40, 43 ], 20000, 2,"./images/Puma1.png","es apta para correr una maratón y ademas es suavecita" )
    const zapatillas5 = new Zapatilla(5, "Nike", "Air Force", "Crema", [37, 39], 27000, 3,"./images/Nike2.png","es apta para correr una maratón y ademas es suavecita")
    const zapatillas6 = new Zapatilla(6, "DC", "Shoes Pure", "Negro", [40, 41, 42, 43 ], 18000, 1,"./images/DC1.png","es apta para correr una maratón y ademas es suavecita")
    const zapatillas7 = new Zapatilla(7, "Hoka", "Anacapa Mid GTX", "Marrón", [37, 39], 13000, 3,"./images/Hoka.png", "botas de senderismo de uso diario.")
    const zapatillas8 = new Zapatilla(8, "Nike", "Air Force", "Rojo", [35, 36], 24000, 4,"./images/Nike3.png", "es apta para correr una maratón y ademas es suavecita")
    
    const zapatillas = [zapatillas1, zapatillas2, zapatillas3, zapatillas4, zapatillas5,zapatillas6, zapatillas7, zapatillas8]
    console.log("¡bienvenidos a zapas!")
    
    const divProductos = document.getElementById('productos')

         zapatillas.forEach((productoZapatilla, indice) => {
            divProductos.innerHTML += `
                    <div class="productos__cont productos__cont__dark" id= "">    
                        <img class="productos__cont__imagen" src="${productoZapatilla.imagen}">
                        <div class="productos__cont__text">
                            <h3 class="productos__titulo">${productoZapatilla.marca}</h3>
                            <p class="productos__descrip">${productoZapatilla.descripcion}</p>
                            <p class="productos__valor">$${productoZapatilla.precio}</p>
                            <button class="productos__btn boton" id = "agregar${indice}">agregar carrito <i class="fa-solid fa-cart-shopping"></i></button>
                        </div>
                    </div>
            `
            })


// __________________ agregar carrito ______________________________ 

    const divCarrito = document.getElementById("divCarrito")
    const mostrarCarrito = document.getElementById("mostrarCarrito")
    const contadorCarrito = document.getElementById("contadorCarrito")

    let carrito = []
    if(localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
    } else {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }

    zapatillas.forEach((productoZapatilla, indice) => {
        const boton = document.getElementById(`agregar${indice}`)
        boton.addEventListener('click', () => {
        const nvoProducto = new Zapatilla( productoZapatilla.id, productoZapatilla.marca, productoZapatilla.nombre, productoZapatilla.color,    productoZapatilla.talle, productoZapatilla.precio, productoZapatilla.stock, productoZapatilla.imagen, productoZapatilla.descripcion)
        carrito.push(nvoProducto)
        localStorage.setItem("carrito",JSON.stringify(carrito))
        console.log(carrito);         
        contadorCarrito.innerText = carrito.length
        })
    })

    mostrarCarrito.addEventListener("click", () => {
        let carrito = JSON.parse(localStorage.getItem('carrito'))
         divProductos.innerHTML = ""
         if(carrito.length != 0){
            carrito.forEach((productoZapatilla, indice) => {
                divProductos.innerHTML +=`
                <div class=" carri " id= "agregar${indice}">    
                    <img class="carri__img" src="${productoZapatilla.imagen}">
                    <h3 class="productos__cont__titulo carri__titulo">${productoZapatilla.marca}</h3>
                    <p class="carri__valor">$${productoZapatilla.precio}</p>
                    <button class="productos__btn boton carri__remove" id="eliminar${indice}" ><i class="fa-solid fa-trash"></i></button>
                </div>
                `
            })
            carrito.forEach((productoZapatilla, indice) =>{
                let botnnnn =document.getElementById(`eliminar${indice}`)
                console.log( "botnnn")
                botnnnn.addEventListener('click', () =>{
                    document.getElementById(`agregar${indice}`).remove()
                    let index = carrito.findIndex(productoZapatillaA => productoZapatillaA.marca == productoZapatilla.marca)
                    carrito.splice(index,1)
                    localStorage.setItem('carrito', JSON.stringify(carrito))
                    console.log(`${productoZapatilla.marca} Eliminada`)
                    contadorCarrito.innerText = carrito.length
                })
            })
        } else{
            divCarrito.innerHTML = `<p class="carri" > No hay productos en el carrito</p>`
        }
    })


// __________________ buscador (filtro)  ____________________________ 

    const btnFiltrar = document.getElementById("btnFiltrar");
    btnFiltrar.addEventListener("click", filtrarBusqueda);
    
    function filtrarBusqueda(e) {
        e.preventDefault();
        let busqueda = document.getElementById("buscar").value.toLowerCase();
        let arrayFiltrado = zapatillas.filter((elemento) => elemento.marca.toLowerCase().includes(busqueda));
        mostrarProducto(arrayFiltrado)
    }
    function mostrarProducto(zapatillas){
        divProductos.innerHTML = ""
        zapatillas.forEach((productoZapatilla, indice)=> {
            divProductos.innerHTML +=`
            <div class="productos__cont productos__cont__dark" id= "">    
                <img class="productos__cont__imagen" src="${productoZapatilla.imagen}">
                <div class="productos__cont__text">
                    <h3 class="productos__titulo">${productoZapatilla.marca}</h3>
                    <p class="productos__descrip">${productoZapatilla.descripcion}</p>
                    <p class="productos__valor">$${productoZapatilla.precio}</p>
                    <button class="productos__btn boton" id = "agregar${indice}">agregar carrito <i class="fa-solid fa-cart-shopping"></i></button>
                </div>
            </div>
            `
        });
    }


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

