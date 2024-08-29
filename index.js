// Select all buttons with the class 'drum'
const buttons = document.querySelectorAll(".drum");

// Function to handle click events
function handleClick() {
  const buttonInnerHTML = this.innerHTML; // Get the inner HTML of the clicked button

  console.log("Button clicked:", buttonInnerHTML); // Log the button's innerHTML for debugging

  let audioFile = "";

  // Determine which sound to play based on the button's innerHTML
  switch (buttonInnerHTML) {
    case "w":
      audioFile = "sounds/crash.mp3";
      break;
    case "a":
      audioFile = "sounds/kick-bass.mp3";
      break;
    case "s":
      audioFile = "sounds/snare.mp3";
      break;
    case "d":
      audioFile = "sounds/tom-1.mp3";
      break;
    case "j":
      audioFile = "sounds/tom-2.mp3";
      break;
    case "k":
      audioFile = "sounds/tom-3.mp3";
      break;
    case "l":
      audioFile = "sounds/tom-4.mp3";
      break;
    default:
      console.log("Unknown sound:", buttonInnerHTML); // Log if no matching case is found
      return; // Exit the function if no valid sound is found
  }

  console.log("Playing sound:", audioFile); // Log the sound file to be played

  // Play the selected audio file
  var audio = new Audio(audioFile);
  audio.play();
}

// Add event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
