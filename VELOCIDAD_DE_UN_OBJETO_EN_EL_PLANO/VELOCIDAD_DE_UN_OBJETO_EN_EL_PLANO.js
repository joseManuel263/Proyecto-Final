function Formula_1(v_1, θ_1){
    let θ_1_rad = θ_1*(Math.PI / 180);
    let v_i = ((v_1)*(Math.cos(θ_1_rad)));
    let v_j = ((v_1)*(Math.sin(θ_1_rad)));

    
    document.getElementById('Formula_1').innerHTML = "→<br>"+
                                                     "V = "+v_1+" * cos("+θ_1+") i + "+ v_1+" * sen("+θ_1+") j<br><br>"+
                                                     "El resultado es: ("+v_i.toFixed(4)+"i , "+v_j.toFixed(4)+"j)";
}