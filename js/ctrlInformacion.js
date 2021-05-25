"use strict";
var form = document.getElementById("form");
var forma = document.getElementById("forma"),
    sBoleta = document.getElementById("sBoleta"),
    sNombre = document.getElementById("sNombre"),
    sGrupo = document.getElementById("sGrupo"),
    sMateria = document.getElementById("sMateria"),
    sFecha = document.getElementById("sFecha");
    
form.onclick = function(){
    var boleta = forma["boleta"].value;
    var nombre = forma["nombre"].value;
    var grupo = forma["grupo"].value;
    var materia = forma["materia"].value;
    var fecha = forma["fecha"].value;
    sBoleta.value ="Boleta:"+boleta;  
    sNombre.value ="Nombre:"+nombre;  
    sGrupo.value ="Grupo:"+grupo; 
    sMateria.value ="Materia:"+materia;  
    sFecha.value ="Fecha:"+fecha;  
