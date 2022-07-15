const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");
const circles = document.getElementsByClassName("circle");


let currentActive = 1;
let numOfCircle = circles.length;

next.addEventListener("click",function(){
    
    if(currentActive < numOfCircle) {
        currentActive++;
        console.log(currentActive);
        updateCSS();
    }
})

prev.addEventListener("click", function(){
    if(currentActive > 1) {
        currentActive--;
        console.log(currentActive);
        updateCSS();
    }
})

function enableDisable(){
    if(currentActive === 1) {
        prev.disabled = true;
    }
    else if(currentActive === numOfCircle) {
        next.disabled = true;
    }
    else{
        prev.disabled = false;
        next.disabled = false;
    }
}

function updateCSS() {
    for(var i=0;i<numOfCircle;i++) {
        const circle = circles[i];
        if(i<currentActive){
            circle.classList.add("active");
        }
        else{
            circle.classList.remove("active");
        }
    }

    const activexyz = document.querySelectorAll(".active");
    const widthxyz = (activexyz.length - 1)/(numOfCircle - 1) * 100;
    progress.style.width = widthxyz + "%";
    enableDisable();
}