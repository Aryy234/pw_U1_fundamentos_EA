function cambiarColor(id_elemento, color) {
  document.getElementById(id_elemento).style.color = color;
}

function agregarElemento(idelementopadre, html, tipoelemento) {
  var nuevoElemento = document.createElement(tipoelemento); // ← Usar el parámetro recibido
  nuevoElemento.innerHTML = html; // ← Usar el parámetro recibido
  document.getElementById(idelementopadre).appendChild(nuevoElemento); // ← Usar el parámetro recibido
}

function eliminarElemento(idelemento) {
  document.getElementById(idelemento).remove();
}

function ocultarElemento(idelemento) {
  document.getElementById(idelemento).style.display = "none";
}

function mostrarElemento(idelemento) {
  document.getElementById(idelemento).style.display = "block";
}

function evaluarOperacion(tipo) {
  let num1 = parseFloat(document.getElementById("id_n1").value);
  let num2 = parseFloat(document.getElementById("id_n2").value);

  let resultado = 0;

  if (tipo === "+") {
    resultado = sumar(num1, num2);
  } else if (tipo === "-") {
    resultado = restar(num1, num2);
  } else if (tipo === "*") {
    resultado = multiplicar(num1, num2);
  } else if (tipo === "/") {
    resultado = dividir(num1, num2);
  } else {
    resultado = null;
  }

  document.getElementById("id_resultado").innerText = "Resultado: " + resultado;
}

function sumar(num1, num2) {
  return num1 + num2;
}
function restar(num1, num2) {
  return num1 - num2;
}
function multiplicar(num1, num2) {
  return num1 * num2;
}
function dividir(num1, num2) {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return "Error: Division por cero";
  }
}

