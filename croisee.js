const  ajoute_works = document.getElementById("addworkers");

const  form = document.getElementById("form");
const  Close = document.getElementById("close");

const  form_addworke_button =  document.getElementById("form-addworke");

const  Salledeconference = document.getElementById("Salledeconference");
const container = document.getElementById("contai");
const  SalleDuPersonnel = document.getElementById("SalleDuPersonnel");
const SalledeSecuritE = document.getElementById("SalledeSecuritE");
const  archives = document.getElementById("archives");
const SalleDesServeurs = document.getElementById("SalleDesServeurs");

const  employeeName = document.getElementById("employeeName");
const  employeeEmail= document.getElementById("employeeEmail");
const  employeePhone = document.getElementById("employeePhone");
const  employeeZone = document.getElementById("employeeZone");
const  employeeRole = document.getElementById("employeeRole");



const  closecard = document.getElementById("closecardcards");
const ALLcard = document.getElementById("cardAll");

const botoadd = document.getElementById("botoadd")
const botoadd2 = document.getElementById("botoadd2")
const botoadd3 = document.getElementById("botoadd3")
const botoadd4 = document.getElementById("botoadd4")
const botoadd5 = document.getElementById("botoadd5")
const botoadd6 = document.getElementById("botoadd6")
//inputs var
const namecomp = document.getElementById("namecomp");
const all_inputs = document.querySelectorAll("#form [name")



const  form_addworker = document.getElementById("form-addworker");

// const role = document.getElementById("name");

const  placeAllInfo = document.getElementById("placeAllInfo");




// const  archives = document.getElementById("archives");
let   cardunique ;
// const container = document.getElementById("container");

closecard.onclick = function () {
    ALLcard.style.display = "none";
    
}
 ajoute_works.onclick  =  function show_form(){
    form.style.display = "block"; 
    
}



botoadd.onclick = function (){ALLcard.style.display = "block"

    cardunique =  Salledeconference;
    
    
}
botoadd2.onclick = function ()
{
    ALLcard.style.display = "block"
    cardunique = container;

}
botoadd3.onclick = function ()
{
    ALLcard.style.display = "block";
    cardunique = SalleDuPersonnel;
}
botoadd4.onclick = function ()
{
    ALLcard.style.display = "block";
    cardunique = SalledeSecuritE;
    
}
botoadd5.onclick = function ()
{
    ALLcard.style.display = "block";
    cardunique = SalleDesServeurs;
}
botoadd6.onclick = function ()
{
    
    ALLcard.style.display = "block"
    cardunique = archives;
}



 

let workerS = [];
workerS = JSON.parse(localStorage.getItem("works")) || []; ;  

workerS.forEach(worker => createlement(worker));

// console.log(JSON.parse(localStorage.getItem("works")));
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


    localStorage.setItem("works", JSON.stringify(workerS));
    createlement(worker);

    

    // console.log(workerS);
    


}


function createlement(worker){ 

    
    
    
    let newimployye = document.createElement("div");
    let img = document.createElement("img");
    let h3title = document.createElement("h5");
    let divedit = document.createElement("div");
    let editboto = document.createElement("button");
    editboto.className = "editboto";
    h3title.className = "h5";
    
    img.src = worker.photo || "https://tse3.mm.bing.net/th/id/OIP.7wm4zT59Oep7kXxMC_HgLgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3";
    h3title.textContent = worker.namecomp;


    editboto.textContent = "edit";

    // editboto.style.backgroundColor = "";
    editboto.style.color = "white";

    newimployye.className = "infoimployees"; 
    divedit.className = "bototEdit"; 

    
    editboto.setAttribute("data-id",worker.id);

   
    

    img.onclick = function ()
    {
        const imcard = document.getElementById("imgcard")
        
        
        cardInfo.style.display = "block";
        employeeName.textContent = worker.namecomp;
        employeeEmail.textContent = worker.email;
        employeePhone.textContent = worker.phone;
        employeeRole.textContent = worker.role;
       
       console.log(worker);
    }
    


   const cardInfo  = document.getElementById("cardInfo");
    const closeCardInfo  = document.getElementById("closeCardInfo");
   

    
    editboto.onclick = function()
    {
        
       cardInfo.style.display = "block";    
        
    }
    closeCardInfo.onclick = function()
    {
        cardInfo.style.display = "none"
        
    }
    

    newimployye.appendChild(img);
    newimployye.appendChild(h3title);
    newimployye.appendChild(divedit);
    divedit.appendChild(editboto);

    
    
    const copy = newimployye.cloneNode(true);
   
    

    placeAllInfo.appendChild(newimployye);
    
    
    
    

    

    ALLcard.appendChild(copy); 
    const editH5  = copy.querySelector(".h5");
    const editBtnClone = copy.querySelector(".editboto");

     //   const buttons = document.querySelectorAll(".editBtn");

  
    //    const btn = document.getElementById("botoadd4");
editBtnClone.onclick = function () {
    const card = document.createElement("div");
    card.className = "employee-card";
    card.style.display = "flex";
    card.style.alignItems = "center";

    card.style.padding = "10px";
    card.style.border = "1px solid #ccc";
    card.style.borderRadius = "10px";
    card.style.marginBottom = "5px";

    const img = document.createElement("img");
    img.src = worker.photo || "https://mobingasht.ir/Content/Website/img/1.jpg";
    img.style.width = "50px";
    img.style.height = "50px";
    img.style.borderRadius = "50%";
    img.style.marginRight = "10px";

    const span = document.createElement("span");
    span.textContent = worker.namecomp + " - ";

    const roleSpan = document.createElement("strong");
    const role = worker.role;

    if (role === "Manager") {
        roleSpan.textContent = "Full Access";
        roleSpan.style.color = "green";
    } else if (role === "IT Technician") {
        roleSpan.textContent = "Limited Access";
        roleSpan.style.color = "orange";
    } else if (role === "Receptionist") {
        roleSpan.textContent = "View Only";
        roleSpan.style.color = "blue";
    } else if (role === "Security Agent") {
        roleSpan.textContent = "Security Access";
        roleSpan.style.color = "purple";
    } else if (role === "Cleaning"){
        roleSpan.textContent = "Cleaning Staff";
        roleSpan.style.color = "gray";
    } else {
        roleSpan.textContent = "No Role Assigned";
        roleSpan.style.color = "red";
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delet"; 
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "auto";
    
    deleteBtn.onclick = () => card.remove();
        
    

    card.appendChild(img); 
    card.appendChild(span);
    card.appendChild(roleSpan);
    card.appendChild(deleteBtn); 

    cardunique.appendChild(card);
};



    


    editBtnClone.textContent = "ADD"
    editBtnClone.style.backgroundColor = "orange";

}























