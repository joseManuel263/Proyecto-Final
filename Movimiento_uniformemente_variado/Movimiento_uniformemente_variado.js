function velocidad_media(velocidad_inicial, aceleracion, tiempo){
    let velocidad_final = (parseInt(velocidad_inicial)) + (parseInt(aceleracion) * parseInt(tiempo))
    console.log(velocidad_inicial, aceleracion, tiempo, velocidad_final);
    document.getElementById('velocidad_final').innerHTML = "La velocidad final de un objeto que tiene una velocidad inicial de: " + velocidad_inicial + " m/s, una aceleracion de: " + aceleracion + " m/s^2 y un tiempo de: " + tiempo + " s,  es de: " + velocidad_final + " m/s";
}

function desplazamiento_total(velocidad_inicial, aceleracion, tiempo){
    let Desplazamiento_total = ((value(velocidad_inicial) * value(tiempo)) + (value(aceleracion) / 2) * Math.pow(value(tiempo), 2));
    console.log(velocidad_inicial, aceleracion, tiempo, Desplazamiento_total);
    document.getElementById('Desplazamiento_total').innerHTML = "El desplazamiento total de un objeto que tiene una velocidad inicial de: " + value(velocidad_inicial) + " m/s, una aceleracion de: " + value(aceleracion) + " m/s^2 y un tiempo de: " + value(tiempo) + " s,  es de: " + Desplazamiento_total + " m/s";
}

function value(id){
    return parseInt(document.getElementById(id)?.value);
}