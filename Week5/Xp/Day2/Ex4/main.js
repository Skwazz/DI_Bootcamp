let userInput = document.forms[0];
userInput.addEventListener("submit", (e) => {
  e.preventDefault();
  let r = userInput.radius.value;
  let volume = userInput.volume.value;
  userInput.radius.value = "";
  userInput.volume.value = (4 / 3) * 3.1415926535 * (r * r * r);
});
