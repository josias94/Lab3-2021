window.onload=function(){
    $_Table(document.getElementById("d_tbl"));
    let btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", Agregar);
}

function $_Table(obj)
{   
    let array = [{"Nombre":"Roach","Apellido":"Acosta","Direccion":"Eastern Parkway","DNI":18653032,"Edad":58},{"Nombre":"Combs","Apellido":"Jessica","Direccion":"Butler Street","DNI":14107678,"Edad":15},{"Nombre":"Morton","Apellido":"Lester","Direccion":"Falmouth Street","DNI":18529534,"Edad":86},{"Nombre":"Best","Apellido":"Tessa","Direccion":"Elliott Place","DNI":26863283,"Edad":72},{"Nombre":"Wiggins","Apellido":"Avis","Direccion":"Garden Place","DNI":14835965,"Edad":34},{"Nombre":"Armstrong","Apellido":"Marla","Direccion":"Anchorage Place","DNI":32522878,"Edad":61},{"Nombre":"Ramsey","Apellido":"Delgado","Direccion":"Crown Street","DNI":18196722,"Edad":55},{"Nombre":"Wade","Apellido":"Odessa","Direccion":"Highland Boulevard","DNI":31441371,"Edad":59},{"Nombre":"Walker","Apellido":"Maryann","Direccion":"Fulton Street","DNI":6319193,"Edad":62},{"Nombre":"Russo","Apellido":"Gail","Direccion":"Cherry Street","DNI":1548932,"Edad":47}];
    let arraykeys = Object.keys(array[0]);    
    //var arraykeys = ["Nombre", "Apellido", "Direccion", "DNI", "Edad"];//TODO: Sirve para harcorar el header
    let tabla = document.createElement("table");
    SetId(tabla, obj.id);
    if(array.length == 0){
        tabla.hidden = true;
    }
    tabla.appendChild($_Thead(arraykeys));
    tabla.appendChild($_Tbody(array));
    //tabla.appendChild($_Tfoot(array));//TODO: Josias Esto esta incompleto y harcodeado    
    tabla.border=1;
     
    obj.appendChild(tabla);
}

function $_Thead(arraykeys){
    var thead = document.createElement("thead");
    for(i = 0; i< arraykeys.length; i++)
    {
        var th = document.createElement("th"); 
        th.appendChild(document.createTextNode(arraykeys[i]));
        thead.appendChild(th);
    }    
    return thead;
}

function $_Tbody(array){
    var tbody = document.createElement("tbody");
    //var arraykeys = Object.keys(array[0]);//TODO: Va a tomar de estructura para todos los objetos los datos que tenga el primero, si otro elemento trae un dato mas no lo muestra
    for(i = 0; i< array.length; i++)
    {
        var arraykeys = Object.keys(array[i]);//TODO: Revisar muestra las propiedades aunque los objetos tengan distinta estructura, mas completo - menos performante 
        var tr = document.createElement("tr");
        arraykeys.forEach(element => {
            tr.appendChild($_Td(array[i][element]));
        });        
        tbody.appendChild(tr);
    }   
    return tbody;
}

function $_Td(value){
    var td = document.createElement("td");
    td.appendChild(document.createTextNode(value));
    return td;
}

function $_Tfoot(array){
    var arraykeys = Object.keys(array[0]);
    var tFoot = document.createElement("tfoot");
    var tr = document.createElement("tr");

    var td = document.createElement("td");
    td.appendChild(document.createTextNode("Total de personas:"));
    td.colSpan = arraykeys.length-1;
    tr.appendChild(td);

    var td2 = document.createElement("td");
    td2.appendChild(document.createTextNode(array.length));
    tr.appendChild(td2);
     
    tFoot.appendChild(tr);
    return tFoot;
}

function SetId(obj, parentId, i){
    obj.id = parentId + "_" + obj.nodeName.toLowerCase();
    if(i != undefined)
    obj.id += "_" + i;
}


function Agregar(){        
    var form = event.target.parentNode;
    var tr = document.createElement("tr");
    
    for (i = 0; i < form.length; i++) {        
        //if(aux.type != "button" && aux.type != "reset"){
        if(form[i].type == "text"){
            tr.appendChild($_Td(form[i].value));        
        }
    }
    var div = form.parentNode.parentNode.parentNode;

    //var tablaFind = FindTable(form);

    var tabla = document.getElementById("d_tbl_table");
    tabla.hidden = false;

    var body = "";
    tabla.childNodes.forEach(element => {        
        if(element.localName == "tbody"){
            body = element;
        }
    });

    body.appendChild(tr);
}

function FindTable(parentNode){
    var retorno = null;
    var obj = parentNode;
    obj.childNodes.forEach(element => {
        if(element.localName == "table"){
            retorno = element;
        }        
    });
    if(retorno == null){
        return FindTable(parentNode.parentNode);
    }
    else{
        return retorno;
    }
    
}

