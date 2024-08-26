const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Validation: Basically to see if the inputs are empty
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
    return;
  }

  // To see if the inputs are numbers
  if (isNaN(dividend) || isNaN(divider)) {
    document.body.innerHTML = "<h1>Something critical went wrong. Please reload the page.</h1>";
    console.error("Invalid input: Non-numeric value provided.");
    return;
  }

  if (divider == 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again.";
    console.error("Error: Division by zero attempted.", new Error().stack);
    return;
  }

  //To divide and display the answer (only whole number)
  result.innerText = Math.floor(dividend / divider);
});
