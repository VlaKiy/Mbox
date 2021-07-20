let popUp = document.querySelector('.pop-up_cont');
let exit = document.querySelector('.pop-up_cont_pop_exit_cont_exit');

function pop_up() {
    popUp.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

exit.addEventListener('click', function(){
    popUp.style.display = 'none';
    document.body.style.overflow = 'auto';
});

popUp.addEventListener('click', function(){
    popUp.style.display = 'none';
    document.body.style.overflow = 'auto';
    
});