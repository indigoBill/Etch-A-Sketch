//CREATE 16x16 GRID OF SQUARE DIVS

const gridContainer = document.querySelector('.grid-container');
const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');


function defaultGrid(){
    for(let row = 1; row <= 16; row++){
        const oneRow = document.createElement('div');
        oneRow.classList.add('row');
    
        for(let square = 1; square <= 16; square++){
            const oneSquare = document.createElement('div');
            oneSquare.classList.add('square');
            oneSquare.style.backgroundColor = 'rgb(255,255,255)';
            oneRow.append(oneSquare);
        }
        
        gridContainer.append(oneRow);
    }
}

//GENERATES A DEFAULT 16X16 GRID EVERY TIME THE WINDOW IS LOADED/REFRESHED
window.addEventListener('load', defaultGrid);

function randomIntGenerator(maxInt){
    return Math.floor(Math.random() * maxInt);
}

//RGB COLORS HAVE A RANGE FROM 0 TO 255
function randomRgbColorGenerator(){
    let r = randomIntGenerator(255);
    let g = randomIntGenerator(255);
    let b = randomIntGenerator(255);

    return(`${r},${g},${b}`);
}

function hoverBlack(e){
    let squareColor = e.target;

    squareColor.style.backgroundColor = 'rgb(0,0,0)';
}

function hoverRainbow(e){
    let squareColor = e.target;

    squareColor.style.backgroundColor = `rgb(${randomRgbColorGenerator()})`;
}

function hoverDarken(e){
    let prevColor = e.target.style.backgroundColor.slice(4).slice(0,-1); //SEPARATE NUMBERS FROM RGB()

    let rgbArr = prevColor.split(','); //PLACE EACH VALUE IN AN ARRAY
    let newRgbArr = []; //CREATE EMPTY ARRAY

    for(let i = 0; i < rgbArr.length; i++){
        let newRgb = Math.floor(rgbArr[i] * (1 - .2)); //FORMULA FOR ADDING SHADE TO RGB VALUES IS newR = currentR * (1 - shade_factor) <- REPEAT FOR G & B
        newRgbArr.push(newRgb);
    }

    e.target.style.backgroundColor = `rgb(${newRgbArr})`;  
}

function erase(e){
    e.target.style.backgroundColor = 'rgb(255,255,255)';
}

function colorChange(e){
    let text = e.target.textContent;
    const squareHover = document.querySelectorAll('.square');

    if(text === 'BLACK'){
        squareHover.forEach(square => square.removeEventListener('mouseover', hoverRainbow));
        squareHover.forEach(square => square.removeEventListener('mouseover', hoverDarken));
        squareHover.forEach(square => square.removeEventListener('mouseover', erase));
        squareHover.forEach(square => square.addEventListener('mouseover', hoverBlack));
        
        
    }else if(text === 'RAINBOW'){
        squareHover.forEach(square => square.removeEventListener('mouseover', hoverBlack));
        squareHover.forEach(square => square.removeEventListener('mouseover', hoverDarken));
        squareHover.forEach(square => square.removeEventListener('mouseover', erase));
        squareHover.forEach(square => square.addEventListener('mouseover', hoverRainbow));
        
    }
    else if(text === 'DARKEN'){
        squareHover.forEach(square => square.removeEventListener('mouseover', hoverBlack));
        squareHover.forEach(square => square.removeEventListener('mouseover', hoverRainbow));
        squareHover.forEach(square => square.removeEventListener('mouseover', erase));
        squareHover.forEach(square => square.addEventListener('mouseover', hoverDarken));
    }else{
        squareHover.forEach(square => square.removeEventListener('mouseover', hoverBlack));
        squareHover.forEach(square => square.removeEventListener('mouseover', hoverRainbow));
        squareHover.forEach(square => square.removeEventListener('mouseover', hoverDarken));
        squareHover.forEach(square => square.addEventListener('mouseover', erase));
    }
}

const colorButtons = document.querySelectorAll('.color-button');

colorButtons.forEach(colorButton => colorButton.addEventListener('click', (e) => colorChange(e)));


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
            oneSquare.style.backgroundColor = 'rgb(255,255,255)';
            oneRow.append(oneSquare);
        }
        
        gridContainer.append(oneRow);
    }
}




sliderValue.textContent = `GRID: ${slider.value} x ${slider.value}`;

slider.oninput = () => {
    sliderValue.textContent = `GRID: ${slider.value} x ${slider.value}`;
    resetSketchpad(slider.value);
}




