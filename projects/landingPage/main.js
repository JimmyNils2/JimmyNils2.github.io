let cantidad = document.querySelector(".cantidad"),
    categoria = document.querySelector(".categoria"),
    resumen = document.querySelector(".resumen"),
    mensaje = document.querySelector(".alert"),
    borrar = document.querySelector(".borrar");

resumen.addEventListener("click", aplicarDescuento);
borrar.addEventListener("click", borrarCampos);

function aplicarDescuento(){
    let descuento;

    if (cantidad.value == ""){
        mensaje.classList.remove("alert-primary");
        mensaje.classList.add("alert-danger");
        mensaje.innerHTML = "Ingrese cantidad de entradas";
        return;
    }
    mensaje.classList.add("alert-primary");
    mensaje.classList.remove("alert-danger");
    mensaje.innerHTML = "Total a Pagar: $<span class='total'></span>";

    let total = document.querySelector(".total");
    
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
    let total = document.querySelector(".total");
    // cantidad.value = "";
    // categoria.value = "General";
    total.innerHTML = "";
}