function calcular() {
    const precio = document.getElementById("price").value;
    const desc = document.getElementById("desc").value;
    const res = (precio - ((precio * desc)/100)).toFixed(2);
    const result = document.getElementById("result");
    return result.innerText = "El precio con descuento es de: ₡" + res + ".";
}

const coupons = [
    {name: "Diamante", value: 40},
    {name: "Oro", value: 30},
    {name: "Plata", value: 15},
    {name: "Bronce", value: 5},
];

const select = document.getElementById("select");

for (const coupon of coupons) {
    select.add("<option>" + coupon.name + "</option>");
}

/*<option value="volvo">Volvo</option>
<option value="saab">Saab</option>
<option value="mercedes">Mercedes</option>
<option value="audi">Audi</option>*/