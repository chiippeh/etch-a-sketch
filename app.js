const gridContainerDiv = document.querySelector('.grid-container');
let num = 16;
let gridDimension = ((0.85 * document.documentElement.clientHeight) / num); 
console.log(gridDimension);


// const div = document.createElement('div');
// div.style.cssText = `display: flex; width: ${gridDimension}px; height: ${gridDimension}px; background-color: red;`
for (let i = 1; i <= num*num; i++) {
    let div = gridContainerDiv.appendChild(document.createElement('div'))
    div.className = `g${i}`
    div.style.cssText = `width: ${gridDimension}px;
    height: ${gridDimension}px; background-color: red;
    box-shadow: inset 0 0 1px #000;`
    div.classList.add('grid-block:hover')


    //35.5938
}