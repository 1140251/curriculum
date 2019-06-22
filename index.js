

window.onload = function () {
  var x = false;
  var otherDate = new Date();
  var birthDate = new Date("1995-10-05");
  var years = (otherDate.getFullYear() - birthDate.getFullYear());
  if (otherDate.getMonth() < birthDate.getMonth() ||
    otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
    years--;
  }
  document.getElementById("text-age").textContent = document.getElementById("text-age").textContent.replace("{{age}}", years);
};


document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 37:
      moveLeft();
      break;
    case 39:
      moveRight();
      break;
  }
};

var speed = 10, // the box will move by 10 pixels on every step
  direction = 1; // 1 moves in the positive direction; -1 vice versa

function moveLeft() {
  var boxElement = document.getElementById('motorcycle');
  var boxLeftPos = boxElement.offsetLeft,
    boxRightPos = boxLeftPos + boxElement.offsetWidth;
  direction = -1;
  // When left side of the box goes too far - change direction:
  if (boxLeftPos < 0) {
    return;
  }
  // Recalculate position:
  boxElement.style.left = (boxLeftPos + speed * direction) + 'px';
}
function moveRight() {
  var boxElement = document.getElementById('motorcycle');
  var boxLeftPos = boxElement.offsetLeft,
    boxRightPos = boxLeftPos + boxElement.offsetWidth;
  // When right side of the box goes too far - change direction:
  if (boxRightPos > document.body.offsetWidth) {
    return;
  }
  direction = 1;
  // Recalculate position:
  boxElement.style.left = (boxLeftPos + speed * direction) + 'px';
}
