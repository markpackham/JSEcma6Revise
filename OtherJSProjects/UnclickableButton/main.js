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
      buttonBox.y + (verticalOffset / verticallDistanceFrom) * 10
    );
  }
});

function setButtonPosition(left, top) {
  evilButton.style.left = `${left}px`;
  evilButton.style.top = `${top}px`;
  console.log(x, y);
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  // we want the button's center and not the edges
  return boxPosition - mousePosition + boxSize / 2;
}
