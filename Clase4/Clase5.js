function PeticionGET(){
    var peticionHttp = new XMLHttpRequest();
    $("preview-area").hidden = false;
    peticionHttp.onreadystatechange = function(){
        if(peticionHttp.readyState == 4){
            if(peticionHttp.status == 200){  
                let array = JSON.parse(peticionHttp.responseText);
                let parte = array.slice(0, 15);
                $("preview-area").hidden = true;
                $_Table(document.getElementById("d_tbl"), parte);
            }
        }        
    }
    peticionHttp.open("GET","http://localhost:3000/personas");    
    peticionHttp.send();
}

function PeticionPOST(){
    var peticionHttp = new XMLHttpRequest();
    $("preview-area").hidden = false;
    peticionHttp.onreadystatechange = function(){
        if(peticionHttp.readyState == 4){
            if(peticionHttp.status == 200){
                let array = peticionHttp.responseText;                            
                console.log(array);   
                $("preview-area").hidden = true;
                
                if(JSON.parse(array).type == undefined){
                    Agregar(array);
                }
                
            }
        }        
    }
    let nombre = $("impNombre").value;
    let apellido = $("impApellido").value;
    var f = new Date();    
    let sexo = $("impSex").value;
    let fecha = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
    let telefono = $("impTel").value;

    // var persona = {"nombre":nombre,"apellido":apellido,"fecha":fecha,"telefono":telefono,"sexo":sexo};
    var persona = {"nombre":nombre,"apellido":apellido,"fecha":fecha,"sexo":sexo};

    // peticionHttp.open("POST","http://localhost:3000/nuevaPersona");
    peticionHttp.open("POST","http://localhost:3000/nueva");
    peticionHttp.setRequestHeader("content-type", "application/json");
    peticionHttp.send(JSON.stringify(persona));
}

function GetPerrito(){
    var peticionHttp = new XMLHttpRequest();

    peticionHttp.onreadystatechange = function(){
        if(peticionHttp.readyState == 4){
            if(peticionHttp.status == 200){
                let array = peticionHttp.responseText;
                let img = Create("img");
                let div = $("divPeticion");               

                let resp = JSON.parse(array);
                img.src = resp.message; 
                img.style.weight = "200px";
                img.style.height = "200px"

                div.appendChild(img);
            }
        }        
    }    
    peticionHttp.open("GET","https://dog.ceo/api/breeds/image/random");    
    peticionHttp.send();
}

