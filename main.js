let cantidad = document.querySelector(".cantidad"),
    categoria = document.querySelector(".categoria"),
    total = document.querySelector(".total"),
    resumen = document.querySelector(".resumen"),
    borrar = document.querySelector(".borrar");

resumen.addEventListener("click", aplicarDescuento);
borrar.addEventListener("click", borrarCampos);

function aplicarDescuento(){
    let descuento;

    if (cantidad.value == ""){
        alert("Ingrese cantidad de tickets");
        return;
    }

    switch(categoria.value){
        case "General":
            descuento = 0;
            break;
        case "Estudiante":
            descuento = .8;
            break;
        case "Trainee":
            descuento = .5;
            break;
        case "Junior":
            descuento = .15;
            break;   
    }
    total.innerHTML = (200*cantidad.value) - (200*cantidad.value*descuento);   
}

function borrarCampos(){
    cantidad.value = "";
    categoria.value = "General";
    total.innerHTML = "";
}