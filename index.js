const currCounter = document.querySelector("#number");
const incrementBtn = document.querySelector(".increment-btn");

currCounter.value = 1;

const handleIncrementClick = () => {
  currCounter.innerHTML = currCounter.value++;
  currCounter.classList.add('animate');
  setTimeout(() => {
    currCounter.classList.remove('animate');
  }, 1000);
}

incrementBtn.addEventListener("click", handleIncrementClick);