function fundamentosJS() {
  /* 3 Tipos de variables */
  var nombre = "Ariel"; //antigua, ya considerada obsoleta
  let apellido = "Elizalde"; //variable que puede cambiar (variables cambiantes), es tipado dinámico
  let apellido2 = 15; //variable que puede cambiar (variables cambiantes), es tipado dinámico
  apellido2 = "Gomez"; //reasignación de variable, no es recomendable cambiar el tipo de dato

  let arreglo = [1, 2, 3, 4, 5]; //arreglo o array
  let diasSemana = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  const IVA = 12.8; //constante, valor fijo que no cambia

  console.log("Fundamentos de JS");
  console.log("Nombre: " + nombre);
  console.log("Iva" + IVA);
  console.log("Arreglo: " + arreglo);

  //Arreglos
  const arreglosDiasSemana = ["Lunes", "Martes", "Miércoles"];

  arreglosDiasSemana.push("Feriado"); //agregar un elemento al final del arreglo
  console.log("Días de la semana: " + arreglosDiasSemana);

  arreglosDiasSemana.unshift("Dias Uuwu"); //agregar un elemento al inicio del arreglo
  console.log("Días de la semana: " + arreglosDiasSemana);

  console.log("Manejo de nulos, undefined y NaN");
  arreglosDiasSemana.push(null); //agregar un elemento nulo
  arreglosDiasSemana.push(undefined); //agregar un elemento indefinido
  arreglosDiasSemana.push(NaN); //agregar un elemento NaN
  arreglosDiasSemana.push(""); //agregar un elemento cadena vacía

  console.log(arreglosDiasSemana[5]); //undefined
  console.log(arreglosDiasSemana[6]); //null
  console.log(arreglosDiasSemana[7]); //undefined
  console.log(arreglosDiasSemana[8]); //NaN
  console.log(arreglosDiasSemana[9]); //cadena vacía
  /* Tener en cuenta que cada cadena vacía es un elemento válido en el arreglo y distinto*/

  const numerosPares = [2, 4, 6, 8, 10];
  const numerosImpares = [1, 3, 5, 7, 9];

  const numerosTotales = numerosImpares.concat(numerosPares); //unir dos arreglos, crea un nuevo arreglo
  console.log("Números totales: " + numerosTotales);

  /* Senetencias de control */
  let edad = 19;
  if (edad >= 18) {
    console.log("Es mayor de edad");
  } else {
    console.log("Es menor de edad");
  }

  let dia = "lunes";
  switch (dia) {
    case "lunes":
      console.log("Es lunes");
      break;
    case "martes":
      console.log("Es martes");
      break;
    default:
      console.log("No es lunes ni martes");
  }

  for (let i = 0; i <= 5; i++) {
    console.log("Número: " + i);
  }

  const frutas = ["Manzana", "Banana", "Cereza"];
  for (let fruta of frutas) {
    console.log("Fruta: " + fruta);
  }

  /* Manejo de objetos */
  const profesor = {
    nombre: "Ariel",
    apellido: "Elizalde",
    edad: 30,
    ecuatorional: true,
    genero: "M",
    ciudad: "Quito",
  };

  console.log(profesor);
  console.log("Nombre: " + profesor.nombre);
  profesor.apellido = "Gonzalez"; //modificación de un atributo del objeto

  console.log("Objeto modificado: " + profesor.apellido);
  console.log("Apellido: " + profesor.apellido);
  console.log("Edad: " + profesor.edad);
  console.log("Ecuatoriano: " + profesor.ecuatorional);
  console.log("Género: " + profesor.genero);
  console.log("Ciudad: " + profesor.ciudad);

  if (profesor.ciudad === "Quito") {
    console.log("El profesor es de Quito");
  }

  if (profesor.edad !== 36) {
    console.log("El profesor no tiene 36 años");
  } else {
    console.log("El profesor tiene 36 años");
  }

  for (let clave in profesor) {
    console.log(clave);
    console.log(profesor[clave]);
  }

  //declarar objeto
  const e1 = {
    nombre: "Ariel",
    apellido: "Elizalde",
    edad: 30,
    ecuatorional: true,
    genero: "M",
    ciudad: "Quito",
  };

  const e2 = {
    nombre: "Ariel",
    apellido: "Elizalde",
    edad: 30,
    ecuatorional: true,
    genero: "M",
    ciudad: "Quito",
  };

  const arregloEstudiantes = [
    e1,
    e2,
    { nombre: "Juan", apellido: "Pérez", edad: 25 },
  ];
  console.log(arregloEstudiantes);

  console.log(arregloEstudiantes[0]);
  console.log(arregloEstudiantes[1]);
  console.log(arregloEstudiantes[2]);

  /* Desestructuración de objetos */
  //extraer valores de un objeto a variables individuales

  //Para Arreglos
  const ar1 = [1, 2, 3, 4, 5, 6, 7];

  const [p1, p2, p3, p4, p5, p6, p7] = ar1; //desestructuración de arreglos (se declara variables individuales)
  console.log(p1);
  console.log(p4);

  const [primero, , , , , , ultimo] = ar1; //desestructuración de arreglos (se declara variables individuales)
  console.log(primero);
  console.log(ultimo);

  //lo mismo pero en un solo paso
  const [pos1, pos2] = [1, 2, 3, 4, 5, 6, 7];
  imprime(ar1);

  //Para Objetos
  const e3 = {
    nombre: "Ariel",
    apellido: "Elizalde",
    edad: 30,
    ecuatorional: true,
    genero: "M",
    ciudad: "Quito",
  };

  const { nombre: nombreDes, ciudad: ciudadDes } = e3; //desestructuración de objetos (se declara variables individuales)
  console.log(nombreDes);
  console.log(ciudadDes);

  //lo mismo pero en un solo paso
  const { nombre: n1, edad: eEdad } = {
    nombre: "Ariel",
    apellido: "Elizalde",
    edad: 30,
    ecuatorional: true,
    genero: "M",
    ciudad: "Quito",
  };
  console.log(n1);
  console.log(eEdad);

  const e4 = {
    nombre: "Ariel",
    apellido: "Elizalde",
    edad: 30,
    ecuatorional: true,
    genero: "M",
    ciudad: "Quito",
    direccion: {
      calle: "Av. Siempre Viva",
      barrio: "Springfield",
      numeracion: 742,
    },
  };

  //console.log(e4.direccion);
  //console.log(e4.direccion.barrio);

  //desestructutacion de objeto que tiene otro objeto dentro
  const { direccion } = e4; // Primero extraemos el objeto 'direccion'
  console.log(direccion);
  const { calle } = direccion; // Luego extraemos 'calle' de 'direccion'
  console.log(calle);

  //en un solo paso
  const { direccion: { barrio, calle: c1, numeracion } } = e4;
  console.log(barrio);
  console.log(c1);
  console.log(numeracion);
}

function imprime([a, b, c]) {
  console.log(a);
  console.log(b);
  console.log(c);
}
