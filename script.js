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
      square.addEventListener("mouseover", colorChange);
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
  const userInput = prompt("What's your desired grid size?");
  if (isNaN(userInput) || userInput < 1 || userInput > 100) {
    alert("Enter a valid number between 1 and 100");
    return;
  } else {
    removeGrid();
    columnRows(userInput);
  }
}

function randomColorGenerator() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return `rgb(${color.join(",")})`;
}

function colorChange(event) {
  event.target.style.backgroundColor = randomColorGenerator();
}

columnRows(16);
button.addEventListener("click", resizeGrid);
