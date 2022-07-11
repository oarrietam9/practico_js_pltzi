const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
        function (salaryA, salaryB) {
            return salaryA - salaryB;
        }
    );

function calcMedianaSalarial(lista) {
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
    //return mediana;
}

const medianaSalarialCol = calcMedianaSalarial(salariosColSorted);
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount
);
const medianaTop10Col = calcMedianaSalarial(salariosColTop10); 

console.log(
    medianaSalarialCol,
    medianaTop10Col
);
