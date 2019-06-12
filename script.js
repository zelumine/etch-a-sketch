const containerDiv = document.getElementById("container");
const gridDiv = document.createElement("div");
const clearButton = document.getElementById("clear");
let num = 16;

function createGrid() {
    gridDiv.style.height = "850px";
    gridDiv.style.width = "850px";
    gridDiv.style.display = "grid";
    gridDiv.style.gridTemplateColumns = "repeat(" + num + ", 1fr)";
    gridDiv.style.gridTemplateRows = "repeat(" + num + ", 1fr)";
    gridDiv.style.border = "1px solid purple";
    gridDiv.style.borderWidth = "0 1px 1px 0";

    for(let i = 1; i <= (num * num); i++) {
        gridItem = document.createElement("div");
        gridItem.style.border = "1px solid purple";
        gridItem.style.borderWidth = "1px 0 0 1px";
        gridDiv.appendChild(gridItem);
    }
    gridDiv.classList.add("grid");
}
createGrid();

containerDiv.appendChild(gridDiv);

function changeBackground(e) {
    e.target.classList.add("changeBackground");
}

gridDiv.addEventListener("mouseover", changeBackground);

function clear() {
    gridDiv.innerHTML = "";
    gridDiv.style.border = "none";
    num = prompt("How many squares per side do you want?");
    createGrid();
    containerDiv.appendChild(gridDiv);
}

clearButton.addEventListener("click", clear);