function Formula_1(k_1, m_1, c_1){
    let ζ = parseFloat(c_1)/(2*Math.sqrt(parseFloat(m_1)*parseFloat(k_1)))

    document.getElementById('Formula_1').innerHTML = "ζ = "+c_1+"/2√"+m_1+"*"+k_1+"<br><br>"+
                                                     "El resultado es: "+ζ.toFixed(4);
}