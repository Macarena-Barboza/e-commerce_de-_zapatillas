
 // __________________ Buscador ____________________________ 

 const btnFiltrar = document.getElementById("buscar");
 btnFiltrar.addEventListener('input', (e) => {
     e.preventDefault();
     btnFiltrar.value == "" ? mostrarProducto(zapatillas) : mostrarProducto(zapatillas.filter((elemento) => elemento.marca.toLowerCase().includes(btnFiltrar.value.toLowerCase())))
 })


 const mujer = document.getElementById('mujer')
 mujer.addEventListener('click', () => {
     mostrarProducto(zapatillas.filter((elemento) => elemento.genero.includes('mujer')))
 })
 const hombre = document.getElementById('hombre')
 hombre.addEventListener('click', () => {
     mostrarProducto(zapatillas.filter((elemento) => elemento.genero.includes('hombre')))
 })


 // __________________ Filtros por Marcas ____________________________ 

const Marca = document.getElementById("Marca");
Marca.addEventListener("click", (e) => {
    e.target.textContent == "Ver todos" ? mostrarProducto(zapatillas.filter((elemento) => elemento.marca)): mostrarProducto(zapatillas.filter((elemento) => elemento.marcas.includes(e.target.textContent)));
});


 //   __________________ range de talles  __________________________  
    const talle = document.getElementById('talle');

    talle.addEventListener('click', (e) => {
        
     mostrarProducto(zapatillas.filter((elemento) => elemento.talle == (e.target.textContent)));
        e.target.classList.toggle('talleActive');

    })
        

 // ___________  Precio Lateral ______________

    const rangoInput = document.querySelectorAll(".range-input input"),
    precioInput = document.querySelectorAll(".price-input input"),
    rango = document.querySelector(".slider .progress");
    let diferenciaPrecio = 10000;
    
        precioInput.forEach(input =>{
            input.addEventListener("input", (e) =>{
                let minPrecio = parseInt(precioInput[0].value),
                maxPrecio = parseInt(precioInput[1].value);
                
                if((maxPrecio - minPrecio >= diferenciaPrecio) && maxPrecio <= rangoInput[1].max){
                    if(e.target.className === "input-min"){
                        rangoInput[0].value = minPrecio;
                        rango.style.left = ((minPrecio / rangoInput[0].max) * 100) + "%";

                    }else{
                        rangoInput[1].value = maxPrecio;
                        rango.style.right = 100 - (maxPrecio / rangoInput[1].max) * 100 + "%";
                        
                    }
                }
            });
        });
    
        rangoInput.forEach(input =>{

            input.addEventListener("input", (e) =>{
                const minValue = parseInt(rangoInput[0].value),
                maxValue = parseInt(rangoInput[1].value);
                if((maxValue - minValue) < diferenciaPrecio){
                    if(e.target.className === "range-min"){
                        rangoInput[0].value = maxValue - diferenciaPrecio;
                    }else{
                        rangoInput[1].value = minValue + diferenciaPrecio;
                    }
                }else{
                    precioInput[0].value = minValue;
                    precioInput[1].value = maxValue;
                    rango.style.left = ((minValue / rangoInput[0].max) * 100) + "%";
                    rango.style.right = 100 - (maxValue / rangoInput[1].max) * 100 + "%";
                }
            mostrarProducto(zapatillas.filter(elemento => elemento.precio >= minValue && elemento.precio <= maxValue) )

            });
        });


