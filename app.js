const bee = document.getElementById('bee');
const paint = document.getElementById('paint');
const brush = document.getElementById('brush');
const paintText = document.getElementById('paintText');
bee.addEventListener('click', (event)=>{
    bee.classList.add('bee_transition');
    setTimeout(function(){
        bee.classList.remove('bee_transition');
    }, 2000);
    setTimeout(function(){
        paint.classList.add('paint_transition');
    }, 1000);
    setTimeout(function(){
        brush.classList.add('brush_transition');
    }, 1000);    
})
const blackCircle = document.getElementById('blackCircle');
const redCircle = document.getElementById('redCircle');
const blackTriger = document.getElementById('blackTriger');
const redTriger = document.getElementById('redTriger');

let colorCount = 1;
blackTriger.addEventListener('click', ()=>{
    colorCount++;
    blackCircle.style.zIndex= colorCount;
    blackCircle.classList.add('black_transition');
    setTimeout(function(){
    redCircle.classList.remove('red_transition');
    }, 1000);
});
redTriger.addEventListener('click', ()=>{
    colorCount++;
    redCircle.style.zIndex= colorCount;
    redCircle.classList.add('red_transition');
    setTimeout(function(){
        blackCircle.classList.remove('black_transition');
    }, 1000);
    

});