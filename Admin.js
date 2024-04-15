let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("dat-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function() {
        startValue+=1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    },duration);
});

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index+1)%slides.length;
    slides[index].classList.add('active');
}
function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length)%slides.length;
    slides[index].classList.add('active');
}