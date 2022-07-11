/*let lista = [
    4400,
    8303,
    309,
    7080,
    589,
    9907,
    310
];*/

function calcPromedio(lista) {
    let sumat = 0;
    for (let i = 0; i < lista.length; i++) {
        sumat = sumat + lista[i];
    }
    return parseFloat((sumat / lista.length).toFixed(2));
}

function calcMediana(lista) {
    let mediana = 0;
    let ordenada = lista.sort(function(a, b) {
        return a - b;
    });
    let numero1 = ordenada[Math.floor(lista.length/2)];
    let numero2 = ordenada[Math.floor(lista.length/2)-1];
    if (lista.length % 2 === 0)
        mediana = (numero1 + numero2)/2;
    else
        mediana = ordenada[Math.floor(lista.length/2)];
    return parseFloat(mediana.toFixed(2));
}



