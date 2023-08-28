function Formula_1(ro_x_1, ro_y_1, v_x_1, v_y_1, t_1){
    let v_x = (parseInt(v_x_1)*parseInt(t_1));
    let v_y = (parseInt(v_y_1)*parseInt(t_1));
    let rt_x = (parseInt(ro_x_1) + v_x);
    let rt_y = (parseInt(ro_y_1) + v_y);

    document.getElementById('Formula_1').innerHTML = "r("+t_1+") = ("+ro_x_1+", "+ro_y_1+") + ("+v_x_1+", "+v_y_1+")"+t_1+
                                                     "<br><br>El resultado es: ("+rt_x+", "+rt_y+").";
}

function Formula_2(rt_x_1, rt_y_1, v_x_1, v_y_1, t_1){
    let v_x = (parseInt(v_x_1)*parseInt(t_1));
    let v_y = (parseInt(v_y_1)*parseInt(t_1));
    let rt_x = (parseInt(rt_x_1) - v_x);
    let rt_y = (parseInt(rt_y_1) - v_y);

    document.getElementById('Formula_2').innerHTML = "ro = ("+rt_x_1+", "+rt_y_1+") - ("+v_x_1+", "+v_y_1+")"+t_1+
                                                     "<br><br>El resultado es: ("+rt_x+", "+rt_y+").";
}