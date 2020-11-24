const bulb = document.querySelector("#bulb");
const btnOn = document.querySelector("#btnOn");
const btnDim = document.querySelector("#btnDim");
const btnOff = document.querySelector("#btnOff");

//Events
btnOn.addEventListener("click", lightOn);

function lightOn() {
  bulb.src = "lighton.jpg";
}

btnDim.addEventListener("click", lightDim);
function lightDim() {
  bulb.src = "dimlight.jpg";
}

btnOff.addEventListener("click", lightOff);
function lightOff() {
  bulb.src = "lightoff.jpg";
}
