const advicePlace = document.querySelector(".advice-place");
const generateBtn = document.querySelector(".btn");
const icon = document.querySelector(".icon");
const url = `https://api.adviceslip.com/advice`;

generateBtn.addEventListener("click", () => {
  advicePlace.innerText = "loading......";
  generateBtn.disabled = true;
  generateBtn.innerText = "Loading..";
  fetch(url)
    .then((res) => res.json())
    .then((data) => showData(data.slip.advice));
});
const showData = (data) => {
  advicePlace.innerText = data;

  generateBtn.disabled = false;
  generateBtn.innerText = "Generate Advice";
};
