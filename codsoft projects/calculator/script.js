let equal_pressed = 0;
// Refer all buttons excluding C and DEL
let button_input = document.querySelectorAll(".input-button");
// Refer input, equal, clear and erase
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
  input.value = "";
};

// Access each class using forEach
button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }
    // Check if the button value is "%" and handle it
    if (button_class.value === "%") {
      // Calculate percentage based on current input
      input.value += "/100";
    } else {
      // Display value of each button
      input.value += button_class.value;
    }
  });
});

equal.addEventListener("click", () => {
  equal_pressed = 1;
  let inp_val = input.value;
  try {
    // Evaluate the expression using eval
    let solution = eval(inp_val);
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (err) {
    input.value = "Error!";
  }
});

// Clear Whole Input
clear.addEventListener("click", () => {
  input.value = "";
});

erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});

