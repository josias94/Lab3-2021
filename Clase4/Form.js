// window.onload(cargar);
window.addEventListener("load",function(){
    var btn= document.getElementById("impGuardar");
    btn.addEventListener("click",AgregarPersona);
});

function AgregarPersona(){
    var nombre = $("impNombre");
    var apellido = $("impApellido");

    if(nombre.value != ""){
        nombre.className = "sinError";
    }
    else{
        nombre.className = "conError";
    }

    if(apellido.value != ""){
        apellido.className = "sinError";
    }
    else{
        apellido.className = "conError";
    }

    var cuerpo = $("tbody");
    var tr = document.createElement("tr");
    var tdNombre = $_Td(nombre.value);
    var tdApellido = $_Td(apellido.value);
    var tdNombre = $_Td(nombre.value);   
    var tdAccion = $_Td("");
    //tdAccion.innerHTML = "<a href=\"#\" onclick=\"Borrar(this)\">borrar</a>";
    var a = document.createElement("a");
    a.appendChild(document.createTextNode("Borrar"));
    a.setAttribute("href","#");
    a.addEventListener("click",Borrar);
    // a.setAttribute("onclick","Borrar(this)");
    tdAccion.appendChild(a);
    tr.appendChild(tdNombre);
    tr.appendChild(tdApellido);
    tr.appendChild(tdAccion);
    cuerpo.appendChild(tr);
    
}

function $(id){
    return document.getElementById(id);
}

function Borrar(ev){
    var tr = ev.target.parentNode.parentNode;
    var body = tr.parentNode;
    body.removeChild(tr);
}