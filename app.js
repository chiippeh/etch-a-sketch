const gridContainerDiv = document.querySelector('.grid-container');
const squareNumButton = document.querySelector('.num-squares');
const squareNumText = document.querySelector('.num-squares-text');
let num = 16;
let gridDimension = ((0.85 * document.documentElement.clientHeight) / num); 

console.log(gridContainerDiv);

for (let i = 1; i <= num*num; i++) {
    let div = gridContainerDiv.appendChild(document.createElement('div'))
    div.className = `g${i}`
    div.style.cssText = `width: ${gridDimension}px;
    height: ${gridDimension}px; background-color: black;`
    //box-shadow: inset 0 0 5px #000F;
    div.classList.add('block-element');
}

const blocks = document.querySelectorAll('.block-element');

function hover(e) {
    this.style.backgroundColor = 'white'
}

function btnClicked(e) {
    squareNumButton.classList.add('num-squares-clicked');
    squareNumText.classList.add('num-squares-text-clicked');
}

blocks.forEach(block => block.addEventListener('mouseover', hover));
squareNumButton.addEventListener('click', btnClicked);

