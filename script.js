///////////////////////////////////////////////////////////////////
////////////////////// ASSIGN VARIABLES////////////////////////////
///////////////////////////////////////////////////////////////////

const squares = document.querySelectorAll(".grid div");
const logsLeft = document.querySelectorAll(".log-left");
const logsRight = document.querySelectorAll(".log-right");
const carsLeft = document.querySelectorAll(".car-left");
const carsRight = document.querySelectorAll(".car-right");
const snakesLeft = document.querySelectorAll(".snake-left");
const snakesRight = document.querySelectorAll(".snake-right");
const resultDisplay = document.querySelector("#result");
const timeLeftDisplay = document.querySelector("#time-left");
const startPauseBtn = document.querySelector("#start-pause-button");

let currentIndex = 112; // this is the index of the starting block
let currentTime = 20;
let timerId; // this variable is needed to allow game to start/pause and move/stop elements

////////////////////////////////////////////////////////////////////
////////////////CREATE FUNCTION TO MOVE FROG////////////////////////
////////////////////////////////////////////////////////////////////

function moveFrog(event) {
  // remove the previous position of frog otherwise it will look like a snake
  squares[currentIndex].classList.remove("frog");

  switch (event.key) {
    case "ArrowLeft":
      if (currentIndex % 9 !== 0) {
        //this if statement prevents frog from moving left at the left border
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
  squares[currentIndex].classList.add("frog"); // makes frog appear at the starting block
}

/////////////////////////////////////////////////////////////////////////
////////////COMBINE ALL MOVING ELEMENTS INTO ONE FUNCTION////////////////
/////////////////////////////////////////////////////////////////////////

function autoMoveElements() {
  logsLeft.forEach((logLeft) => moveLogLeft(logLeft));
  logsRight.forEach((logRight) => moveLogRight(logRight));
  carsLeft.forEach((carLeft) => moveCarLeft(carLeft));
  carsRight.forEach((carRight) => moveCarRight(carRight));
  snakesLeft.forEach((snakeLeft) => moveSnakeLeft(snakeLeft));
  snakesRight.forEach((snakeRight) => moveSnakeRight(snakeRight));
}

function timerCountdown() {
  currentTime--;
  timeLeftDisplay.innerHTML = currentTime;
  if (currentTime <= 0) {
    timeLeftDisplay.innerHTML = 0;
  }
}

////////////////////////////////////////////////////////////////
//////////////CREATE FUNCTION TO MOVE ELEMENTS//////////////////
////////////////////////////////////////////////////////////////
// each log has a class of l1 to l5. l1-l3 contains img of log
// l4 and l5 will have a blue back ground representing water
// logs move by "cycling" classes from l1 to l5 changing from brown to blue
// giving the effect of it moving to the left
// do the reverse for logsright

function moveLogLeft(logLeft) {
  switch (true) {
    case logLeft.classList.contains("l1"):
      logLeft.classList.remove("l1");
      logLeft.classList.add("l2");
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
    case logRight.classList.contains("l1"):
      logRight.classList.remove("l1");
      logRight.classList.add("l5");
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
    case carRight.classList.contains("c1"):
      carRight.classList.remove("c1");
      carRight.classList.add("c6");
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

function moveSnakeLeft(snakeLeft) {
  switch (true) {
    case snakeLeft.classList.contains("s1"):
      snakeLeft.classList.remove("s1");
      snakeLeft.classList.add("s2");
      break;
    case snakeLeft.classList.contains("s2"):
      snakeLeft.classList.remove("s2");
      snakeLeft.classList.add("s3");
      break;
    case snakeLeft.classList.contains("s3"):
      snakeLeft.classList.remove("s3");
      snakeLeft.classList.add("s1");
      break;
  }
}

function moveSnakeRight(snakeRight) {
  switch (true) {
    case snakeRight.classList.contains("s1"):
      snakeRight.classList.remove("s1");
      snakeRight.classList.add("s3");
      break;
    case snakeRight.classList.contains("s2"):
      snakeRight.classList.remove("s2");
      snakeRight.classList.add("s1");
      break;
    case snakeRight.classList.contains("s3"):
      snakeRight.classList.remove("s3");
      snakeRight.classList.add("s2");
      break;
  }
}

/////////////////////////////////////////////////////////
/////////////CREATE  WIN AND LOSE CONDITION/////////////
////////////////////////////////////////////////////////

function win() {
  if (squares[currentIndex].classList.contains("dragonfly")) {
    resultDisplay.innerHTML = "Yumz";
    clearInterval(timerId); //stops elements from moving
    document.removeEventListener("keyup", moveFrog);
    currentTime = 21;
  }
}

function lose() {
  if (
    squares[currentIndex].classList.contains("c1") ||
    squares[currentIndex].classList.contains("c5") ||
    squares[currentIndex].classList.contains("l4") ||
    squares[currentIndex].classList.contains("l5") ||
    squares[currentIndex].classList.contains("s1") ||
    currentTime <= 0
  ) {
    resultDisplay.innerHTML = "NOOB. you ded";
    clearInterval(timerId); //stops the timer and game
    squares[currentIndex].classList.remove("frog"); //remove frog from game
    document.removeEventListener("keyup", moveFrog); //remove movement of frog
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
    squares[currentIndex].classList.add("frog");
    timerId = setInterval(autoMoveElements, 600); // set speed of elements moving
    setInterval(timerCountdown, 1000);            // timer interval set to 1 sec
    document.addEventListener("keyup", moveFrog); // this is shifted here so that frog only moves when start button is clicked
    console.log(timerId);
  }
}

setInterval(win, 10); //checks for win every 0.01 sec
setInterval(lose, 10);
