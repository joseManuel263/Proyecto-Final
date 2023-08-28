function Formula_1(W_1, T_1){
    let P = parseFloat(W_1)/parseFloat(T_1);
    
    document.getElementById('Formula_1').innerHTML = "<br>"+
                                                     "P = "+W_1+" / "+T_1+"<br><br>"+
                                                     "El resultado es: "+P.toFixed(4);
}