function Formula_1(x0_1, y0_1, Vx0_1, Vy0_1, ax_1, ay_1, t_1){
    let x = parseFloat(x0_1) + (parseFloat(Vx0_1) * Math.cos(30) * parseFloat(t_1))+ (0.5 * parseFloat(ax_1) * parseFloat(t_1) * parseFloat(t_1));
    let y = parseFloat(y0_1) + (parseFloat(Vx0_1) * Math.cos(30) * parseFloat(t_1)) + (0.5 * parseFloat(ay_1) * parseFloat(t_1) * parseFloat(t_1));
    
    document.getElementById('Formula_1').innerHTML = "x("+t_1+") = "+x0_1+" + "+Vx0_1+" * "+t_1+" + 1/2 * "+ax_1+" * "+t_1+"^2<br>"+
                                                     "y("+t_1+") = "+y0_1+" + "+Vy0_1+" * "+t_1+" + 1/2 * "+ay_1+" * "+t_1+"^2<br><br>"+
                                                     "El resultado es ("+x.toFixed(4)+"m, "+y.toFixed(4)+"m)";
}