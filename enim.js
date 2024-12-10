function handleTouchStart(evt) {
  // Retrieve the first touch point
  const touch = evt.touches[0];

  // Retrieve the coordinates of the touch point
  const x = touch.clientX;
  const y = touch.clientY;

  // Perform some actions based on the touch event
  console.log(`Touch started at (${x}, ${y})`);
}

// Add the touchstart event listener to an element
const element = document.getElementById('myElement');
element.addEventListener('touchstart', handleTouchStart);
