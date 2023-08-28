function Formula_1(m_1, v_1){
    let P = parseFloat(m_1) * parseFloat(v_1);

    document.getElementById('Formula_1').innerHTML = "P = "+m_1+" * "+v_1+"<br><br>"+
                                                     "El resultado es: "+P.toFixed(4);
}