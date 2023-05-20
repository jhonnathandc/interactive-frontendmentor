function numberClickHandlers() {
  const numbers = document.querySelectorAll(".number");

  numbers.forEach((number) => {
    number.addEventListener("click", handleNumberClick);
  });

  function handleNumberClick(event) {
    const containActive = event.target.classList.contains("active");

    if (!containActive) {
      numbers.forEach((numberRemove) => {
        numberRemove.classList.remove("active");
      });
    }

    event.target.classList.add("active");

    const value = event.target.value;
    updateSelectedValue(value);
  }
}

function updateSelectedValue(value) {
  const selectedSpan = document.querySelector(".selected");
  selectedSpan.innerText = `You selected ${value} out of 5`;
}

function setupButton() {
  const button = document.querySelector(".btn");
  const thanks = document.querySelector(".thanks");

  button.addEventListener("click", handleButtonClick);

  function handleButtonClick(event) {
    event.preventDefault();
    thanks.classList.add("active");
  }
}

numberClickHandlers();
setupButton();
