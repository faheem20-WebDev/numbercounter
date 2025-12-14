
let number = document.getElementById("number");
let counterNumber = 0;

// increase
function add() {
  counterNumber = counterNumber + 1;
  number.innerText = counterNumber;
}

// decrease
function minus() {
  if(counterNumber > 0){
  counterNumber = counterNumber - 1;
  number.innerText = counterNumber;
}
else{
  alert("Number can't be negative");
}
}
// reset
function reset() {
  counterNumber = 0;
  number.innerText = counterNumber;
}