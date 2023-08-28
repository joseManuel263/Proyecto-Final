function Formula_1(m_1, r_1, m_2, r_2){
    let k_1 = (0.5) * parseFloat(m_1) * (parseFloat(r_1) * parseFloat(r_1));
    let k_2 = (0.5) * parseFloat(m_2) * (parseFloat(r_2) * parseFloat(r_2));
    let k = k_1 - k_2;

    document.getElementById('Formula_1').innerHTML = "Energía cinética:<br><br>"+
                                                     "1) K = ½ * "+m_1+" * "+r_1+"²<br><br>"+
                                                     "El resultado es: "+k_1+"<br><br><br>"+
                                                     "2) K = ½ * "+m_2+" * "+r_2+"²<br><br>"+
                                                     "El resultado es: "+k_2+"<br><br><br>"+
                                                     "Principio de trabajo y energia:<br><br>"+
                                                     "W = ("+k_1+") - ("+k_2+")<br><br>"+
                                                     "El resultado es: "+k;
}