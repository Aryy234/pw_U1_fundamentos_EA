/*Variables globales*/
let displayValue = '';
const MAX_LENGTH = 15; // Límite de caracteres en el display

function mostrarDisplay(valor) {
    let elemento = document.getElementById('display');
    
    // Verificar límite de caracteres
    if (displayValue.length >= MAX_LENGTH) {
        return;
    }
    
    // Validar punto decimal
    if (valor === '.') {
        // Si el display está vacío, agregar "0."
        if (displayValue === '') {
            displayValue = '0.';
            elemento.innerText = displayValue;
            return;
        }
        
        // Obtener el último número (después del último operador)
        let operadores = ['+', '-', '*', '/', '%'];
        let ultimoNumero = displayValue;
        
        for (let op of operadores) {
            let index = displayValue.lastIndexOf(op);
            if (index !== -1) {
                ultimoNumero = displayValue.substring(index + 1);
                break;
            }
        }
        
        // Si el último número ya tiene un punto, no agregar otro
        if (ultimoNumero.includes('.')) {
            return;
        }
        
        // Si el último carácter es un operador, agregar "0."
        if (operadores.includes(displayValue[displayValue.length - 1])) {
            displayValue += '0.';
            elemento.innerText = displayValue;
            return;
        }
    }
    
    // Evitar operadores consecutivos (excepto si se está reemplazando)
    let operadores = ['+', '-', '*', '/', '%'];
    if (operadores.includes(valor)) {
        let ultimoCaracter = displayValue[displayValue.length - 1];
        
        // Si el display está vacío, no permitir operadores
        if (displayValue === '') {
            return;
        }
        
        // Si el último carácter es un operador, reemplazarlo
        if (operadores.includes(ultimoCaracter)) {
            displayValue = displayValue.slice(0, -1);
        }
    }
    
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
        // Evitar cálculo si el display está vacío
        if (displayValue === '') {
            return;
        }
        
        // Reemplazar % por /100 para calcular porcentajes
        let expresion = displayValue.replace(/%/g, '/100');
        
        // Limpiar ceros a la izquierda de cada número
        // Esto convierte 000000.1 en 0.1, 007 en 7, etc.
        expresion = expresion.replace(/\b0+(\d)/g, '$1'); // Elimina ceros al inicio de números enteros
        expresion = expresion.replace(/\b0+(0\.\d+)/g, '$1'); // Preserva 0.xxx
        
        let resultado = eval(expresion);
        
        // Verificar si el resultado es válido
        if (!isFinite(resultado)) {
            document.getElementById('display').innerText = 'Error';
            displayValue = '';
            return;
        }
        
        // Redondear a 8 decimales para evitar errores de punto flotante
        resultado = Math.round(resultado * 100000000) / 100000000;
        
        // Limitar la longitud del resultado
        let resultadoStr = resultado.toString();
        if (resultadoStr.length > MAX_LENGTH) {
            // Convertir a notación científica si es muy largo
            resultado = resultado.toExponential(6);
        }
        
        displayValue = resultado.toString();
        document.getElementById('display').innerText = displayValue;
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
        displayValue = '';
    }
}
