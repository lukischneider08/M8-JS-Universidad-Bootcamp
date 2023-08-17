function calcularInteres(capital, tasa, plazo) {
  return (capital * tasa * plazo) / 100;
}

var capital = Number(prompt('Ingrese el capital'))

let planes = [
  { capital: capital , tasa: 0.15, plazo: 30 },
  { capital: capital, tasa: 0.10, plazo: 180},
  { capital: capital, tasa: 0.23, plazo: 60 },
];

let arrayvacio = [];

for (let i = 0; i < planes.length; i++) {

  let element = planes[i];

  let interes = calcularInteres(element.capital, element.tasa, element.plazo);

  let resultado = { ...element, interes: interes };

  arrayvacio.push(resultado);

  console.log("Intereses generados: ", interes);

}

console.log("Resultados con intereses:",  arrayvacio);