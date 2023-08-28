function value_sel(id) {
    return (document.getElementById(id)?.value);
}

function value(id) {
    return parseFloat(document.getElementById(id)?.value);
}

distancias_equivalecias = {
    'km' : {
        'km': 1,
        'mt': 1000,
        'cm': 100000
    },
    'mt' :{
        'km': 0.001,
        'mt': 1,
        'cm': 100
    },
    'cm': {
        'km': 0.00001,
        'mt': 0.01,
        'cm': 1
    }

}

tiempo_equivalecias = {
    'hr' : {
        'hr': 1,
        'sg': 3600,
        'ms': 3600000
    },
    'sg' :{
        'hr': 1/3600,
        'sg': 1,
        'ms': 1000
    },
    'ms': {
        'hr': 1/3600000,
        'sg': 0.001,
        'ms': 1
    }

}

function velocidad(dist, dist_uni, time, time_uni, res_dist_uni, res_time_uni){
    dist = value(dist)
    time = value(time)
    dist_uni = value_sel(dist_uni)
    time_uni = value_sel(time_uni)
    res_dist_uni = value_sel(res_dist_uni)
    res_time_uni = value_sel(res_time_uni)
    console.log(dist,time,dist_uni,time_uni,res_dist_uni,res_time_uni);
    let velocidad1 = dist/time
    let velocidad_f = velocidad1 * distancias_equivalecias[dist_uni][res_dist_uni] / tiempo_equivalecias[time_uni][res_time_uni]
    document.getElementById('ro').innerHTML =  "V = d " + dist_uni + " / t " + time_uni + "<br>V = " + dist + " " + dist_uni + " / " + time + " " + time_uni + "<br>V= " + velocidad1 + " " + dist_uni + " / " + time_uni + "<br><br>Conversion<br>V= " + velocidad1 + " " + dist_uni + " / " + time_uni + " * " + distancias_equivalecias[dist_uni][res_dist_uni] + " " + res_dist_uni + " / " + tiempo_equivalecias[time_uni][res_time_uni] + " " + res_time_uni + "<br>V = " + velocidad_f + " " + res_dist_uni + " / " + res_time_uni
}

function distancia(vel, vel_uni_d, vel_uni_t,  time, time_uni, res_vel_uni){
    vel = value(vel)
    time = value(time)
    vel_uni_d = value_sel(vel_uni_d)
    vel_uni_t = value_sel(vel_uni_t)
    time_uni = value_sel(time_uni)
    res_vel_uni = value_sel(res_vel_uni)
    console.log(vel, time, vel_uni_d, vel_uni_t, time_uni, res_vel_uni)
    let time_sis = time / tiempo_equivalecias[vel_uni_t][time_uni]
    let distancia1 = vel*time_sis
    let distancia_f = distancia1 * distancias_equivalecias[vel_uni_d][res_vel_uni]
    document.getElementById('ve').innerHTML =  "D = v " + vel_uni_d + " / " + vel_uni_t + " * " + " t " + time_uni + "<br>D = " + vel + " " + vel_uni_d + " / " + vel_uni_t + " * " + time + " " + time_uni + "<br>D = " + vel + " " + vel_uni_d + " / " + vel_uni_t + " * " + time + " " + time_uni + " / " + tiempo_equivalecias[vel_uni_t][time_uni]+" "+time_uni + "<br><br>conversion<br>D = " + vel + " " + vel_uni_d + " / " + vel_uni_t + " * " + time_sis + " " + vel_uni_t + "<br>D = " + distancia1 + " " + vel_uni_d + " * " + distancias_equivalecias[vel_uni_d][res_vel_uni] + " " + res_vel_uni + "<br>D = " + distancia_f + " " + res_vel_uni
}



function tiempo(vel, vel_uni_d, vel_uni_t,  dist, dist_uni, time_uni){
    vel = value(vel)
    dist = value(dist)
    vel_uni_d = value_sel(vel_uni_d)
    vel_uni_t = value_sel(vel_uni_t)
    dist_uni = value_sel(dist_uni)
    time_uni = value_sel(time_uni)
    console.log(vel, dist, vel_uni_d, vel_uni_t, dist_uni, time_uni)
    let dist_sis = dist * distancias_equivalecias[dist_uni][vel_uni_d]
    let distancia1 = dist_sis/vel
    let distancia_f = distancia1 * tiempo_equivalecias[vel_uni_t][time_uni]
    document.getElementById('tm').innerHTML =
    "T = d"+ dist_uni+ " /  v " + vel_uni_d + " / " + vel_uni_t + "<br>T = " + dist + " " + dist_uni+ " / " + vel + " " + vel_uni_d + " / " + vel_uni_t + "<br>T = " + dist + " " + dist_uni + " * " + distancias_equivalecias[dist_uni][vel_uni_d] + " " + vel_uni_d + " / " + vel + " " + vel_uni_d + " / " + vel_uni_t +"<br><br>conversion<br>T = " + dist_sis + " " + vel_uni_d + " / " + vel + " " + vel_uni_d + " / " + vel_uni_t +"<br>T = " + distancia1 + " " + vel_uni_t + " * " + tiempo_equivalecias[vel_uni_t][time_uni] + " " + time_uni +"<br>T = " + distancia_f + " " + time_uni
}