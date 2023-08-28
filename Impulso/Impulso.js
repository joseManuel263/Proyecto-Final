function Formula_1(F_1, T_i_1, T_f_1){
    let T = parseFloat(T_i_1) - parseFloat(T_f_1);
    let I = parseFloat(F_1) * T

    document.getElementById('Formula_1').innerHTML = "I = "+F_1+" * ("+T_i_1+" - "+T_f_1+")<br><br>"+
                                                     "I = "+F_1+" * Δ"+T+"<br><br>"+
                                                     "El resultado es: "+I.toFixed(4);
}