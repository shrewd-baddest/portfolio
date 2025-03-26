 
const menuicon = document.getElementById("menu_icon");
const navbar = document.getElementById("navbar");
  let parentelem=navbar.closest('.header')

  
   let isElementCreated = false;
     window.addEventListener("resize",()=>{
    
         const screenWidth = window.screen.width; // Total screen width
         const currentWidth = window.innerWidth;
 if(currentWidth<=screenWidth * 0.4 && !isElementCreated) {
         menuicon.classList.remove("menu_icon");
         navbar.style.display= "none";
        menuicon.addEventListener('click',()=>{
                
 if( navbar.style.display==="none"){
    navbar.style.display= "grid";
    parentelem.classList.remove('header')
    navbar.classList.replace('navbar','cool');

 }
 else{
        navbar.style.display= "none";    
 }
 
})
 isElementCreated =true;
 }
         else if(currentWidth > screenWidth * 0.4 && isElementCreated){
             // results.textContent="screenWidth";
                    //  const element=document.getElementById("dope");

                    navbar.style.display= "grid";
                    menuicon.classList.add("menu_icon");


if(navbar .classList.contains("cool")){
       parentelem.classList.add('header')
 navbar.classList.replace("cool","navbar");
}

 
 

isElementCreated = false;

         }})

 
