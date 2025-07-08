const container = document.querySelector(".container");
const button = document.querySelector(".btn");

function columnRows(num) {
  for (let x = 0; x < num; x++) {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("row");
    container.appendChild(rowContainer);
    for (let i = 0; i < num; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      rowContainer.appendChild(square);
    }
  }
}

function removeGrid() {
  const row = document.querySelectorAll(".row");
  for (const child of row) {
    container.removeChild(child);
  }
}

function resizeGrid() {
  userInput = prompt("What's your desired grid size?");
  if (isNaN(userInput) || userInput < 1 || userInput > 100) {
    alert("Enter a valid number between 1 and 100");
    return;
  } else {
    removeGrid();
    columnRows(userInput);
  }
}

columnRows(16);
button.addEventListener("click", resizeGrid);
