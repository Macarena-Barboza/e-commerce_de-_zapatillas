// _____________________     TAREA  DOM    __________

class Zapatilla{
        constructor(marca, nombre, color, talle, precio, stock, imagen){
            this.marca = marca
            this.nombre = nombre
            this.color = color
            this.talle = talle
            this.precio = precio
            this.stock = stock
            this.imagen = imagen
        }      
    }
    
    const zapatillas1 = new Zapatilla("Converse", "Run Star Hike", "Beige", [36, 38, 39, 40], 9000, 4,"./images/Converse.png" )
    const zapatillas2 = new Zapatilla("Nike", "Air Force", "Rosa", [35, 36], 22000, 4,"./images/Nike1.png")
    const zapatillas3 = new Zapatilla("Adidas", "Forum Mid", "Blanco", [40, 42, 43, 44], 33000, 5,"./images/Adidas2.png")
    const zapatillas4 = new Zapatilla("Puma", "Future Rider Play On", "Celeste", [39, 40, 43 ], 20000, 2,"./images/Puma1.png" )
    const zapatillas5 = new Zapatilla("Nike", "Air Force", "Crema", [37, 39], 27000, 3,"./images/Nike2.png")
    const zapatillas6 = new Zapatilla("DC", "Shoes Pure", "Negro", [40, 41, 42, 43 ], 18000, 1,"./images/DC1.png")
    
    const zapatillas = [zapatillas1, zapatillas2, zapatillas3, zapatillas4, zapatillas5,zapatillas6]
    console.log("¡bienvenidos a zapas!")
    
    const divProductos = document.getElementById('productos')

   zapatillas.forEach((productoZapatilla, indice) => {
        divProductos.innerHTML += `
                <div class="productos__cont" id= "${indice}">    
                    <img class="productos__cont__imagen" src="${productoZapatilla.imagen}">
                    <div class="productos__cont__text">
                        <h3 class="productos__titulo">${productoZapatilla.marca}</h3>
                        <p class="productos__descrip">es apta para correr una  maratón y ademas es suavecita</p>
                        <p class="productos__valor">$${productoZapatilla.precio}</p>
                        <button class="productos__btn boton">agregar carrito <i class="fa-solid fa-cart-shopping"></i></button>
                    </div>
                </div>
        `
    })
    