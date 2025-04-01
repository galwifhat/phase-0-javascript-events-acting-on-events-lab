// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  let left = parseInt(dodger.style.left.replace("px", ""), 10);

  if (left > 0) {
    // Prevent moving beyond left boundary
    dodger.style.left = `${left - 10}px`;
  }
}

function moveDodgerRight() {
  let left = parseInt(dodger.style.left.replace("px", ""), 10);

  if (left < 360) {
    // Prevent moving beyond right boundary
    dodger.style.left = `${left + 10}px`;
  }
}
