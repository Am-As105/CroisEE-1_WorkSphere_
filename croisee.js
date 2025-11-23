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

const namecomp = document.getElementById("namecomp");
const all_inputs = document.querySelectorAll("#form [name")







const  form_addworker = document.getElementById("form-addworker");

// const role = document.getElementById("name");

const  placeAllInfo = document.getElementById("placeAllInfo");





Close.onclick = function (){
    form.style.display = "none"
    
}


let   cardunique ;


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



const input_name = document.getElementById("name");
const input_email = document.getElementById("email");
const input_phone = document.getElementById("phone");
const input_photo = document.getElementById("photo");
const input_role  = document.getElementById("role");





let workerS = [];
workerS = JSON.parse(localStorage.getItem("works")) || [] ;  
workerS.forEach(worker => createlement(worker));


function count_inputs(value){
    let  i = 0;

    while( value[i] !== undefined)
    {
        i++;
    }
    return i;
    
}
function check_number_only(input_phone){
    
    let i = 0;
    while (input_phone[i] !== undefined){
        
        if (input_phone[i] >= 0 && input_phone[i] <= 9)
            i++;
            
        else
            return 0;
    }
    return 1;  
}

function check_email(input_email){

    let i = 0;

    while (input_email[i] !== undefined){
        if (input_email[i] ===  "@")
            return 1;
        else 
            i++;
    }
    return 0;
    
}
function check_img(url){

    const regex = /\.(jpg|jpeg|png|gif|webp|bmp|svg)$/i;
    return regex.test(url);
    
}


form_addworker.onclick  = function(){

    if (count_inputs(input_name.value) < 10){
        alert("The name must be 10 char")   
    }
     
    if (check_email(input_email.value) !== 1){
        alert("email not valid exmple = amine@gmail.com");
        
    }else 
        console.log("gggg");
    if (count_inputs(input_phone.value) !== 10){
        alert("please  the number must  be 10 numbers");
        
        return;
        
    }
    if (check_number_only(input_phone.value) !== 1){
        alert(" the number ");
        return ;
        
    } 
    if (input_role.value === ""){
        alert("Please choose something");
        return;
    }
    if (check_img(input_photo.value)){
        console.log("fff");
    }
    else{
        alert("img  not valid");
        return;

    }
        
    

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
    img.src = worker.photo;
    img.style.width = "50px";
    img.style.height = "50px";
    img.style.borderRadius = "50%";
    img.style.marginRight = "10px";

    const span = document.createElement("span");
    span.textContent = worker.namecomp ; 
    
    const roleSpan = document.createElement("strong");
   

       const zone = cardunique.id; 
      const role = worker.role;

     function canAccess(role, zone) {
     if(role === "Manager")
          return true;
     if(role === "Receptionist" && zone === "Salledeconference")
         return false 
      if(role === "Receptionist" && zone === "Réception") 
        return true;
      if(role === "IT Technician" && zone === "SalleDesServeurs")
         return true;
      if(role === "IT Technician" && zone !== "SalleDesServeurs") 
        return false;
      if(role === "Security Agent" && zone === "SalledeSecuritE") 
        return true;
      if(role === "Cleaning" && zone !== "archives") 
        return true
      if(role === "Cleaning" && zone === "archives") return false;
       return true; 
    }

    
   if(!canAccess(role, zone)) {
    alert("worker not have perm");
    return; 
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

    //remove after add 
    newimployye.remove();
    copy.remove();


    cardunique.appendChild(card);

    

    
};



    


    editBtnClone.textContent = "ADD"
    editBtnClone.style.backgroundColor = "orange";

}






