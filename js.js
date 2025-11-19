const  ajoute_works = document.getElementById("addworkers");

const  form = document.getElementById("form");
const  close = document.getElementById("close");

const  form_addworke_button =  document.getElementById("form-addworke");

const  Salledeconference = document.getElementById("Salledeconference");
const container = document.getElementById("container");
const  SalleDuPersonnel = document.getElementById("SalleDuPersonnel");
const SalledeSecuritE = document.getElementById("SalledeSecuritE");
const  archives = document.getElementById("archives");
const SalleDesServeurs = document.getElementById("SalleDesServeurs");


//inputs var
const namecomp = document.getElementById("namecomp");
const all_inputs = document.querySelectorAll("input[name]")



const  form_addworker = document.getElementById("form-addworker");

// const role = document.getElementById("name");

const  placeAllInfo = document.getElementById("placeAllInfo");

 ajoute_works.onclick  =  function show_form(){
    form.style.display = "block"; 
}



let workerS = [];
form_addworker.onclick  = function(){
    
  
    
    let worker = {};

    let index = 0;


   while (index < all_inputs.length) 
    {
    const inp = all_inputs[index];  
    worker[inp.name] = inp.value;     
    index++;
    }
    worker.id = Date.now();
    
    workerS.push(worker);
    createlement();

    

    // console.log(workerS);
    


}


function   createlement()
{
    
    let newimployye = document.createElement("div");
    let img = document.createElement("img");
    let   h3title = document.createElement("h6");
    let divedit = document.createElement("div");
    let   editboto = document.createElement("a");
    img.src = "";
    editboto.href = "#"; 

    divedit.className = "bototEdit";

    
    
    newimployye.className = "infoimployees";
    
    
    newimployye.appendChild(img);

    editboto.style.backgroundColor = "green";
    editboto.style.color = "white";

    
    newimployye.appendChild(h3title);
    newimployye.appendChild(divedit);
    divedit.appendChild(editboto);
    editboto.appendChild(document.createTextNode("edit"))
    
    h3title.appendChild(document.createTextNode())
    // newimployye.appendChild(document.createTextNode(workerS[0].name))
    placeAllInfo.appendChild(newimployye);
    console.log(newimployye)
}


















