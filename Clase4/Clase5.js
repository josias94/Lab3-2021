function PeticionGET(){
    var peticionHttp = new XMLHttpRequest();

    peticionHttp.onreadystatechange = function(){
        if(peticionHttp.readyState == 4){
            if(peticionHttp.status == 200){            
                $_Table(document.getElementById("d_tbl"), JSON.parse(peticionHttp.responseText));
            }
        }        
    }
    peticionHttp.open("GET","http://localhost:3000/personas");    
    peticionHttp.send();
}

function PeticionPOST(){
    var peticionHttp = new XMLHttpRequest();

    peticionHttp.onreadystatechange = function(){
        if(peticionHttp.readyState == 4){
            if(peticionHttp.status == 200){
                let array = peticionHttp.responseText;                            
                console.log(array);               
            }
        }        
    }
    var persona = {"nombre":"Josias","apellido":"Rivola","fecha":"2020-04-23","telefono":"1165891874"};

    peticionHttp.open("POST","http://localhost:3000/nuevaPersona");
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

