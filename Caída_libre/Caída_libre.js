function Formula_1(H, t){
    let Formula_1 = (parseInt(H)) -1/2 * (9.8 * (parseInt(t)*parseInt(t)))
    console.log(H, t, Formula_1);
    document.getElementById('Formula_1').innerHTML = "La posición final del cuerpo es: "+Formula_1;
}

function Formula_2(h,){
    let Formula_2 = Math.sqrt((2*parseInt(h)) / 9.8)
    console.log(h, Formula_2);
    document.getElementById('Formula_2').innerHTML = "Intervalo de tiempo durante el cual se produce el movimiento es: "+Formula_2;
}

function Formula_3( t){
    let Formula_3 = -9.8 * t
    console.log(t, Formula_3);
    document.getElementById('Formula_3').innerHTML = "La velocidad final del cuerpo es: "+Formula_3;
}

function Formula_4(){
    let Formula_4 = -9.8
    console.log(Formula_4);
    document.getElementById('Formula_4').innerHTML = "La aceleración del cuerpo durante el movimiento es: "+Formula_4;
}

function value(id){
    return parseInt(document.getElementById(id)?.value);
}