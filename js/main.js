// imports always go at the top of the file
// this is called an IIFE (immediately invoked function expression)
import { getData } from "./modules/dataMiner.js";

// it's a pretty common JavaScript programming pattern
// also called a module file
(() => {
    console.log('fired!');

    let theThings = document.querySelector('#team-section'),
        theTemplate = document.querySelector('#bio-template').content,
        lightbox = document.querySelector(".lightbox"),
        openclick = document.querySelectorAll(".topic"),
        faveData;

       
  
    function popup(){
       
            lightbox.classList.toggle("shown")}
     

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
            containers[2].textContent = data[thing].role;
           

            theThings.appendChild(panel);
        })
    }

    function showThing() {
        
        let currentThing = faveData[this.id];
    }
    
    getData(`./data.json`, buildThings);
    openclick.forEach(addEventListener("click",popup));
   
    
})();