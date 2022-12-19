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

////////////////////////////////////////////////////////////////
//CREATE FUNCTION TO MOVE LOGS
////////////////////////////////////////////////////////////////
//each log now has a class of l1 to l5. l1,l2 and l3, will have a brown colour
// l4 and l5 will have a a blue back ground.
// how the logs move is by "cycling" the classes from l1 to l5 so that it changes from brown to blue
// giving the effect of it moving to the left when it changes from l3 to l4

function autoMoveLogs() {
  logsLeft.forEach((logleft) => moveLogLeft(logleft));
}

function moveLogLeft(logleft) {
  switch (true) {
    case logleft.classList.contains("l1"): //check if that square contains l1
      logleft.classList.remove("l1"); //remove this l1 class
      logleft.classList.add("l2"); //add this l2 class
      break;

    case logleft.classList.contains("l2"):
      logleft.classList.remove("l2");
      logleft.classList.add("l3");
      break;

    case logleft.classList.contains("l3"):
      logleft.classList.remove("l3");
      logleft.classList.add("l4");
      break;

    case logleft.classList.contains("l4"):
      logleft.classList.remove("l4");
      logleft.classList.add("l5");
      break;

    case logleft.classList.contains("l5"):
      logleft.classList.remove("l5");
      logleft.classList.add("l1");
      break;
  }
}

setInterval(autoMoveLogs, 1000);
