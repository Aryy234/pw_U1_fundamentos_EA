function guardar() {
    validarCampos();

}

function validarCampos() {
    limpiarMensaje();
    
    let nombre = document.getElementById("id_nombre").value;
    let apellido = document.getElementById("id_apellido").value;
    let fecha = document.getElementById("id_fecha").value;
    let email = document.getElementById("id_email").value;
    let password = document.getElementById("id_password").value;
    
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

    if(fecha === ""){
        errores.push("El campo fecha de nacimiento es obligatorio");
        mostrarAsteriscoError('id_error_fecha');
        hayErrores = true;
    } else if(!validarFecha(fecha)){
        errores.push("La fecha de nacimiento no es válida (debe ser mayor de edad)");
        mostrarAsteriscoError('id_error_fecha');
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

    if(password === ""){
        errores.push("El campo password es obligatorio");
        mostrarAsteriscoError('id_error_password');
        hayErrores = true;
    } else if(!validarPassword(password)){
        errores.push("El password debe tener al menos 6 caracteres");
        mostrarAsteriscoError('id_error_password');
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

function validarFecha(fecha) {
    const fechaNacimiento = new Date(fecha);
    const fechaActual = new Date();
    const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    const mes = fechaActual.getMonth() - fechaNacimiento.getMonth();
    
    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
        return edad - 1 >= 18;
    }
    
    return edad >= 18;
}

function validarPassword(password) {
    return password.length >= 6;
}

function mostrarMensajeExito(msj){
    let mensaje = document.getElementById('id_msg_error');
    mensaje.style.display = "block";
    mensaje.style.background = "#ccffcc";
    mensaje.style.borderLeft = "6px solid #33cc33";
    mensaje.innerText = msj;
}
 
