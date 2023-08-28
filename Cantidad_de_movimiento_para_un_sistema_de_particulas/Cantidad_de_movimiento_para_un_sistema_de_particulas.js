let m = [];
let v = [];
var resultado = 0;

function Formula_1(m_1, v_1){
    M(parseFloat(m_1));
    V(parseFloat(v_1));
    document.getElementById('Formula_1').innerHTML = "El resultado es: "+Multiplicar(m, v).toFixed(4);
}

function M(m_1){
    return m.push(m_1);
}

function V(v_1){
    return v.push(v_1);
}

function Multiplicar(m, v){
    for(let i = 0; i <= m.length; i++){
        return resultado = resultado + (m[i] * v[i]);
    }
}