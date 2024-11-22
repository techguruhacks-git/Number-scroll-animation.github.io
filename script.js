let display = document.querySelectorAll(".number");
let interval = 4000;

display.forEach((display) =>{
    let startVal = 0;
    let endVal = parseInt(display.getAttribute("data-val"));

    let duration = Math.floor(interval / endVal);
    let counter = setInterval(function (){
        startVal += 1;
        display.textContent = startVal;

        if(startVal == endVal){
            clearInterval(counter);
        }

    }, duration);
});

