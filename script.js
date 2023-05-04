//grid
const container = document.querySelector('#container');


//default grid
for (i = 0; i < 400; i++) {
    const grid = document.createElement('div');
    grid.className = 'box';
    grid.style.width = '25px';
    grid.style.height = '25px';
    grid.style.border = '.1px solid lightgray';
    grid.style.backgroundColor = 'white';
    document.querySelector('#container').appendChild(grid);
}

//colors-table
const pickColor = document.querySelector('#colors-table');
let colorChoice = '#ff00dd';

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



function colorSelect(color) {
    //if rainbow button was pressed
    if (color === 'rainbow') {
        colorChoice = "#" + Math.floor(Math.random() * 16777215).toString(16);
    //if gradient color was pressed
    } else {
        colorChoice = color;
    }
    return colorChoice;
 
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
    choice = e.target.innerText;
    createGrid(choice);
    console.log(choice);
})

// creating other grids
function createGrid(size) {
    let result = 0;
    //verifing the return of the button that was pressed
    if (choice === '20x20') {
        size = 20 * 20;
        result = '25px';
    } else if (choice === '50x50') {
        size = 50 * 50;
        result = '10px'
    } else {
        size = 100 * 100;
        result = '5px';
    }

    for (i = 0; i < size; i++) {
        const grid = document.createElement('div');
        grid.className = 'box';
        grid.style.width = result;
        grid.style.height = result;
        grid.style.border = '.1px solid lightgray';
        grid.style.backgroundColor = 'white';
        document.querySelector('#container').appendChild(grid);

    }
}

// function selectColor(){
//     const colorSelect = document.querySelectorAll('.color');
//     let colorChoice;
//     colorChoice = colorSelect.innerText;
//     console.log(colorChoice);
// }



