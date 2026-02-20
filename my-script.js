function makeGrid(numberOfGrid) {
    deleteGrid();
    const container = document.querySelector(".container");
    for (let i = 0; i < numberOfGrid; i++) {
        const column = document.createElement("div");
        column.classList.add("box");
        for(let j = 0; j < numberOfGrid; j++){
            const row = document.createElement("div");
            row.style.border = "1px solid white";
            row.classList.add("box");
            column.appendChild(row);
        }
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
const hover = document.getElementById("container");

hover.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "blue";
})