
const peticionHTTP = new XMLHttpRequest();
window.addEventListener('load', function(){
    ejecutarGet();
    var botonAlta = ById("btnGuardar");
    botonAlta.addEventListener('click',Alta);
});

 

function ejecutarGet(){
        
    peticionHTTP.onreadystatechange= function(){
        if(peticionHTTP.readyState== 4 && peticionHTTP.status== 200){
            let arrayJson = JSON.parse(peticionHTTP.responseText);
            CrearTabla(arrayJson);
           
         }
     }
     peticionHTTP.open("GET","http://localhost:3000/personas",true);
     peticionHTTP.send();
  
    }

    function CrearTabla(array){
        
        let tabla = document.createElement("table");
        tabla.id = "tablaPersona";
        let div = document.getElementById("divTabla");
        div.appendChild(tabla);
        CrearThead(array);
        CrearTbody(array);
        tabla.setAttribute("border","1");
        tabla.className = "tabla";

        
    }

    function CrearTbody(array){
        let tbody = document.createElement("tbody");
        array.forEach(objeto => {
            let tr= document.createElement("tr");
            var keys = Object.keys(objeto);

            keys.forEach(element => {
                let td= document.createElement("td");
                td.innerHTML = objeto[element];
                tr.appendChild(td);
            });
            
            tbody.appendChild(tr);
        });
        let tabla = document.getElementById("tablaPersona");
        tabla.appendChild(tbody);
    }

    function CrearThead(array){

        let thead = document.createElement("thead");
        var keys = Object.keys(array[0]);
        keys.forEach(element => {
            let th = document.createElement("th");
            th.innerHTML = element;
            thead.appendChild(th);
            
        });
        let tabla = document.getElementById("tablaPersona");
        tabla.appendChild(thead);

    }


function Alta(){
    // 1- tomar los datos que viene en el input
    // 2 crear el tr con los td correspondientes
    // 3- agregar el tr como hijo del tbody que ya existe
    
    let id="26";
    let nombre = ById("txtNombre").value;
    let apellido = ById("txtApellido").value;
    let fecha = "12";
    let sexo = "f";
    let tr = Create("tr");
    let tdNombre = Create("td");
    let tdApellido = Create("td");
    let tdFecha = Create("td");
    let tdSexo= Create("td");
    let tdId= Create("td");

    tdNombre.innerHTML = nombre;
    tdApellido.innerHTML = apellido;
    tdFecha.innerHTML = fecha;
    tdSexo.innerHTML = sexo;
    tdId.innerHTML = id;

    tr.appendChild(tdNombre);
    tr.appendChild(tdApellido);
    tr.appendChild(tdFecha);
    tr.appendChild(tdSexo);
    tr.appendChild(tdId);

    

 
}

function id(){
    let tbody = document.getElementById("tBodyPersona");
    let len = tbody.childNodes.length;
    if(len > 0)
    {
        let tr = tbody.childNodes[len-1];
        let oldId = tr.id.substring(1)
        return  oldId+ 1;    
    }
    return 0;
}

function ById(obj){
    return document.getElementById(obj);
}

function Create(obj){
    return document.createElement(obj);
}

    