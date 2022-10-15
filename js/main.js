// imports always go at the top of the file
// this is called an IIFE (immediately invoked function expression)
import { getData1,getData2 } from "./modules/dataMiner.js";

// it's a pretty common JavaScript programming pattern
// also called a module file
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
        // get all the keys (names) from the data object and use that to iterate through the data
      //debugger;

     
      
        faveData = data
        
        const things = Object.keys(data); // Object.keys creates an array

        things.forEach(thing => {
            // copy the template's contents
            let panel = theTemplate;

            // get a reference to the template's elements
            let containers = panel.firstElementChild.children;

            // grab the image from the object and set it as the source 
           
            containers[0].querySelector('img').src = `images/${data[thing].avatar}`;
            containers[0].querySelector('img').id = thing;
            containers[0].querySelector('img').addEventListener('click',showThing);
           
      
            containers[1].textContent = data[thing].name,
            containers[2].textContent = data[thing].desc;

            
            

            theThings.appendChild(panel);
            

        })
    }

    function showThing() {

        
        let currentThing = faveData[this.id];
       
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