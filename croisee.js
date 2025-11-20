const  ajoute_works = document.getElementById("addworkers");

const  form = document.getElementById("form");
const  Close = document.getElementById("close");

const  form_addworke_button =  document.getElementById("form-addworke");

const  Salledeconference = document.getElementById("Salledeconference");
const container = document.getElementById("container");
const  SalleDuPersonnel = document.getElementById("SalleDuPersonnel");
const SalledeSecuritE = document.getElementById("SalledeSecuritE");
const  archives = document.getElementById("archives");
const SalleDesServeurs = document.getElementById("SalleDesServeurs");


const  employeeName = document.getElementById("employeeName");
const  employeeEmail= document.getElementById("employeeEmail");
const  employeePhone = document.getElementById("employeePhone");
const  employeeZone = document.getElementById("employeeZone");

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


function createlement(worker) { 



    
    let newimployye = document.createElement("div");
    let img = document.createElement("img");
    let h3title = document.createElement("h5");
    let divedit = document.createElement("div");
    let editboto = document.createElement("a");

    img.src = worker.photo || "https://www.bing.com/images/search?view=detailV2&ccid=i%2F1HL4I1&id=36293A16CA5963514E1D4AC288D98B55CC1135F0&thid=OIP.i_1HL4I1H9SznR11omKPFwHaHo&mediaurl=https%3A%2F%2Fcanto-wp-media.s3.amazonaws.com%2Fapp%2Fuploads%2F2019%2F08%2F19194138%2Fimage-url-3.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.8bfd472f82351fd4b39d1d75a2628f17%3Frik%3D8DURzFWL2YjCSg%26pid%3DImgRaw%26r%3D0&exph=824&expw=800&q=url+img&FORM=IRPRST&ck=D83B0DEB3D6E8839583550834CB38EAD&selectedIndex=0&itb=0&cw=564&ch=701&ajaxhist=0&ajaxserp=0"; 
    h3title.textContent = worker.namecomp;

    editboto.href = "#"; 

    editboto.textContent = "edit";

    editboto.style.backgroundColor = "green";
    editboto.style.color = "white";

    newimployye.className = "infoimployees"; 
    divedit.className = "bototEdit"; 

    
    editboto.setAttribute("data-id",worker.id);

   
    

    img.onclick = function (){
        
        cardInfo.style.display = "block";
        employeeName.textContent = worker.namecomp;
       employeeEmail.textContent = worker.email;
       employeePhone.textContent = worker.phone;
       employeeZone.textContent = worker.role
    }
    


   const cardInfo  = document.getElementById("cardInfo");
    const closeCardInfo  = document.getElementById("closeCardInfo");
   

    
    editboto.onclick = function()
    {

       cardInfo.style.display = "block";
       
       
       
        
    }
    closeCardInfo.onclick = function (){
        cardInfo.style.display = "none"
        
    }
    

    newimployye.appendChild(img);
    newimployye.appendChild(h3title);
    newimployye.appendChild(divedit);
    divedit.appendChild(editboto);

    placeAllInfo.appendChild(newimployye);
}



















