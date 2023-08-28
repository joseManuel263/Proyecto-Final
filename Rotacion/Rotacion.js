function Formula_1(θo_1, w_1, t_1){
    let θt_1 = (parseInt(θo_1)) + (parseInt(w_1) * parseInt(t_1))
    console.log(θo_1, w_1, t_1, θt_1);
    document.getElementById('Formula_1').innerHTML = "θ("+t_1+") = "+θo_1+"° + ("+w_1+" rad/s * "+t_1+" s) <br>"+ 
                                                     "θ("+t_1+") = "+θo_1+"° + ("+parseInt(w_1) * parseInt(t_1)+")<br>"+
                                                     "θ("+t_1+") = "+θt_1+" rad<br><br>"+
                                                     "El resultado es: "+θt_1*(180/3.14159)+" grados";
}