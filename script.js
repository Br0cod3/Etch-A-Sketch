const container = document.querySelector(".container");
// const userInput = prompt("Enter in any number of your choosing: ")

function sixteenRows() {
  for (let x = 0; x < 16; x++) {
    const rowContainer = document.createElement("div")
    rowContainer.classList.add("row")
    container.appendChild(rowContainer)
    for (let i = 0; i < 16; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        rowContainer.appendChild(square);
    }
  }
}

sixteenRows();

