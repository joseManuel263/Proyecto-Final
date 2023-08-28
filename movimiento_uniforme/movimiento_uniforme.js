function velocidad_media(distancia, tiempo){
    console.log(distancia, tiempo, distancia / tiempo);
    document.getElementById('resultado').innerHTML = "La velocidad media con una distancia de: " + distancia + " y un tiempo de: " + tiempo + " es: " + distancia / tiempo;
}

function distancia(velocidad, tiempo){
    console.log(velocidad, tiempo, velocidad * tiempo);
    document.getElementById('resultado2').innerHTML = "La distancia recorrida con una velocidad de: " + velocidad + " y un tiempo de: " + tiempo + " es: " + velocidad * tiempo;
}

function tiempo(distancia, velocidad){
    console.log(distancia, velocidad, distancia / velocidad);
    document.getElementById('resultado3').innerHTML = "La tiempo recorrido con una distncia de: " + distancia + " y un velocidad de: " + velocidad + " es: " + distancia / velocidad;
}