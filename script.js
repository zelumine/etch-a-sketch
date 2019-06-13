const containerDiv = document.getElementById("container");
const gridDiv = document.createElement("div");
const clearButton = document.getElementById("clear");
const rainbowButton = document.getElementById("rainbow");
const classicButton = document.getElementById("classic");
let num = 16;

function createGrid() {
    gridDiv.style.height = "750px";
    gridDiv.style.width = "750px";
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
    gridDiv.style.background = "none";
    num = prompt("How many squares per side do you want?");
    createGrid();
    containerDiv.appendChild(gridDiv);
}

function rainbowBackground(e) {
    let r = Math.floor((Math.random() * 255) + 1);
    let g = Math.floor((Math.random() * 255) + 1);
    let b = Math.floor((Math.random() * 255) + 1);
    e.target.style.background =  `rgb(${r}, ${g}, ${b})`;
}

function rainbow() {
    gridDiv.addEventListener("mouseover", rainbowBackground);
}

function classic() {
    gridDiv.removeEventListener("mouseover", rainbowBackground);
    gridDiv.addEventListener("mouseover", (e) => {
        e.target.style.background = "rgb(0, 0, 255)";
    });
}

clearButton.addEventListener("click", clear);
rainbowButton.addEventListener("click", rainbow);
classicButton.addEventListener("click", classic);
