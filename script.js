//CREATE 16x16 GRID OF SQUARE DIVS

const gridContainer = document.querySelector('.grid-container');
const resetButton = document.querySelector('.reset-button');

function hover(){
    const squareHover = document.querySelectorAll('.square');

    squareHover.forEach(square => square.addEventListener('mouseover', (e) => {
        e.target.classList.add('colorChange');
    }));
}


for(let row = 1; row <= 16; row++){
    const oneRow = document.createElement('div');
    oneRow.classList.add('row');

    for(let square = 1; square <= 16; square++){
        const oneSquare = document.createElement('div');
        oneSquare.classList.add('square');
        oneRow.append(oneSquare);
    }
    
    gridContainer.append(oneRow);
}

hover();


resetButton.addEventListener('click', getUserInput);

function getUserInput(){
    let userInput = Number(prompt('How many squares per side? (Max: 100)'));

    if(userInput <= 100 && userInput > 0){
        resetSketchpad(userInput);
    } else{
        sendAlert();
    }
}

function sendAlert(){
    alert('Invalid Input.Try Again');
}

function resetSketchpad(numPerSide){
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }

    for(let row = 1; row <= numPerSide; row++){
        const oneRow = document.createElement('div');
        oneRow.classList.add('row');
    
        for(let square = 1; square <= numPerSide; square++){
            const oneSquare = document.createElement('div');
            oneSquare.classList.add('square');
            oneRow.append(oneSquare);
        }
        
        gridContainer.append(oneRow);
    }

    hover();
}

