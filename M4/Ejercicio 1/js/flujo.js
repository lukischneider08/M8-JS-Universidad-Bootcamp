
function restar(ingreso, egreso) {
    return (ingreso - egreso)
}

function recibirflujo(ingreso, egreso) {
    if ( ingreso < egreso) {

        return '-1'
    }
    else if( ingreso > egreso )
        {return  '1'}

    else {return  '0'}
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
    let element = meses[i];

    const ingreso = Number(prompt('Ingrese el ingreso del mes (Los meses van del 0 al 11) este es el: ' +  +i));
    const egreso = Number(prompt('Ingrese el egreso del mes (Los meses van del 0 al 11) este es el: ' +  +i));
    
    alert('Capital ingresado correctamente, ' + 'mes: ' + +i)

    //let creado para sumarlo al arrayvacio
    let operacion = restar(ingreso, egreso)

    //let creado para sumarlo al arrayvacio
    let numeroRetorno = recibirflujo(ingreso, egreso)

    //let contenedor (ponele) creado para añadir cosas al array :o(...element para que aparezcan los anteriores objetos del array )
    //(flujoDeInteresAnual: y numero: solo para ponerle nombre a los let) 
    let resultado = { ...element, flujoDeInteresAnual: operacion, numero: numeroRetorno}

    //push al array
    arrayvacio.push(resultado)
}

console.table('resultados:', arrayvacio)
