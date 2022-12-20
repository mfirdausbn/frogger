// assign variables

const squares = document.querySelectorAll(".grid div");
const logsLeft = document.querySelectorAll(".log-left");
const logsRight = document.querySelectorAll(".log-right");
const carsLeft = document.querySelectorAll(".car-left");
const carsRight = document.querySelectorAll(".car-right");

const resultDisplay = document.querySelector("#result");
const timeLeftDisplay = document.querySelector("#time-left");

const startPauseBtn = document.querySelector("#start-pause-button");

//console.log(squares); //this gives a layout of the array of squares

let currentIndex = 112; // this is 76 because this is the index of the starting block
let currentTime = 30;
let timerId;

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
      if (currentIndex < 108) {
        currentIndex += 9;
      }
      break;
  }
  squares[currentIndex].classList.add("frog"); // makes the frog appear at the starting block
}

//////////////////////////////////////////////////////
//combine all automoving elements into one function
//////////////////////////////////////////////////////

function autoMoveElements() {
  currentTime--; //makes timer go down by 1 sec
  timeLeftDisplay.innerHTML = currentTime;
  logsLeft.forEach((logLeft) => moveLogLeft(logLeft));
  logsRight.forEach((logRight) => moveLogRight(logRight));
  carsLeft.forEach((carLeft) => moveCarLeft(carLeft));
  carsRight.forEach((carRight) => moveCarRight(carRight));
  // lose();
  // win();
}

////////////////////////////////////////////////////////////////
//CREATE FUNCTION TO MOVE LOGS
////////////////////////////////////////////////////////////////
// each log now has a class of l1 to l5. l1,l2 and l3, will have a brown colour
// l4 and l5 will have a blue back ground.
// logs move by "cycling" classes from l1 to l5 changing from brown to blue
// giving the effect of it moving to the left when it changes from l3 to l4
// do the reverse for logsright

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

////////////////////////////////////////////////////////////////
//CREATE FUNCTION FOR CARS TO MOVE
////////////////////////////////////////////////////////////////

// function autoMoveCars() {
//   carsLeft.forEach((carLeft) => moveCarLeft(carLeft));
//   carsRight.forEach((carRight) => moveCarRight(carRight));
// }

function moveCarLeft(carLeft) {
  switch (true) {
    case carLeft.classList.contains("c1"):
      carLeft.classList.remove("c1");
      carLeft.classList.add("c2");
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
      carLeft.classList.add("c6");
      break;
    case carLeft.classList.contains("c6"):
      carLeft.classList.remove("c6");
      carLeft.classList.add("c1");
      break;
  }
}

function moveCarRight(carRight) {
  switch (true) {
    case carRight.classList.contains("c1"): //check if that square contains l1
      carRight.classList.remove("c1"); //remove this l1 class
      carRight.classList.add("c6"); //add this l5 class
      break;

    case carRight.classList.contains("c2"):
      carRight.classList.remove("c2");
      carRight.classList.add("c1");
      break;

    case carRight.classList.contains("c3"):
      carRight.classList.remove("c3");
      carRight.classList.add("c2");
      break;

    case carRight.classList.contains("c4"):
      carRight.classList.remove("c4");
      carRight.classList.add("c3");
      break;

    case carRight.classList.contains("c5"):
      carRight.classList.remove("c5");
      carRight.classList.add("c4");
      break;
    case carRight.classList.contains("c6"):
      carRight.classList.remove("c6");
      carRight.classList.add("c5");
      break;
  }
}

/////////////////////////////////////////////////////////
//CREATE  WIN AND LOSE CONDITION
////////////////////////////////////////////////////////

function win() {
  if (squares[currentIndex].classList.contains("ending-block")) {
    resultDisplay.innerHTML = "ez";
    clearInterval(timerId);
  }
}

function lose() {
  if (
    squares[currentIndex].classList.contains("c1") ||
    squares[currentIndex].classList.contains("c5") ||
    squares[currentIndex].classList.contains("l4") ||
    squares[currentIndex].classList.contains("l5") ||
    currentTime <= 0
  ) {
    resultDisplay.innerHTML = "NOOB. you ded";
    clearInterval(timerId); //stops the timer and game
    squares[currentIndex].classList.remove("frog"); //remove frog from game
  }
}

startPauseBtn.addEventListener("click", startOrPause);

function startOrPause() {
  if (timerId) {
    // when game is paused
    clearInterval(timerId);
    document.removeEventListener("keyup", moveFrog);
    timerId = null;
  } else {
    timerId = setInterval(autoMoveElements, 1000);
    document.addEventListener("keyup", moveFrog); // this is shifted here so that frog only moves when start button is clicked
  }
}

setInterval(win, 10);
setInterval(lose, 10);
