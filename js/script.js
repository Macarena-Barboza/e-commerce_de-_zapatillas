//------------- repite Hola ¿Cómo estas? 50 veces --------
let saludar = 0;

for(let i=1; i<=50; i++) {
}
console.log('Hola ¿Cómo estas?');


// ---------- serie fibonacci ------------
let fibonacci = 0;

for(let i=0; i<=100; i++){
    fibonacci +=i
}
console.log(fibonacci)



// -------------- corrije la palabra ----------------
let repetir = true;
while(repetir){
    let palabra = prompt("corrija la palabra ' javacritp'").toLowerCase()

    if (palabra ==="javascript"){
        repetir = false;
    }
    else{
        alert("intente nuevamente");
    }
}



 