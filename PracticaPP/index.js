window.addEventListener("load",function(){
    var btn = $("btnCargarH");
    btn.addEventListener("click",AltaPersona);
    PeticionGET();
    
});


function PeticionGET(){
    var peticionHttp = new XMLHttpRequest();
    
    peticionHttp.onreadystatechange = function(){
        if(peticionHttp.readyState == 4){
            if(peticionHttp.status == 200){  
                let array = JSON.parse(peticionHttp.responseText);
                CrearTabla(array);                
            }
        }
    }
    peticionHttp.open("GET","http://localhost:3000/personas");    
    peticionHttp.send();
}

function CrearTabla(array) {
    var div = $("Divtabla");
    var table = Create("table");
    div.appendChild(table);


    array.forEach(element => {
        
    var tdNombre = Create("td");
    var nombre = CreateText(element.nombre);
    tdNombre.appendChild(nombre);

    var tdApellido = Create("td");
    var Ape = CreateText(element.apellido);
    tdApellido.appendChild(Ape);

    var tdFecha = Create("td");
    var fecha = CreateText(element.fecha);
    tdFecha.appendChild(fecha);

    var tdSex = Create("td");
    var sexo = CreateText(element.sexo);
    tdSex.appendChild(sexo);

    var tr = Create("tr");

    tr.addEventListener("click", TraerTr);
    tr.appendChild(tdNombre);
    tr.appendChild(tdApellido);
    tr.appendChild(tdFecha);
    tr.appendChild(tdSex);

    table.appendChild(tr);
    table.id = "tablaPersonas";
    table.setAttribute("border", "1");
    });   
}

function TraerTr(e){
    var tr = e.target.parentNode;

    var impNom = Create("input");
    var tdNombre = tr.childNodes[0];
    impNom.id = "impNom";
    impNom.value = tdNombre.innerHTML;

    var impApe = Create("input");
    var tdApe = tr.childNodes[1];    
    impApe.value = tdApe.innerHTML;
    impApe.id = "impApe";

    var impFec = Create("input");
    var tdFec = tr.childNodes[2];    
    impFec.value = tdFec.innerHTML;

    var impSex = Create("input");
    var tdSex = tr.childNodes[3];    
    impSex.value = tdSex.innerHTML;

    var impBoton = Create("input");
    impBoton.setAttribute("type", "button");
    impBoton.value = "Modificar";
    impBoton.setAttribute("i", tr.rowIndex);
    impBoton.addEventListener("click", Editar);

    var div = $("datos");
    div.appendChild(impNom);
    div.appendChild(impApe);
    div.appendChild(impFec);
    div.appendChild(impSex);
    div.appendChild(impBoton);
}

function Editar(e){
    var nombreActualizado = $("impNom").value;
    var apellidoActualizado = $("impApe").value;

    var btn = e.target;
    var i = btn.attributes.i.value;
    var tabla = $("tablaPersonas");

    tabla.childNodes.forEach(tr => {
        if(tr.rowIndex == i){
            var tdNombre = tr.childNodes[0];
            var tdApe = tr.childNodes[1];            
            tdNombre.innerHTML = nombreActualizado;
            tdApe.innerHTML = apellidoActualizado;
            return;
        }
    });

    var div = btn.parentNode;
    var body = div.parentNode;
    body.removeChild(div);

    var divNew = Create("div");
    divNew.id = "datos";
    body.appendChild(divNew);
    
   



}

function AltaPersona(){    
    var persona = {'nombre':'milanesa', 'apellido':'aaa', 'fecha':'asdasd', 'sexo':                  'nada'};

    var tabla = $("tablaPersonas");

    var tdNombre = Create("td");
    var nombre = CreateText(persona.nombre);
    tdNombre.appendChild(nombre);

    var tdApellido = Create("td");
    var Ape = CreateText(persona.apellido);
    tdApellido.appendChild(Ape);

    var tdFecha = Create("td");
    var fecha = CreateText(persona.fecha);
    tdFecha.appendChild(fecha);

    var tdSex = Create("td");
    var sexo = CreateText(persona.sexo);
    tdSex.appendChild(sexo);

    var tr = Create("tr");
    tr.appendChild(tdNombre);
    tr.appendChild(tdApellido);
    tr.appendChild(tdFecha);
    tr.appendChild(tdSex);

    tabla.appendChild(tr);

}


function $(id){
    return document.getElementById(id);
}

function Create(element){
    return document.createElement(element);
}

function CreateText(text){
    return document.createTextNode(text);
}