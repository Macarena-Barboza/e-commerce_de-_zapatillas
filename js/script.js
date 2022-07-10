// //------------- repite Hola ¿Cómo estas? 50 veces --------
// let saludar = 0;

// for(let i=1; i<=50; i++) {
// }
// console.log('Hola ¿Cómo estas?');


// // ---------- serie fibonacci ------------
// let fibonacci = 0;

// for(let i=0; i<=100; i++){
//     fibonacci +=i
// }
// console.log(fibonacci)



// // -------------- corrije la palabra ----------------
// let repetir = true;
// while(repetir){
//     let palabra = prompt("corrija la palabra ' javacritp'").toLowerCase()

//     if (palabra ==="javascript"){
//         alert("correcto");
//         // repetir = false;
//     }
//     else{
//         alert("intente nuevamente");
//     }
// }

// // // -------------------- comprar zapatilla --------------------
// do{ 
//     let procucto1 = parseInt(prompt(`Hola ¿hasta cuanto es tu limite para gastar en zapatilla?`))
//     if (procucto1 <= 2500){ 
//         alert("Lo siento No te alcanza para comprar!")
//     }
//     else if (procucto1 >= 2500 && procucto1 < 7000){ 
//     alert("Podés Comprarte una zapatilla a 2500$")
//     }
//     else if (procucto1 >= 7000 && procucto1 < 12000){ 
//         alert("Podés Comprarte una zapatilla Nike a 7000$")
//     }
//     else if (procucto1 >= 12000){ 
//         alert("Podés Comprarte una zapatilla Adidas a 12000$ ")
//     }


//     let valor = parseFloat(prompt("ingrese el valor de la zapatilla"))
//             alert("tenes un 10% de descuento")

//     function calcularPrecio (valor){  
//         let descuento = valor * 0.10
//          precioProducto = valor
//          let nuevoPrecio = (valor - descuento)

// alert(`es un Total de ${nuevoPrecio}$`);
// }
// calcularPrecio (valor)
// alert("¡Gracias por tu compra! 😁")
// }while(isNaN(procucto1))


// _____________________     TAREA   __________
class Zapatilla{
    constructor(marca, nombre, color, talle, precio, stock){
        this.marca = marca
        this.nombre = nombre
        this.color = color
        this.talle = talle
        this.precio = precio
        this.stock = stock
    }      
}

const zapatillas1 = new Zapatilla("Converse", "Run Star Hike", "Blanca", [36, 38, 39, 40], 9.000, 4)
const zapatillas2 = new Zapatilla("Nike", "Air Force", "Celeste", [35, 36], 10000, 4)
const zapatillas3 = new Zapatilla("Adidas", "Forum Mid", "Blanco", [40, 42, 43, 44], 33000, 5)
const zapatillas4 = new Zapatilla("Puma", "Future Rider Play On", "Rosa", [39, 40, 43 ], 20000, 2)
const zapatillas5 = new Zapatilla("DC", "Shoes Pure", "Negro", [40, 41, 42, 43 ], 18000, 1)

const zapatillas = [zapatillas1, zapatillas2, zapatillas3, zapatillas4, zapatillas5]

let seguirComprando = true;    
let total = 0;
let producto, continua
do{
    producto =(prompt("Hola ¿le interesa alguna marca en particular?  \n adidas \n converse \n puma  \n nike \n dc")).toLowerCase();
    switch (producto) {
        case "adidas":
           alert("Adidas a 32000$"); 
           total = total + 32000;
        break;
        case "converse":
            alert("Converse a 9000$");
            total = total + 9000;
        break;
        case "puma":
           alert("Puma a 20000$");
           total = total + 20000;
        break;
        case "nike":
             alert("Nike a 33000$");
             total = total + 33000;
        break;
        case "dc":
            alert("DC a 18000$");
            total = total + 18000;
        break;
        default:
            alert("No tenemos esa zapatillas")
        break;
        }
        
        console.log(producto)
   
// ----------   pregunta si quiere seguir comprando    ------------
    do{
        continua = (prompt("¿Desea seguir comprando? \n        Si   |   No")).toLowerCase()
            if ((continua != "si") && (continua != "no")){
            alert ("Intente nuevamente")}


    }while((continua != "si") && (continua != "no"))
    
// ----------   pregunta que color quiere de la zapatillas ------------
    if (total != 0 && continua === "no")  {
        do{
            color = prompt("Elija el color de la zapatilla: Blanco - Negro - Crema").toLowerCase()
        }while(color.length == 0)
        const agrego = new Zapatilla(color)
        zapatillas.push(agrego)
        console.log(color)

        alert(`carrito tiene zapatillas: \n de color: ${color}` + ` \n total es: $${total}`)

// ----------  muestra el descuento y precio final  ------------
        alert("tenes un 10% de descuento!!")
        function calcularPrecio (total){  
            let descuento = total * 0.10
            precioProducto = total
            let nuevoPrecio = (total - descuento)  
        console.log(`es un Total de ${nuevoPrecio}$`);
        alert(`es un Total de ${nuevoPrecio}$`);
        }
        calcularPrecio(total)
        console.log("¡Gracias por su Compra!");
        alert("¡Gracias por tu compra! 😁")
    }
}while(isNaN(producto) != (producto))
