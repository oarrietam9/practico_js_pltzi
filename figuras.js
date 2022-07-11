function areaCuadrado() {
    const input = document.getElementById("ladoCuad");
    const value = input.value;
    const res = value * value;
    alert(res); 
}

function periCuadrado() {
    const input = document.getElementById("ladoCuad");
    const value = input.value;
    const res = value * 4;
    alert(res); 
}

function calcAltIso(lados, base) {
    const altura = (Math.sqrt(Math.pow(lados,2)-(Math.pow(base,2)/4))).toFixed(2);
    return altura;
}

function alturaIsoc() {
    const ladosIguales = document.getElementById("ladosIguales").value;
    const baseIso = document.getElementById("baseIso").value;
    if (ladosIguales > (baseIso/2)) {
        alert("La altura del triángulo es: " + calcAltIso(ladosIguales,baseIso)+ " cms.") ;
    } else {
        alert("Las medidas no corresponden a un triángulo isóceles");
    }
}