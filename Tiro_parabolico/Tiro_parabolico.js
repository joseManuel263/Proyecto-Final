function Formula_1(v, angulo_Grados){
    let angulo_radianes = (angulo_Grados) * (Math.PI / 180)

    let Formula_1 = (Math.pow(v, 2) * Math.pow(Math.sin(angulo_radianes), 2)) / (2 * 9.8)
    console.log(v, angulo_Grados, angulo_radianes, Formula_1);
    document.getElementById('Formula_1').innerHTML = Formula_1;
}

function Formula_2(v, angulo_Grados){
    let angulo_radianes = (angulo_Grados) * (Math.PI / 180)

    let Formula_2 = (Math.pow(v, 2) * Math.sin((2 * angulo_radianes))) / (9.8)
    console.log(v, angulo_Grados, angulo_radianes, Formula_2);
    document.getElementById('Formula_2').innerHTML = Formula_2;
}

function Formula_3(v, angulo_Grados){
    let angulo_radianes = (angulo_Grados) * (Math.PI / 180)

    let Formula_3 = ((2 * v) * Math.sin(angulo_radianes)) / (9.8)
    console.log(v, angulo_Grados, angulo_radianes, Formula_3);
    document.getElementById('Formula_3').innerHTML = Formula_3;
}

function value(id){
    return parseInt(document.getElementById(id)?.value);
}