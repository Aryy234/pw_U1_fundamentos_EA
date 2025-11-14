function guardar() {
    validarCampos();

}

function validarCampos() {
    limpiarMensaje();
    
    let nombre = document.getElementById("id_nombre").value;
    let apellido = document.getElementById("id_apellido").value;
    let email = document.getElementById("id_email").value;
    
    let errores = [];
    let hayErrores = false;

    if(nombre === ""){
        errores.push("El campo nombre es obligatorio");
        mostrarAsteriscoError('id_error_nombre');
        hayErrores = true;
    }

    if(apellido === ""){
        errores.push("El campo apellido es obligatorio");
        mostrarAsteriscoError('id_error_apellido');
        hayErrores = true;
    }

    if(email === ""){
        errores.push("El campo email es obligatorio");
        mostrarAsteriscoError('id_error_email');
        hayErrores = true;
    } else if(!validarEmail(email)){
        errores.push("El formato del email no es válido");
        mostrarAsteriscoError('id_error_email');
        hayErrores = true;
    }

    if(hayErrores){
        mostrarMensaje(errores.join(", "));
        return;
    }

    // Si todas las validaciones pasan
    mostrarMensajeExito("Formulario válido. Datos guardados correctamente.");
}

function mostrarMensaje(msj){
    let mensaje = document.getElementById('id_msg_error');
    mensaje.style.display = "block";
    mensaje.innerText = msj;
}

function mostrarAsteriscoError(campoId) {
    let asterisco = document.getElementById(campoId);
    asterisco.style.display = "inline";
}

function limpiarMensaje(){
    let mensaje = document.getElementById('id_msg_error');
    mensaje.innerText = "";
    mensaje.style.display = "none";

    const erroresAsterisco = document.querySelectorAll('.error_asterisco');
    erroresAsterisco.forEach(e => e.style.display = "none");
}

function validarEmail(email) {

    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return patron.test(email);

}

function mostrarMensajeExito(msj){
    let mensaje = document.getElementById('id_msg_error');
    mensaje.style.display = "block";
    mensaje.style.background = "#ccffcc";
    mensaje.style.borderLeft = "6px solid #33cc33";
    mensaje.innerText = msj;
}
 
