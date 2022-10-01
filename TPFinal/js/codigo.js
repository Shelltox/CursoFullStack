function FunEjercicio_M4U3_N1() {

    VarDistancia = prompt('Ingrese la Distancia a Recorrer en metros', '');

    switch (true) {
        case (VarDistancia >= 0 && VarDistancia <= 1000):
            document.writeln('Le conviene recorrer la Distancia a Pie');
            break;
        case (VarDistancia > 1000 && VarDistancia <= 10000):
            document.writeln('Le conviene recorrer la Distancia a Bicicleta');
            break;
        case (VarDistancia > 10000 && VarDistancia <= 30000):
            document.writeln('Le conviene recorrer la Distancia a Colectivo');
            break;
        case (VarDistancia > 30000 && VarDistancia <= 100000):
            document.writeln('Le conviene recorrer la Distancia a Auto');
            break;
        case (VarDistancia > 100000):
            document.writeln('Le conviene recorrer la Distancia a Avion');
            break;
        default:
            document.writeln('No se admiten numeros negativos');
            break;
    }
}

function FunEjercicio_M4U3_N2() { 
    const VarNumero = [];

    for (var i=1; i<5; i++){
        VarNumero.push([prompt('Ingrese un Numero:(' + i + ' de 4)', '')]) 
    }
   
    VarNumAnterior = 0
    for (var i=1; i<5; i++){
        if (parseInt(VarNumero[i-1]) > parseInt(VarNumAnterior)){
            VarNumAnterior = VarNumero[i-1]
        }
    }

    document.writeln('El Numero Ingresado Mayor es: ' + VarNumAnterior ,'')
}


function FunEjercicio_M4U4_N1(){

}
function FunEjercicio_M4U4_N2(){

}
function FunEjercicio_M4U4_N3(){

}