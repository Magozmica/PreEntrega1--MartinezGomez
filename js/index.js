let costoPrenda = 0

function mostrarPrecio(codigo) {
    switch(codigo) {
case 1: 
    alert("EL JARDINERO CUESTA $ 34000")
    costoPrenda = 34000
    break

    case 2: 
    alert("EL TOP CUESTA $ 16000")
    costoPrenda = 16000
    break

    case 3: 
    alert("EL HOODIE CUESTA $ 39000")
    costoPrenda = 39000
    break

    case 4: 
    alert("EL BUZO CUESTA $ 37500")
    costoPrenda = 37500
    break

    case 5: 
    alert("LA CAMPERA CUESTA $ 42000")
    costoPrenda = 42000
    break

    default:
        alert("No entedimos tu selección 😕")
        return;
     }
}

function consultarPrendas() {
    let codigoPrenda = prompt("Ingresa el número del codigo de la prenda que queres consultar:")
    if (codigoPrenda) {
        mostrarPrecio(parseInt(codigoPrenda))
        if (costoPrenda !== 0)
        mostrarCuotas()
        let respuesta = confirm("¿Deseas consultar el precio de otra prenda?")
        if (respuesta === true) {
            consultarPrendas()
        }
    }else {
        console.warn("Debes ingresar un código válido😖") 
    }
}


function mostrarCuotas() {
    console.log("Podés abonar hasta en:")
    for (let i = 1; i <= 12; i++) {
        console.log(i, "Cuota(s) Sin interés de: $" + (costoPrenda / i).toFixed(2) ) 
    }
}