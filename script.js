const addBtn = document.getElementById("addBtn");
const userInput = document.getElementById("userInput");
const output = document.getElementById("output");

addBtn.addEventListener("click", () => {
  const value = userInput.value;

  // UNSAFE on purpose, for testing
  output.innerHTML = value;
});
