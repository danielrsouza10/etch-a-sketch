//default grid
const container = document.querySelector('#container');
const grid = document.createElement('div');
grid.className = 'grid';
container.appendChild(grid);
//loop to create the default grid
for (i = 0; i < 400; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    box.style.width = '25px';
    box.style.height = '25px';
    // box.style.border = '0.1px solid lightgray';
    box.style.backgroundColor = 'white';
    document.querySelector('.grid').appendChild(box);
}

//colors-table
const pickColor = document.querySelector('#colors-table');
let colorChoice = '#8F00FF';

//event for selected color in the gradient color
pickColor.addEventListener('input', function (e) {
    colorChoice = colorSelect(e.target.value);
    console.log(e.target.value);
});

//event for the rainbow button
pickColor.addEventListener('click', function (e) {
    colorChoice = colorSelect(e.target.value);
    console.log(e.target.value);
})

//function to select a color
function colorSelect(color) {
    //if rainbow button was pressed
    if (color === 'Rainbow') {
        return ("#" + Math.floor(Math.random() * 16777215).toString(16));
        //if a color was select in the gradient
    } else if (color === 'Eraser') {
        return 'white';
    }
    else {
        return color;
    }
}

//coloring
const addColor = document.querySelectorAll('.box');

addColor.forEach((box) => {
    container.addEventListener('mouseover', function (e) {

        e.target.style.backgroundColor = colorChoice;
    });

});

// size gride buttons
const buttons = document.querySelector('#buttons');
let choice = 0;

buttons.addEventListener('click', function (e) {
    const grid = document.querySelector('.grid');
    container.removeChild(grid);
    choice = e.target.innerText;
    createNewGrid(choice);
    console.log(choice);
})

// function to create other grids
function createNewGrid(size) {
    const container = document.querySelector('#container');
    const grid = document.createElement('div');
    grid.className = 'grid';
    container.appendChild(grid);

    let result = 0;
    //verifing the return of the button that was pressed
    if (choice === '20 x 20' || choice === 'Reset') {
        size = 20 * 20;
        result = '25px';
    } else if (choice === '50 x 50') {
        size = 50 * 50;
        result = '10px';
    } else{
        size = 100 * 100;
        result = '5px';
    }

    for (i = 0; i < size; i++) {
        //create new div
        const newGrid = document.createElement('div');
        newGrid.className = 'newBox';
        newGrid.style.width = result;
        newGrid.style.height = result;
        // newGrid.style.border = '.1px solid lightgray';
        newGrid.style.backgroundColor = 'white';
        document.querySelector('.grid').appendChild(newGrid);
    }
}





