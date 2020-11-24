const buttons = document.querySelectorAll("button");
const display = document.querySelector(".Show-Answer");

buttons.forEach(function (button) {
  button.addEventListener("click", calculate);
});

function calculate(e) {
  const buttonValue = e.target.value;

  if (buttonValue === "=") {
    if (display.value !== "") {
      display.value = eval(display.value);
    }
  } else if (buttonValue === "C") {
    display.value = "";
  } else {
    display.value += buttonValue;
  }
}
