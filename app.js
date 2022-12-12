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
            div.classList.add('block-element');
        }
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
    if (this.classList.contains('block-visited')) {
        let val = randomRGBNumber(true, this)
        this.style.backgroundColor = val;
    } else {
        this.style.backgroundColor = randomRGBNumber(false);
        this.classList.add('block-visited'); 
    }
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
    if (e.key === 'Enter') {
        err.style.display = 'none';
        if (Number(e.target.value) > 100) {
            err.style.display = 'inline-block';
            return;
        }
        num = Number(e.target.value);
        drawn = true;
        drawGrid();
        blocks = document.querySelectorAll('.block-element');
        blocks.forEach(block => block.addEventListener('mouseover', hover));
        e.preventDefault();
    }
}

function randomRGBNumber(visited, blockObject) {
    if (!visited) {
        let rgbString = 'rgb(';
        for(let i = 0; i < 3; i++) {
            if (i != 2) {
                rgbString += Math.floor(Math.random() * 256) + ', ';
            } else {
                rgbString += Math.floor(Math.random() * 256) + ')';
            }
        }
        return rgbString;
    } else {
        let newRgbString = blockObject.style.backgroundColor;
        let colorArr = newRgbString.slice(
            newRgbString.indexOf("(") + 1, 
            newRgbString.indexOf(")")
        ).split(", ");
        for (let i = 0; i < 3; i++) {
            if (colorArr[i] !== '0') {
                let minusTenPercent = Math.floor(Number(colorArr[i]) - (Number(colorArr[i]) * 0.3));
                if (minusTenPercent <= 0) {
                    colorArr[i] = '0';
                } else {
                    colorArr[i] = minusTenPercent;
                }
            }
        }

        if (colorArr[0] == '0' && colorArr[1] == '0' && colorArr[2] == '0') {
            setTimeout(() => {
                blockObject.classList.remove('block-visited');
            }, 2000);
        }

        let returnRgbString = 'rgb(';
        for(let i = 0; i < 3; i++) {
            if (i != 2) {
                returnRgbString+= colorArr[i] + ', ';
            } else {
                returnRgbString += colorArr[i] + ')';
            }
        }
        return returnRgbString;
    }
}


blocks.forEach(block => block.addEventListener('mouseover', hover));
squareNumButton.addEventListener('click', btnClicked);
gridForm.addEventListener('keypress', formSubmit);

