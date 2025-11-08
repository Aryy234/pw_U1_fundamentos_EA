/*Variables globales*/
let displayValue = '';

function mostrarDisplay(valor) {
    let elemento = document.getElementById('display');
    displayValue += valor;
    elemento.innerText = displayValue;
}

function limpiarDisplay() {
    displayValue = '';
    document.getElementById('display').innerText = '';
}

function borrarUltimoCaracter() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').innerText = displayValue;
}

function calcularResultado() {
    try {
        // Reemplazar % por /100 para calcular porcentajes
        let expresion = displayValue.replace(/%/g, '/100');
        let resultado = eval(expresion);
        
        // Redondear a 8 decimales para evitar errores de punto flotante
        resultado = Math.round(resultado * 100000000) / 100000000;
        
        displayValue = resultado.toString();
        document.getElementById('display').innerText = displayValue;
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
        displayValue = '';
    }
}
