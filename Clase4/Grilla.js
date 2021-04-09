window.onload=function(){
    $_Table(document.getElementById("d_tbl"));
}

function $_Table(obj)
{   
    var array = [{"Nombre":"Barrett","Apellido":"Stafford","Direccion":"Gill","DNI":"Manning","Edad":1},{"Nombre":"Tyler","Apellido":"Copeland","Direccion":"Cannon","DNI":"Hansen","Edad":89},{"Nombre":"Castro","Apellido":"Hogan","Direccion":"Carpenter","DNI":"Aguilar","Edad":9},{"Nombre":"Reid","Apellido":"Edwards","Direccion":"Fuller","DNI":"Carter","Edad":48},{"Nombre":"Byers","Apellido":"Waters","Direccion":"Bray","DNI":"Bennett","Edad":51},{"Nombre":"Huff","Apellido":"Moody","Direccion":"Puckett","DNI":"House","Edad":14},{"Nombre":"Sexton","Apellido":"Potter","Direccion":"Trevino","DNI":"Fry","Edad":83},{"Nombre":"Henderson","Apellido":"Lyons","Direccion":"Fitzgerald","DNI":"Contreras","Edad":21},{"Nombre":"Young","Apellido":"Owens","Direccion":"Tyson","DNI":"Hodge","Edad":80},{"Nombre":"Rogers","Apellido":"Hawkins","Direccion":"Wolfe","DNI":"Boyd","Edad":47},{"Nombre":"Pratt","Apellido":"Parker","Direccion":"Santiago","DNI":"Holman","Edad":70},{"Nombre":"Wagner","Apellido":"Lynn","Direccion":"Buckner","DNI":"Baxter","Edad":19},{"Nombre":"Hartman","Apellido":"Mcconnell","Direccion":"Moreno","DNI":"Vance","Edad":2},{"Nombre":"Walsh","Apellido":"Allen","Direccion":"Stokes","DNI":"Pittman","Edad":8},{"Nombre":"Kim","Apellido":"Sampson","Direccion":"Mccullough","DNI":"Schultz","Edad":1},{"Nombre":"Swanson","Apellido":"Hoover","Direccion":"Mathis","DNI":"Blankenship","Edad":63},{"Nombre":"Livingston","Apellido":"Russell","Direccion":"Cohen","DNI":"Malone","Edad":19},{"Nombre":"Norton","Apellido":"Shepherd","Direccion":"Mclaughlin","DNI":"Freeman","Edad":86},{"Nombre":"Payne","Apellido":"Church","Direccion":"Marshall","DNI":"Horton","Edad":71},{"Nombre":"Avery","Apellido":"Nieves","Direccion":"Trujillo","DNI":"Battle","Edad":48}];
    //var arraykeys = Object.keys(array[0]);    
    var arraykeys = ["Nombre", "Apellido", "Direccion", "DNI", "Edad"];//TODO: Sirve para harcorar el header
    var tabla = document.createElement("table");
    
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


function Agregar(obj){

    var form = obj.parentNode;
    var tr = document.createElement("tr");
    
    for (i = 0; i < form.length; i++) {        
        //if(aux.type != "button" && aux.type != "reset"){
        if(form[i].type == "text"){
            tr.appendChild($_Td(form[i].value));        
        }
    }
    var div = form.parentNode.parentNode.parentNode;

    var tablaFind = FindTable(form);

    var tabla = document.getElementById("d_tbl");
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

