function Formula_1(k_1, m_1){
    let fₒ = (1/(2*Math.PI)) * (Math.sqrt(parseFloat(k_1)/parseFloat(m_1)));

    document.getElementById('Formula_1').innerHTML = "fₒ = 1/2π √"+k_1+"/"+m_1+"<br><br>"+
                                                     "El resultado es: "+fₒ.toFixed(4);
}