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





// // -------------------- comprar zapatilla --------------------
do{ 
    let procucto1 = parseInt(prompt(`Hola ¿hasta cuanto es tu limite para gastar en zapatilla?`))
    if (procucto1 < 500){ 
        alert("Lo siento No te alcanza para comprar!")
    }
    if (procucto1 >= 1000 && procucto1 < 6000){ 
    alert("Podés Comprarte una zapatilla a 2500$")
    }
    if (procucto1 >= 7000 && procucto1 < 9000){ 
        alert("Podés Comprarte una zapatilla Nike a 10000$")
    }
    if (procucto1 >= 12000){ 
        alert("Podés Comprarte una zapatilla Adidas a 12000$ ")
    }


    let valor = parseFloat(prompt("ingrese el valor de la zapatilla"))
            alert("tenes un 10% de descuento")

    function calcularPrecio (valor){  
        let descuento = valor * 0.10
         precioProducto = valor
         let nuevoPrecio = (valor - descuento)

alert(`es un Total de ${nuevoPrecio}$`);
}
calcularPrecio (valor)
alert("¡Gracias por tu compra! 😁")
}while(isNaN(procucto1))

