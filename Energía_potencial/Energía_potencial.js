function Formula_1(M_1, H_1){
    let U = parseFloat(M_1) * (9.81) * parseFloat(H_1);
    
    document.getElementById('Formula_1').innerHTML = "<br>"+
                                                     "U = "+M_1+" * 9.81 * "+H_1+"<br><br>"+
                                                     "El resultado es: "+U.toFixed(4);
}