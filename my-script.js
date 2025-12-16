function makeGrid() {
    const container = document.querySelector(".container");
    for (let i = 0; i < 16; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        for(let j = 0; j < 16; j++){
            const row = document.createElement("div");
            row.classList.add("row");
            row.style.border = "1px solid white";
            column.appendChild(row);
        }
        container.appendChild(column);
    }
}

makeGrid();

