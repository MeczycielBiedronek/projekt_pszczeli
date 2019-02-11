const bee_transition = document.getElementById('bee_transition');
bee_transition.addEventListener('click', (event)=>{
    console.log('jestem tu')
    console.log(this)
    bee_transition.classList.add('bee_transition');
    setTimeout(function(){
        bee_transition.classList.remove('bee_transition');
    }, 4000);
    
})