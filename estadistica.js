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

let lista1 = [
    1,2,3,1,2,3,4,2,2,2,1
];

function calcModa(lista) {
    const conteoElementos = {};
    lista.map(
        function(elemento) {
            if(conteoElementos[elemento]) {
                conteoElementos[elemento] += 1;
            } else {
                conteoElementos[elemento] = 1;
            }  
        }
    );
    const lista1Array = Object.entries(conteoElementos).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );
    const moda = lista1Array[lista1Array.length - 1][0];
    return parseInt(moda);
}

