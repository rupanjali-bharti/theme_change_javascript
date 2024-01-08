let btn=document.querySelector("#btn");
let mode="light";

btn.addEventListener("click",()=>{
    
    if(mode==="light"){
        mode="dark";
        document.querySelector("body").style.backgroundColor= "black";
        document.querySelector("body").style.color= "white";
        document.querySelector("#btn").style.backgroundColor= "white";
        document.querySelector("#btn").style.color= "black";
    }else{
        mode="light"; 
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").style.color= "black";
        document.querySelector("#btn").style.backgroundColor= "black";
        document.querySelector("#btn").style.color= "white";
        /*function demo(){
            const button=document.getElementById("btn").innerHTML="LIGHT MODE";
        }*/
    }
    console.log(mode);
});


