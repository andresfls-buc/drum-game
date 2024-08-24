// Select all buttons with the class 'drum'
const buttons = document.querySelectorAll(".drum");

// Function to handle click events
function handleClick() {
  alert("I got clicked!");
}

// Add event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
