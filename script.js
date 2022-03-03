const difficultyInput = document.querySelector('#difficulty');
const btnPlay = document.querySelector('#play');
const main = document.querySelector('main')
let safeCounter = 0;
btnPlay.addEventListener('click', function(){
    safeCounter = 0;
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

///////// GENERAZIONE GRIGLIA DI GIOCO /////////

function gridGenerator(squaresNumber) {
    const output = document.querySelector('.result');
    const container = document.querySelector('.container');

    container.innerHTML = '';
    output.innerHTML = '';

    for (let i = 1; i <= squaresNumber; i++) {

        const square = document.createElement('div');
        square.classList.add('square')
        square.innerHTML = i;
        container.append(square);
        square.addEventListener('click', squareSelection);
    }
}

///////// GESTIONE CLICK DELLE CELLE E CONTROLLO STATO PARITA /////////

function squareSelection() {
    const output = document.querySelector('.result');
    const square = document.querySelectorAll('.square');
    const bomb = document.querySelectorAll('.bomb');
    let safeSquareLeft = square.length -17 - safeCounter;
    let gameEnded


    if(this.classList.contains('bomb')) {
        this.classList.add('bg-change-bomb');
        output.innerHTML = `hai perso score: ${safeCounter}`
        output.classList.add('show');
        safeCounter = 0;
        gameEnded = true;
        square.forEach(square => square.removeEventListener('click', squareSelection));
        bomb.forEach(bomb => bomb.classList.add('bg-change-bomb'));
        // reset(gameEnded);
    }else {
        this.classList.add('bg-change-safe');
        safeCounter++;
    }

    if(safeSquareLeft == 0) {
        output.innerHTML = 'hai vinto!'
        output.classList.add('show');
        safeCounter = 0;
        square.forEach(square => square.removeEventListener('click', squareSelection));
        // reset(gameEnded);
    }
    console.log(safeSquareLeft);
}

///////// ASSEGNAZIONE CLASSE BOMB /////////

function bombAssignment(bombList) {
    const square = document.querySelectorAll('.square');
    for (let i = 0; i < bombList.length; i++) {
        square[bombList[i]].classList.add('bomb')    
    }
}

///////// GENERAZIONE LISTA DI BOMBE /////////

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

function reset(gameEnded) {
    // if(gameEnded) {
    //     main.addEventListener('click', function() {
    //         const output = document.querySelector('.result');
    //         const container = document.querySelector('.container');
    
    //         container.innerHTML = '';
    //         output.innerHTML = '';
    //     })
    //     gameEnded = false;
    //     console.log(gameEnded)
    // }
}
