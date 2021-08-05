let bg = document.querySelector('.bg');
let percent = document.querySelector('.loading-text');
let load=0;

let loading = setInterval(setPercent,30);

function setPercent(){
    load++;
    if(load>99){
        clearInterval(loading);
    }
percent.innerText = `${load}%`;
percent.style.opacity=scale(load,0,100,1,0);
bg.style.filter = `blur(${scale(load, 0, 100, 30,0)}px)`;

}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}