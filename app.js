let bar = document.querySelector('.bar');
let sideber = document.querySelector('#sideber');
let cross = document.querySelector('.cross');


bar.addEventListener('click', ()=>{
 sideber.classList.add('active');
});
cross.addEventListener('click', function(){
    sideber.classList.remove('active');
});

sideber.addEventListener('click', function(e){
    if(e.target.classList.contains('active') == true){
        sideber.classList.remove('active');
    console.log(e .target);
}
//console.log(e.target.classList.contains(active) == true);
});