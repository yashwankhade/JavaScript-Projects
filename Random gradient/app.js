document.body.style.background=`linear-gradient(90deg,rgb(${num()},${num()},${num}),rgb(${num()},${num()},${num}))`
function num(){
    return (Math.floor(Math.random()*(1,266))-1);
}
document.getElementById("color").addEventListener('click',function color(){
    var a = num(),b =num(),c = num(),d= num(),e = num(),f= num();
    document.getElementById('d').value=`linear-gradient(90deg,rgb(${a},${b},${c}),rgb(${d},${e},${f}))`;
    document.body.style.background=`linear-gradient(90deg,rgb(${a},${b},${c}),rgb(${d},${e},${f}))` ;
    console.log(`linear-gradient(90deg,rgb(${a},${b},${c}),rgb(${d},${e},${f}))`)
})

document.getElementById('copy-btn').addEventListener('click',()=>{
    var a= document.getElementById('d')
    a.select();
    a.setSelectionRange(0,9999);
    document.execCommand('copy')
    alert("Copied")
})