const difficultyInput = document.querySelector('#difficulty');
const btnPlay = document.querySelector('#play');


btnPlay.addEventListener('click', function(){
    let difficulty = difficultyInput.value;
    if (difficulty == 'easy') {
        gridGenerator(100);
    } else if(difficulty == 'medium') {
        gridGenerator(81);
    } else {
        gridGenerator(49);
    }
})

function gridGenerator(squaresNumber) {
    const container = document.querySelector('.container');

    container.innerHTML = '';


    for (let i = 1; i <= squaresNumber; i++) {

        // container.innerHTML = `<div> ${i} </div>`
        const square = document.createElement('div');
        square.innerHTML = i;
        container.append(square);
        
    }
}