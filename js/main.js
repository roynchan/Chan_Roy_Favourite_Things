
import { getData1,getData2 } from "./modules/dataMiner.js";

(() => {
    console.log('fired!');

    let theThings = document.querySelector('#team-section'),
        theTemplate = document.querySelector('#bio-template').content,
        lightbox = document.querySelector(".lightbox"),
        closebut = document.querySelector(".button"),
        openFootball = document.querySelector(".topicFootball"),
        openFood = document.querySelector(".topicFood"),
        openCountry = document.querySelector(".topicCountry"),
        faveData;

    function close(){
        window.location.reload();
    }
  
    function popup(){
       
            lightbox.classList.add("shown")}
     

    function buildThings(data) {


     
      
        faveData = data
        
        const things = Object.keys(data); 

        things.forEach(thing => {
    
            let panel = theTemplate;

            let containers = panel.firstElementChild.children;

              
            containers[0].querySelector('img').src = `images/${data[thing].avatar}`;
            containers[0].querySelector('img').id = thing;
           
      
            containers[1].textContent = data[thing].name,
            containers[2].textContent = data[thing].desc;

            
            

            theThings.appendChild(panel);
            

        })
    }

    
 
  function addFootball (){

    
   
    getData1(`./data.json`,buildThings);
    
  }
  function addFood (){

    getData1(`./data2.json`,buildThings);
    
  }

function addCountry (){
    getData1(`./data3.json`,buildThings)
}



  openFootball.addEventListener("click",addFootball);
    openFootball.addEventListener("click",popup);

 
    openFood.addEventListener("click",addFood);
    openFood.addEventListener("click",popup);


    openCountry.addEventListener("click",addCountry);
    openCountry.addEventListener("click",popup);
  
    
    closebut.addEventListener("click",close);

   
    
})();