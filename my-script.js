function makeGrid(numberOfGrid) {
    deleteGrid();
    const container = document.querySelector(".container");
    for (let i = 0; i < numberOfGrid; i++) {
        const column = document.createElement("div");
        column.classList.add("box");
        for(let j = 1; j < numberOfGrid; j++){
            const row = document.createElement("div");
            row.classList.add("box");
            //Used `${x}` to calculate width and height
            row.style.width = `${640/numberOfGrid}px`;
            row.style.height = `${640/numberOfGrid}px`;
            container.appendChild(row);
        }
        //Used `${x}` to calculate width and height
        column.style.width = `${640/numberOfGrid}px`;
        column.style.height = `${640/numberOfGrid}px`;
        container.appendChild(column);
    }
}

let numberOfGrid = 16;
makeGrid(numberOfGrid);

const btn = document.querySelector("#btn");
btn.onclick = () => (changeGrid());

function changeGrid() {
    numberOfGrid = prompt("Number of squares per side:",);
    if (numberOfGrid <= 100) {
        makeGrid(numberOfGrid)
    }
    else {
        numberOfGrid = prompt("Number of squares per side:");
    }
}

function deleteGrid() {
    const allBox = document.querySelectorAll(".box");
    allBox.forEach((allBox) => {
        allBox.remove();
    })
}
const mouseHold = document.getElementById("container");
let isHold = true;

mouseHold.addEventListener("mousedown", () => {
    isHold = true;
    mouseHold.addEventListener("mouseover", (event) => {
        let color = randomColor();

        if (!isHold) return;
        event.target.style.backgroundColor = color;
        }) 
})

mouseHold.addEventListener("mouseup", () => {
    isHold = false;
})
function randNum() {
    return (Math.random() * 256);
}
function randomColor() {
    return `rgb(${randNum()},${randNum()},${randNum()})`;
}