//grid
const container = document.querySelector('#container');

//creating the grid
for (i = 0; i < 400; i++) {
    const grid = document.createElement('div');
    grid.className = 'box';
    grid.style['min-width'] = '25px';
    grid.style.height = '25px';
    grid.style.border = '.1px solid lightgray';
    grid.style.backgroundColor = 'white';
    document.querySelector('#container').appendChild(grid);

}

//coloring

const addColor = document.querySelectorAll('div.box');

addColor.forEach((box) => {
    addEventListener('mousemove', function (e){
        console.log(e.target);
        e.target.style.backgroundColor = 'pink';
    });
});




