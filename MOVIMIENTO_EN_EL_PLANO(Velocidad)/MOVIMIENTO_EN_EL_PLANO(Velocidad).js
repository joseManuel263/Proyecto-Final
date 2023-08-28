function Formula_1(Vx0_1, Vy0_1, ax_1, ay_1, t_1){
    let vx = parseFloat(Vx0_1) + (parseFloat(ax_1) * parseFloat(t_1));
    let vy = parseFloat(Vy0_1) + (parseFloat(ay_1) * parseFloat(t_1));
    
    document.getElementById('Formula_1').innerHTML = "<br>vx("+t_1+") = "+Vx0_1+" + "+ax_1+" * "+t_1+"<br>"+
                                                     "vy("+t_1+") = "+Vy0_1+" + "+ay_1+" * "+t_1+"<br><br>"+
                                                     "El resultado es ("+vx.toFixed(4)+"m, "+vy.toFixed(4)+"m)";
}