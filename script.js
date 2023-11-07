const cards = document.querySelectorAll(".card");
const estimatesList = document.getElementById("estimates");
const revealButton = document.getElementById("reveal");
const clearButton = document.getElementById("clear");

let selectedCards = [];

cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (selectedCards.includes(card)) {
      selectedCards = selectedCards.filter((c) => c !== card);
    } else {
      selectedCards.push(card);
    }
  });
});

revealButton.addEventListener("click", () => {
  clearEstimatesList();

  for (const card of selectedCards) {
    const estimate = card.alt;
    const estimateItem = document.createElement("li");
    estimateItem.textContent = estimate;
    estimatesList.appendChild(estimateItem);
  }
});

clearButton.addEventListener("click", () => {
  clearEstimatesList();
  selectedCards = [];
});

function clearEstimatesList() {
  estimatesList.innerHTML = "";
}
