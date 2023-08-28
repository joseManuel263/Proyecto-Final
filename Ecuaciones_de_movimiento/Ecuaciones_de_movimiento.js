function Formula_1(x0, v0, t, a){
    let x = parseFloat(x0) + (parseFloat(v0) * parseFloat(t)) + (0.5 * parseFloat(a) * Math.pow(parseFloat(t), 2));
    let v = parseFloat(v0) + (parseFloat(a) * parseFloat(t));
    let x2 = Math.pow(parseFloat(v0), 2) + (2 * parseFloat(a) * (parseFloat(x) - parseFloat(x0)));

    document.getElementById('Formula_1').innerHTML = "Ecuación de posición:<br>"+
                                                     "x = "+x0+" + "+v0+" * "+t+" + (1/2) * "+a+" * "+t+"^2 <br>"+
                                                     "x = "+x0+" + "+parseFloat(v0)*parseFloat(t)+" + (1/2) * "+a+" * "+Math.pow(parseFloat(t),2)+" <br>"+
                                                     "x = "+x0+" + "+parseFloat(v0)*parseFloat(t)+" + "+(0.5) * parseFloat(a) * Math.pow(parseFloat(t),2)+" <br>"+
                                                     "x = "+x+" <br>"+
                                                     "El resultado es: "+x+"<br><br>"+

                                                     "Ecuación de velocidad:<br>"+
                                                     "v = "+v0+" + "+a+" * "+t+"<br>"+
                                                     "v = "+v0+" + "+parseFloat(a) * parseFloat(t)+"<br>"+
                                                     "v = "+v+"<br>"+
                                                     "El resultado es: "+v+"<br><br>"+

                                                     "Ecuación de velocidad al cuadrado:<br>"+
                                                     "v^2 = "+v0+"^2 + "+2+" * "+a+" * ("+x+" - "+x0+")<br>"+
                                                     "v^2 = "+Math.pow(parseFloat(v0), 2)+" + "+2+" * "+a+" * "+(parseFloat(x) - parseFloat(x0))+"<br>"+
                                                     "v^2 = "+Math.pow(parseFloat(v0), 2)+" + "+(2 * a * (parseFloat(x) - parseFloat(x0)))+"<br>"+
                                                     "v^2 = "+x2+"<br>"+
                                                     "El resultado es: "+x2;
}