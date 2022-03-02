const difficultyInput = document.querySelector('#difficulty');
const btnPlay = document.querySelector('#play');


btnPlay.addEventListener('click', function(){
    let difficulty = difficultyInput.value;
    if (difficulty == 'easy') {

        gridGenerator(100);

        const square = document.querySelectorAll('.square');
        
        for (let index = 0; index < 100; index++) {
            square[index].classList.add('small');
            square[index].addEventListener('click', function() {
                square[index].classList.toggle('bg-change');
            })
        }
        
    } else if(difficulty == 'medium') {

        gridGenerator(81);

        const square = document.querySelectorAll('.square');
        
        for (let index = 0; index < 81; index++) {
            square[index].classList.add('medium');
            square[index].addEventListener('click', function() {
                square[index].classList.toggle('bg-change');
            })
        }

    } else {

        gridGenerator(49);

        const square = document.querySelectorAll('.square');
        
        for (let index = 0; index < 49; index++) {
            square[index].classList.add('large');
            square[index].addEventListener('click', function() {
                square[index].classList.toggle('bg-change');
            })
        }
    }
})

function gridGenerator(squaresNumber) {
    const container = document.querySelector('.container');

    container.innerHTML = '';

    for (let i = 1; i <= squaresNumber; i++) {

        const square = document.createElement('div');
        square.classList.add('square')
        square.innerHTML = i;
        container.append(square);
        
    }
}

