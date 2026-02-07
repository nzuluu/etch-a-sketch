let numberOfGrid = 16;
function makeGrid() {
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
makeGrid();

const hover = document.getElementById("container");

hover.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "blue";
})

let input = 0;
const btn = document.querySelector("#btn");
btn.onclick = () => input = prompt("Number of squares per side:");

if (input <= 100) {

}