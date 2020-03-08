const counters = document.querySelectorAll(".counter");
// The higher the number the slower the count
const speed = 700;

counters.forEach(counter => {
  const updateCount = () => {
    // convert String to Int by using "+"
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    // inc is the increment
    const inc = target / speed;

    if (count < target) {
      // use ceil to round up avoiding decimal values
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };

  updateCount();
});
