
var spanErrorNombre = document.getElementById('errorNombre');
        
function agregarProyecto() {
    class proyecto {
        constructor(codigo, nombre, tipo, fecha_ini, fecha_fin, responsable, presupuesto,
            tipo_persona, tipo_profesor, semestre) {
            this.codigo = codigo;
            this.nombre = nombre;
            this.tipo = tipo;
            this.fecha_ini = fecha_ini;
            this.fecha_fin = fecha_fin;
            this.responsable = responsable;
            this.presupuesto = presupuesto;
            this.tipo_persona = tipo_persona;
            this.tipo_profesor = tipo_profesor;
            this.semestre = semestre;

        }
    }

     var codigocaptura = document.getElementById("codigo").value;
     var nombrecaptura = document.getElementById("nombre").value;
     var tipocaptura = document.getElementById("tipo").value;
     var fecha_inicaptura = document.getElementById("fecha_ini").value;
     var fecha_fincaptura = document.getElementById("fecha_fin").value;
     var responsablecaptura = document.getElementById("responsable").value;
     var presupuestocaptura = document.getElementById("presupuesto").value;
     var tipo_personacaptura = document.getElementById("tipo_persona").value;
    var tipo_profesorcaptura = document.getElementById("tipo_profesor").value;
    var semestrecaptura = document.getElementById("semestre").value;
    
    

     nuevoproyecto = new proyecto (codigocaptura, nombrecaptura, tipocaptura, fecha_inicaptura, fecha_fincaptura, responsablecaptura,
    presupuestocaptura,tipo_personacaptura, tipo_profesorcaptura, semestrecaptura);

    console.log(nuevoproyecto);
    agregar();



    if(fecha_fin.value < fecha_ini.value){
        alert("las fechas estan erroneas")
        fecha_fin.focus();
        return false;
    }
    if(fecha_ini.value >= 01-01-2022){
        alert("la fecha inicial no puede ser menor a 01-01-2022")
        fecha_ini.focus();
        return false;
    }
    if(presupuesto.value >= 10000000 && presupuesto <= 50000000){
        alert("ingrese un presupuesto en el rango de (10'000.00 a 50'.000.000")
        presupuesto.focus();
        return false;
    }

    if(fecha_fin.value > 01-01-2022 && fecha_fin.value > 31-12-2022){
        alert("las fechas no pueden ser menores a 01-01-2022 y no mayores a 31-12-2022")
        fecha_fin.focus();
        return false;
    }
    if(codigo.value == null || codigo.value == " "){
        alert("campo obligatorio 'codigo'");
        codigo.focus();
        return false;
    } else if(nombre.value == null || nombre.value == " "){
        alert("campo obligatorio 'nombre'");
        nombre.focus();
        return false;
    } else if(tipo.value == null || tipo.value == " "){
        alert("campo obligatorio 'tipo'");
        tipo.focus();
        return false;
    } else if(fecha_ini.value == null || fecha_ini.value == " "){
        alert("campo obligatorio 'fecha de iniciacion'");
        fecha_ini.focus();
        return false;
    } else if(fecha_fin.value == null || fecha_fin.value == " "){
        alert("campo obligatorio 'fecha finalizacion'");
        fecha_fin.focus();
        return false;
    } else if(responsable.value == null || responsable.value == " "){
        alert("campo obligatorio 'responsable'");
        responsable.focus();
        return false;
    } else if(presupuesto.value == null || presupuesto.value == " "){
        alert("campo obligatorio 'presupuesto'");
        presupuesto.focus();
        return false;
    
    } else if(tipo_profesor.value == null || tipo_profesor.value == " "){
        alert("campo obligatorio 'tipo profesor'");
        tipo_profesor.focus();
        return false;
    } else if(semestre.value == null || semestre.value == " "){
        alert("campo obligatorio 'semestre'");
        semestre.focus();
        return false;
    } 

    

}





var base = [];
function agregar(){
    base.push(nuevoproyecto);
    console.log(base);
    document.getElementById("tabladatos").innerHTML += '<tbody><td>'+nuevoproyecto.nombre+'</td><td>'+nuevoproyecto.responsable+'</td><td>'+nuevoproyecto.fecha_ini+'</td><td>'+nuevoproyecto.fecha_fin+'</td><td>'+nuevoproyecto.days+'</td></tbody>'
}

var btn = document.getElementById("btnAgregar")
btn.addEventListener('click', agregarProyecto)