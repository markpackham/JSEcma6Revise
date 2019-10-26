const evilButton = document.getElementById("evil-button");
const OFFSET = 100;

evilButton.addEventListener("click", () => {
  alert("Nice try buddy");
  window.close();
});

document.addEventListener("mousemove", e => {
  const x = e.pageX;
  const y = e.pageY;
  const buttonBox = evilButton.getBoundingClientRect();
  // console.log(x, y);
  // console.log(buttonBox.x, buttonBox.y);
  const horizontalDistanceFrom = distanceFromCenter(
    buttonBox.x,
    x,
    buttonBox.width
  );
  const verticalDistanceFrom = distanceFromCenter(
    buttonBox.y,
    y,
    buttonBox.height
  );
  // closer we get to the button's center the closer we hit 0 distance away
  // console.log(horizontalDistanceFrom);
  const horizontalOffset = buttonBox.width / 2 + OFFSET;
  const verticalOffset = buttonBox.height / 2 + OFFSET;

  // Shift button when getting too close
  if (
    Math.abs(horizontalDistanceFrom) <= horizontalOffset &&
    Math.abs(verticalDistanceFrom) <= verticalOffset
  ) {
    setButtonPosition(
      buttonBox.x + (horizontalOffset / horizontalDistanceFrom) * 10,
      buttonBox.y + (verticalOffset / verticalDistanceFrom) * 10
    );
  }
});

function setButtonPosition(left, top) {
  const windowBox = document.body.getBoundingClientRect();
  const buttonBox = evilButton.getBoundingClientRect();

  // have the button leap to the opposite side of the screen rather than jump off the screen entirely
  if (distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
    left = windowBox.right - buttonBox.width - OFFSET;
  }
  if (distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
    left = windowBox.left + OFFSET;
  }
  // Move button to bottom of the page if we try to steer it to the very top
  if (distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
    top = windowBox.bottom - buttonBox.height - OFFSET;
  }
  // Move button to top of the page if we push it too far to the bottom
  if (distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
    top = windowBox.top + OFFSET;
  }

  evilButton.style.left = `${left}px`;
  evilButton.style.top = `${top}px`;
  console.log(x, y);
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  // we want the button's center and not the edges
  return boxPosition - mousePosition + boxSize / 2;
}
