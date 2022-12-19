// assign variables

const squares = document.querySelectorAll(".grid div");
const logsLeft = document.querySelectorAll(".log-left");
const logsRight = document.querySelectorAll(".log-right");
const carsLeft = document.querySelectorAll("car-left");
const carsRight = document.querySelectorAll("car-right");

console.log(squares); //this gives a layout of the array of squares

let currentIndex = 76; // this is 76 because this is the index of the starting block

////////////////////////////////////////////////////////////////////
//CREATE FUNCTION TO MOVE FROG
/////////////////////////////////////////////////////////////////////

function moveFrog(event) {
  switch (event.key) {
    case "ArrowLeft":
      currentIndex--; //makes frog move left
      break;
    case "ArrowRight":
      currentIndex++; //makes frog move left
      break;
    case "ArrowUp":
      currentIndex -= 9; //makes frog move left
      break;
    case "ArrowDown":
      currentIndex += 9; //makes frog move left
      break;
  }
  squares[currentIndex].classList.add("frog"); // makes the frog appear at the starting block
}
document.addEventListener("keyup", moveFrog);
