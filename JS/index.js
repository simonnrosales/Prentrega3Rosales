function mostrarHamburgesa() {
  return prompt(
    "(a partir de la segunda compra se aplica un descuento de 200$): \n" +
    "1. Hamburgesa Tiny Jobs $6500: \n" +
    "2. Hamburgesa Big Jobs $9000: \n" +
    "3. Hamburgesa Jobster $10000: \n" +
    "4. Hamburgesa Mega Jobster $13000: \n" +
    "Que Hamburgesa queres comprar? ingrese el numero o escriba 'salir' para finalizar"
  ); 
}

function ModificarHamburgesa() {
  return prompt(
    "(a partir de la segunda compra se aplica un descuento de 200$): \n" +
    "1. Hamburgesa Tiny Jobs $6500: \n" +
    "2. Hamburgesa Big Jobs $9000: \n" +
    "3. Hamburgesa Jobster $10000: \n" +
    "4. Hamburgesa Mega Jobster $13000: \n" +
    "Que Hamburgesa queres Modificar? ingrese el numero o escriba 'salir' para finalizar"
  ); 
}




const hamburgesas = [
  {
  id: 1,
  nombre: "TinyJobs",
  precio:  6500,
  patys: 1,
  Ingredientes: [" cheddar"]
  },
  {
  id: 2,
  nombre: "BigJobs",
  precio:  9000,
  patys: 2,
  Ingredientes: [" muzzarella", "lechuga", " tomate", " salsa jobs" ]
  },
  {
  id: 3,
  nombre: "Jobster",
  precio:  10000,
  patys: 2,
  Ingredientes: [" cheddar", " huevo", " panceta", " pepino", " barbacoa"]
  },
  {
  id: 4,
  nombre: "MegaJobster",
  precio:  13000,
  patys: 3,
  Ingredientes: [" cheddar", " huevo", " panceta", " pepino", " barbacoa"]
  },
];

const hamburgesaDetalles=({nombre, precio, patys, Ingredientes})=>{
  hamburgesas.push({nombre, precio, patys, Ingredientes})
}

const informacion = () => {
  let mensajeInformativo = "";
  for (let hamburgesa of hamburgesas) {
mensajeInformativo+=
  `
  nombre:${hamburgesa.nombre} 
  precio: ${hamburgesa.precio}  
  patys: ${hamburgesa.patys} 
  Ingredientes: ${hamburgesa.Ingredientes} 
`;
  }
console.log (mensajeInformativo);
alert (mensajeInformativo);
}




  
function comprarHamburgesa() {
  let total = 0;
  let cantidad = 0;
  let seguirComprando = true;

  while (seguirComprando) {
    let producto = elegirHamburgesa();

    if (producto == null) break;

    cantidad++;
    console.log("----> cantidad:" + cantidad);

    total += producto;

    let respuesta = prompt("quieres seguir comprando? (s/n)");

    if (respuesta === "s") {
      seguirComprando = true;
    } else {
      seguirComprando = false;
    }
  }

  total = aplicarDescuento(total, cantidad);
  console.log("---> total : " + total);
  alert(` Gracias por su compra. El total es ${total} `);
}

function aplicarDescuento(monto, cantidad) {
  if (cantidad < 2) return monto;
  return monto - 200;
}

function elegirHamburgesa() {
  let eleccion = mostrarHamburgesa();
  
  //si el dato es valido
  if (eleccion === null || eleccion === " ") {
    alert("No has ingresado un dato valido");
    return elegirHamburgesa();
  }

  //usuario ingresa salir
  if (eleccion === "salir") {
    return null;
  }

  //el dato es el rango del numero
  eleccion = parseInt(eleccion);
  if (isNaN(eleccion) || eleccion < 1 || eleccion > 4) {
    alert("No valido, seleciona nuevamente");
    return elegirHamburgesa();
  }


  let item = 0;
switch (eleccion){  
  case 1:
    item = 6500;
    break;
  case 2:
    item = 9000;
    break;
  case 3:
    item = 10000;
    break;
  case 4:
    item = 13000;
    break;
  }
 return item; 
}
  
 /*  switch (expresión) {
  case valor1:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
    [break;]
  case valor2:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
    [break;]
  ...
  case valorN:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
    [break;]
  default:
    //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
    [break;] */




 