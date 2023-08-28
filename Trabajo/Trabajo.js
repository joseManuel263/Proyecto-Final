function Formula_1(F_1, d_1, θ_1){
    let θ_1_rad = parseFloat(θ_1)*(Math.PI / 180);
    let W_1 = (parseFloat(F_1)*parseFloat(d_1)*(Math.cos(parseFloat(θ_1_rad))));
    
    document.getElementById('Formula_1').innerHTML = "<br>"+
                                                     "W = "+F_1+" * "+d_1+" * cos("+θ_1+")<br><br>"+
                                                     "El resultado es: "+W_1.toFixed(4);
}