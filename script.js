const gridColor = 'rgb(194,194,194)';
const blackColor = '#000000';

createDivGrid(16);

const clearButton = document.querySelector('.button-clear');
clearButton.addEventListener('click', clearGrid);
const changeGridButton = document.querySelector('.button-change-grid');
changeGridButton.addEventListener('click', changeGridSize);
const colorBlackButton = document.querySelector('.button-black');
colorBlackButton.addEventListener('click', changeBlackColor);
const colorRainbowButton = document.querySelector('.button-rainbow');
colorRainbowButton.addEventListener('click', rainbowColor);
function createDivGrid(number) {
    const container = document.querySelector('.container-grid');
    container.style.gridTemplateColumns = 'repeat(' + number + ', 1fr)';
    let totalSquares = number * number;

    for (let i = 0; i < totalSquares; i++) {
        const element = document.createElement('div');
        element.className = 'div-grid';
        container.appendChild(element);
    }
}

function changeBlackColor() {
    const divGrid = document.querySelectorAll('.div-grid');

    divGrid.forEach(element => {
        element.removeEventListener('mouseover', changeRandomColor);
    });

    divGrid.forEach(element => {
        element.addEventListener('mouseover', changeColor);
    });
}

function clearGrid() {
    const divGrid = document.querySelectorAll('.div-grid');

    divGrid.forEach(element => {
        element.style.backgroundColor = gridColor;
    });
}

function changeGridSize() {
    let exit = false;
    while (!exit) {
        let size = prompt('Write the new grid size (1 - 100)');
        if (size <= 100 && size > 0) {
            removeGrid();
            createDivGrid(size);
            exit = true;
        }
    }
}

function removeGrid() {
    const divGrid = document.querySelectorAll('.div-grid');

    divGrid.forEach(element => {
        element.remove();
    });
}

function changeColor() {
    this.style.backgroundColor = blackColor;
}

function rainbowColor() {
    const divGrid = document.querySelectorAll('.div-grid');

    divGrid.forEach(element => {
        element.removeEventListener('mouseover', changeColor);
    });

    divGrid.forEach(element => {
        element.addEventListener('mouseover', changeRandomColor);
    });
}

function changeRandomColor() {
    let red = randomColorNumber();
    let green = randomColorNumber();
    let blue = randomColorNumber();

    let newColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

    this.style.backgroundColor = newColor;
}

function randomColorNumber() {
    return Math.floor(Math.random() * 256);
}
