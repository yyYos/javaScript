window.onload = primeraFuncion()

function primeraFuncion(){
    console.log("pimera funcion")

    let txtnombre = document.getElementById("nombre")
    txtnombre.textContent

    let btnguardar = document.getElementById("guardar")
    btnguardar.addEventListener("click", formGuardar)

    console.log(txtnombre);
}

function formGuardar(){
    
}