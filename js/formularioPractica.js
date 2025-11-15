// Validaciones del formulario de pago
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('paymentForm');
    const cardholderName = document.getElementById('cardholderName');
    const cardNumber = document.getElementById('cardNumber');
    const expDate = document.getElementById('expDate');
    const cvv = document.getElementById('cvv');

    // Función para mostrar mensajes de error
    function showError(input, message) {
        // Remover error previo si existe
        const existingError = input.parentElement.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Agregar clase de error al input
        input.classList.add('error');

        // Crear y mostrar mensaje de error
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        input.parentElement.appendChild(errorDiv);
    }

    // Función para limpiar errores
    function clearError(input) {
        input.classList.remove('error');
        const errorMessage = input.parentElement.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }

    // Formatear número de tarjeta (agregar espacios cada 4 dígitos)
    cardNumber.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s/g, '');
        let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
        e.target.value = formattedValue;
        
        // Validar solo números
        if (!/^\d*$/.test(value)) {
            e.target.value = e.target.value.slice(0, -1);
        }

        // Limpiar error al escribir
        if (value.length > 0) {
            clearError(e.target);
        }
    });

    // Formatear fecha de expiración (MM/YY)
    expDate.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4);
        }
        
        e.target.value = value;

        // Limpiar error al escribir
        if (value.length > 0) {
            clearError(e.target);
        }
    });

    // Validar CVV (solo números)
    cvv.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/\D/g, '');

        // Limpiar error al escribir
        if (e.target.value.length > 0) {
            clearError(e.target);
        }
    });

    // Validar nombre (solo letras y espacios)
    cardholderName.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');

        // Limpiar error al escribir
        if (e.target.value.length > 0) {
            clearError(e.target);
        }
    });

    // Validación al enviar el formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;

        // Limpiar todos los errores previos
        clearError(cardholderName);
        clearError(cardNumber);
        clearError(expDate);
        clearError(cvv);

        // Validar nombre del titular
        if (cardholderName.value.trim().length < 3) {
            showError(cardholderName, 'Por favor, ingrese un nombre válido (mínimo 3 caracteres)');
            isValid = false;
        }

        // Validar número de tarjeta (16 dígitos)
        const cardNumberValue = cardNumber.value.replace(/\s/g, '');
        if (cardNumberValue.length !== 16) {
            showError(cardNumber, 'El número de tarjeta debe tener 16 dígitos');
            isValid = false;
        }

        // Validar fecha de expiración
        const expDateValue = expDate.value;
        if (!/^\d{2}\/\d{2}$/.test(expDateValue)) {
            showError(expDate, 'Formato inválido. Use MM/YY');
            isValid = false;
        } else {
            const [month, year] = expDateValue.split('/').map(Number);
            const currentYear = new Date().getFullYear() % 100;
            const currentMonth = new Date().getMonth() + 1;
            
            if (month < 1 || month > 12) {
                showError(expDate, 'El mes debe estar entre 01 y 12');
                isValid = false;
            } else if (year < currentYear || (year === currentYear && month < currentMonth)) {
                showError(expDate, 'La tarjeta está vencida');
                isValid = false;
            }
        }

        // Validar CVV (3 dígitos)
        if (cvv.value.length !== 3) {
            showError(cvv, 'El CVV debe tener 3 dígitos');
            isValid = false;
        }

        // Si todo es válido, mostrar mensaje de éxito
        if (isValid) {
            // Crear mensaje de éxito
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = '¡Pago procesado exitosamente!';
            form.appendChild(successMessage);

            // Remover mensaje después de 3 segundos
            setTimeout(function() {
                successMessage.remove();
                form.reset();
            }, 3000);
        }
    });
});