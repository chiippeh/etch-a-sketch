const gridContainerDiv = document.querySelector('.grid-container');
const squareNumButton = document.querySelector('.num-squares');
const squareNumText = document.querySelector('.num-squares-text');
const gridForm = document.querySelector('#grid-form');
const err = document.querySelector('#input-error');
gridForm.style.display = 'none';
err.style.display = 'none';
let num = 16;
drawn = false;

function drawGrid() {
    let gridDimension = ((0.85 * document.documentElement.clientHeight) / num); 
    if (drawn) {
        while (gridContainerDiv.firstChild) {
            gridContainerDiv.removeChild(gridContainerDiv.lastChild);
        }
        for (let i = 1; i <= num*num; i++) {
            let div = gridContainerDiv.appendChild(document.createElement('div'))
            div.className = `g${i}`
            div.style.cssText = `width: ${gridDimension}px;
            height: ${gridDimension}px; background-color: black;`
            //box-shadow: inset 0 0 5px #000F;
            div.classList.add('block-element');
        }
        console.log("hi");
    } else { 
        for (let i = 1; i <= num*num; i++) {
            let div = gridContainerDiv.appendChild(document.createElement('div'))
            div.className = `g${i}`
            div.style.cssText = `width: ${gridDimension}px;
            height: ${gridDimension}px; background-color: black;`
            //box-shadow: inset 0 0 5px #000F;
            div.classList.add('block-element');
        }
    }
}

drawGrid();

let blocks = document.querySelectorAll('.block-element');

function hover(e) {
    this.style.backgroundColor = 'white'
}

function btnClicked(e) {
    squareNumButton.classList.add('num-squares-onclick');
    squareNumText.classList.add('num-squares-text-onclick');
    setTimeout(() => {
        squareNumText.style.display = 'none';
        gridForm.style.display = 'block';
    }, 500);
}

function formSubmit(e) {
    console.log(e.type.toUpperCase(), e.target.id, e.target.value);
    if (e.key === 'Enter') {
        err.style.display = 'none';
        if (Number(e.target.value) > 100) {
            err.style.display = 'inline-block';
            return;
        }
        num = Number(e.target.value);
        console.log(e.target.value);
        drawn = true;
        drawGrid();
        blocks = document.querySelectorAll('.block-element');
        blocks.forEach(block => block.addEventListener('mouseover', hover));
        e.preventDefault();
    }
}


blocks.forEach(block => block.addEventListener('mouseover', hover));
squareNumButton.addEventListener('click', btnClicked);
gridForm.addEventListener('keypress', formSubmit);

