const difficultyInput = document.querySelector('#difficulty');
const btnPlay = document.querySelector('#play');


btnPlay.addEventListener('click', function(){
    let difficulty = difficultyInput.value;
    if (difficulty == 'easy') {

        gridGenerator(100);

        const square = document.querySelectorAll('.square');
        

        // for (let index = 0; index < 100; index++) {
        //     square[index].classList.add('small');
        // }
        square.forEach(square => square.classList.add('small'));

        bombAssignment(bombGeneration(square.length -1));
        
    } else if(difficulty == 'medium') {

        gridGenerator(81);

        const square = document.querySelectorAll('.square');
        
        // for (let index = 0; index < 81; index++) {
        //     square[index].classList.add('medium');
        // }
        square.forEach(square => square.classList.add('medium'));

        bombAssignment(bombGeneration(square.length - 1));

    } else {

        gridGenerator(49);

        const square = document.querySelectorAll('.square');
        
        // for (let index = 0; index < 49; index++) {
        //     square[index].classList.add('large');
        // }
        square.forEach(square => square.classList.add('large'));

        bombAssignment(bombGeneration(square.length - 1));
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
        square.addEventListener('click', squareSelection);
    }
}

function squareSelection() {
    if(this.classList.contains('bomb')) {
        this.classList.add('bg-change-bomb');
    }else {
        this.classList.add('bg-change-safe');
    }
}

function bombAssignment(bombList) {
    const square = document.querySelectorAll('.square');
    for (let i = 0; i < bombList.length; i++) {
        square[bombList[i]].classList.add('bomb')    
    }
}

function bombGeneration(squaresNumber) {
    const arrBombList = [];
    for (i = 0; i < 16; i++) {
        const random = Math.floor(Math.random() * squaresNumber + 1);
        if(!arrBombList.includes(random)){
            arrBombList.push(random);
        }else{
            i--;
        }
    }
    console.log(arrBombList);
    return arrBombList;
}
