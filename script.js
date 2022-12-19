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
  //this line of code is to remove the previous position of frog otherwise it will look like a snake
  squares[currentIndex].classList.remove("frog");

  switch (event.key) {
    case "ArrowLeft":
      if (currentIndex % 9 !== 0) {
        //this if statement is to prevent the square from moving left at the left border
        currentIndex--; //makes frog move left
      }
      break;
    case "ArrowRight":
      if (currentIndex % 9 < 8) {
        currentIndex++;
      }
      break;
    case "ArrowUp":
      if (currentIndex > 8) {
        currentIndex -= 9;
      }
      break;
    case "ArrowDown":
      if (currentIndex < 72) {
        currentIndex += 9;
      }
      break;
  }
  squares[currentIndex].classList.add("frog"); // makes the frog appear at the starting block
}
document.addEventListener("keyup", moveFrog);
