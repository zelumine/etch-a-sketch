const containerDiv = document.getElementById("container");
const gridDiv = document.createElement("div");

let numRows = 16;
let numCols = 16;

gridDiv.style.height = "910px";
gridDiv.style.width = "910px";
gridDiv.style.display = "grid";
gridDiv.style.gridTemplateColumns = "repeat(" + numCols + ", 1fr)";
gridDiv.style.gridTemplateRows = "repeat(" + numRows + ", 1fr)";
gridDiv.style.border = "1px solid purple";
gridDiv.style.borderWidth = "0 1px 1px 0";

containerDiv.appendChild(gridDiv);

for(let i = 1; i <= (numCols * numRows); i++) {
    gridItem = document.createElement("div");
    gridItem.style.border = "1px solid purple";
    gridItem.style.borderWidth = "1px 0 0 1px";
    gridDiv.appendChild(gridItem);
}

