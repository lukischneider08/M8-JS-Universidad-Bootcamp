function resta(ingreso, egreso) {
    return ingreso - egreso;
}

let meses = [
    { mes: 'Enero' },
    { mes: 'Febrero' },
    { mes: 'Marzo' },
    { mes: 'Abril' },
    { mes: 'Mayo' },
    { mes: 'Junio' },
    { mes: 'Julio' },
    { mes: 'Agosto' },
    { mes: 'Septiembre' },
    { mes: 'Octubre' },
    { mes: 'Noviembre' },
    { mes: 'Diciembre' },
];

let arrayvacio = []


for (let i = 0; i < meses.length; i++) {
    const element = meses[i];

    const ingreso = Number(prompt('Ingrese el ingreso del mes (Los meses van del 0 al 11) este es el: ' +  +i));
    const egreso = Number(prompt('Ingrese el egreso del mes (Los meses van del 0 al 11) este es el: ' +  +i));

    alert('Capital ingresado correctamente, ' + 'mes: ' + +i)

    let operacion = resta(ingreso, egreso)

    let resultado = { ...element, flujoDeInteresAnual: operacion, }

    arrayvacio.push(resultado)
}

console.table('resultados:', arrayvacio)

