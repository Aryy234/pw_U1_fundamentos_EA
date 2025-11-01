        function cambiarColor(id_elemento, color){
            document.getElementById(id_elemento).style.color = color;
        }

        function agregarElemento(idelementopadre, html){
            var nuevoElemento = document.createElement("h1");
            nuevoElemento.innerHTML = html; // ← Usar el parámetro recibido
            document.getElementById(idelementopadre).appendChild(nuevoElemento); // ← Usar el parámetro recibido
        }

        function eliminarElemento(idelemento){
            document.getElementById(idelemento).remove();
        }

        function ocultarElemento(idelemento){
            document.getElementById(idelemento).style.display = "none";
        }

        function mostrarElemento(idelemento){
            document.getElementById(idelemento).style.display = "block";
        }

        function evaluarOperacion(tipo){
            let num1 = parseFloat(document.getElementById('id_n1').value)
            let num2 = parseFloat(document.getElementById('id_n2').value)

            let resultado = 0;

            if (tipo === "+"){
                resultado = sumar(num1, num2);
            } else if (tipo === "-"){
                resultado = restar(num1, num2);
            } else if (tipo === "*"){
                resultado = multiplicar(num1, num2);
            } else if (tipo === "/"){
                resultado = dividir(num1, num2);
            } else {
                resultado = null;
            }

            document.getElementById('id_resultado').innerText = "Resultado: " + resultado;
        }

        function sumar(num1, num2){
            return num1 + num2;
        }
        function restar(num1, num2){
            return num1 - num2;
        }
        function multiplicar(num1, num2){
            return num1 * num2;
        }
        function dividir(num1, num2){
            if(num2 !== 0){
                return num1 / num2;
            } else {
                return "Error: Division por cero";
            }
        }