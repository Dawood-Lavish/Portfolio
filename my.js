// alert("Are Your Sure To Use this Portfolio!")

let bood = document.querySelector("body");
let curs = document.querySelector(".curser");

bood.addEventListener("mousemove",(dets)=>{
    curs.style.left = dets.x+"px";
    curs.style.top = dets.y+"px";
})
let hidden = document.querySelector("i");

hidden.addEventListener("click" , ()=>{
 document.querySelector(".dropdown-content").style.display = "block"; 
  hidden.style.display = "none";
 document.querySelector("#close").style.display = "block";
  document.querySelector("#close").style.zIndex = "999999"; 
  falg=1;
})
       document.querySelector("#close").addEventListener("click" , ()=>{
      document.querySelector(".dropdown-content").style.display = "none"; 
       document.querySelector("#close").style.display = "none";
         hidden.style.display = "block";

    
           
} )  

document.querySelector(".dropdown-content-1").addEventListener ("click" , ()=>{
     hidden.style.display = "block";
      document.querySelector("#close").style.display = "none";
       document.querySelector(".dropdown-content").style.display = "none";


})


