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
// each log now has a class of l1 to l5. l1,l2 and l3, will have a brown colour
// l4 and l5 will have a blue back ground.
// logs move by "cycling" classes from l1 to l5 changing from brown to blue
// giving the effect of it moving to the left when it changes from l3 to l4
// do the reverse for logsright

function autoMoveLogs() {
  logsLeft.forEach((logLeft) => moveLogLeft(logLeft));
  logsRight.forEach((logRight) => moveLogRight(logRight));
}

function moveLogLeft(logLeft) {
  switch (true) {
    case logLeft.classList.contains("l1"): //check if that square contains l1
      logLeft.classList.remove("l1"); //remove this l1 class
      logLeft.classList.add("l2"); //add this l2 class
      break;

    case logLeft.classList.contains("l2"):
      logLeft.classList.remove("l2");
      logLeft.classList.add("l3");
      break;

    case logLeft.classList.contains("l3"):
      logLeft.classList.remove("l3");
      logLeft.classList.add("l4");
      break;

    case logLeft.classList.contains("l4"):
      logLeft.classList.remove("l4");
      logLeft.classList.add("l5");
      break;

    case logLeft.classList.contains("l5"):
      logLeft.classList.remove("l5");
      logLeft.classList.add("l1");
      break;
  }
}

function moveLogRight(logRight) {
  switch (true) {
    case logRight.classList.contains("l1"): //check if that square contains l1
      logRight.classList.remove("l1"); //remove this l1 class
      logRight.classList.add("l5"); //add this l5 class
      break;

    case logRight.classList.contains("l2"):
      logRight.classList.remove("l2");
      logRight.classList.add("l1");
      break;

    case logRight.classList.contains("l3"):
      logRight.classList.remove("l3");
      logRight.classList.add("l2");
      break;

    case logRight.classList.contains("l4"):
      logRight.classList.remove("l4");
      logRight.classList.add("l3");
      break;

    case logRight.classList.contains("l5"):
      logRight.classList.remove("l5");
      logRight.classList.add("l4");
      break;
  }
}

setInterval(autoMoveLogs, 500);

////////////////////////////////////////////////////////////////
//CREATE FUNCTION FOR CARS TO MOVE
////////////////////////////////////////////////////////////////

function autoMoveCars() {
  carsLeft.forEach((carLeft) => moveCarLeft(carLeft));
  carsRight.forEach((carRight) => moveCarRight(carRight));
}

function moveCarLeft(carLeft) {
  switch (true) {
    case carLeft.classList.contains("c1"): //check if that square contains l1
      carLeft.classList.remove("c1"); //remove this l1 class
      carLeft.classList.add("c2"); //add this l2 class
      break;

    case carLeft.classList.contains("c2"):
      carLeft.classList.remove("c2");
      carLeft.classList.add("c3");
      break;

    case carLeft.classList.contains("c3"):
      carLeft.classList.remove("c3");
      carLeft.classList.add("c4");
      break;

    case carLeft.classList.contains("c4"):
      carLeft.classList.remove("c4");
      carLeft.classList.add("c5");
      break;

    case carLeft.classList.contains("c5"):
      carLeft.classList.remove("c5");
      carLeft.classList.add("c1");
      break;
  }
}

//   function moveCarRight(carRight) {
//     switch (true) {
//       case carRight.classList.contains("c1"): //check if that square contains l1
//         carRight.classList.remove("c1"); //remove this l1 class
//         carRight.classList.add("c5"); //add this l5 class
//         break;

//       case carRight.classList.contains("c2"):
//         carRight.classList.remove("c2");
//         carRight.classList.add("c1");
//         break;

//       case carRight.classList.contains("c3"):
//         carRight.classList.remove("c3");
//         carRight.classList.add("c2");
//         break;

//       case carRight.classList.contains("c4"):
//         carRight.classList.remove("c4");
//         carRight.classList.add("c3");
//         break;

//       case carRight.classList.contains("c5"):
//         carRight.classList.remove("c5");
//         carRight.classList.add("c4");
//         break;
//     }
//   }
setInterval(autoMoveCars, 500);
