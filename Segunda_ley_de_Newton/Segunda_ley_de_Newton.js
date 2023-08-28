function Formula_1(m_1, a_1){
    let resultado = parseFloat(m_1) * parseFloat(a_1);

    
    document.getElementById('Formula_1').innerHTML = "F = m * a<br>"+
                                                     "F = "+m_1+"(Kg) * "+a_1+"(m/s^2)<br>"+
                                                     "F = "+resultado+"(Kg m/s^2)<br>"+
                                                     "F = "+resultado+"N<br><br>"+
                                                     "El resutado es: "+resultado;
}