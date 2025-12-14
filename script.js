
let number = document.getElementById("number");
let counterNumber = 0;

// increase
function add() {
  counterNumber = counterNumber + 1;
  number.innerText = counterNumber;
}

// decrease
function minus() {
  counterNumber = counterNumber - 1;
  number.innerText = counterNumber;
}

// reset
function reset() {
  counterNumber = 0;
  number.innerText = counterNumber;
}