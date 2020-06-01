var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var noButton = document.querySelector('.modal__action--negative')
var selectPlanButton = document.querySelectorAll('.plan button');

for(var i = 0; i < selectPlanButton.length; i++){
    selectPlanButton[i].addEventListener('click', function() { 
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

backdrop.addEventListener('click', closeModal);
noButton.addEventListener('click', closeModal);

function closeModal(){
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}
