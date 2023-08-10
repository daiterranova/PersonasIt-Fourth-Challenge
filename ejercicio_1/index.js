//datos de prueba:
let arr = [0, 0, 2, 3, 4, 6, 8, 7, 9, 5, 3, 10, 5];
let blanco = 5;

const buscarValor = (arr, blanco) => {
  let valorBuscado = arr.indexOf(blanco);
  return valorBuscado;
};

let valor = buscarValor(arr, blanco);

let container = document.querySelector("#container");
let mostrarValor = document.createElement("p");
mostrarValor.textContent = `El indice de tu numero buscado es: ${valor}`;
container.append(mostrarValor);
console.log(mostrarValor);
