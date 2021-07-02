let add1 = document.getElementById("add");
let sub = document.getElementById("sub");
let reset = document.getElementById("reset");
var a =0;
add1.addEventListener("click",()=>{
    console.log("Clicked")
    a++;
    document.getElementById("demo").innerHTML=a;
    
})

sub.addEventListener("click",(event)=>{
    console.log(event.target.innerText)
    console.log("Clicked")
    a--;
    document.getElementById("demo").innerHTML=a;
   
})

reset.addEventListener("click",()=>{
    console.log("Clicked")
    a=0;
    document.getElementById("demo").innerHTML=a;
     
})

