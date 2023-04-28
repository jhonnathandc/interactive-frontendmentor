function numberActive() {
  const numbers = document.querySelectorAll(".number");

  numbers.forEach((number) => {
    number.addEventListener("click", handleClick);
  });

  function handleClick(event) {
    const containActive = event.target.classList.contains("active");

    if (!containActive) {
      numbers.forEach((numberRemove) => {
        numberRemove.classList.remove("active");
      });
    }

    event.target.classList.add("active");

    const value = event.target.value;
    selected(value);
  }
}
numberActive();

const button = document.querySelector(".btn");
const thanks = document.querySelector(".thanks");
const selectedSpan = document.querySelector(".selected");

button.addEventListener("click", activeThanks);

function activeThanks(event) {
  event.preventDefault();
  thanks.classList.add("active");
}

function selected(value) {
  selectedSpan.innerText = `You selected ${value} out of 5`;
}
