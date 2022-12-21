const pageCards = document.querySelector(".page-cards");

const cardList = [
  { text: "Det här är den största dagen i Kims liv!" },
  { text: "Han ska gå på sin första dejt någonsin!" },
  { text: "Hon heter Julia." },
  { text: "Det är lördag morgon och Kim ska förbereda sig för dejten…" },
];

let currentCardListIndex = 0;

function createCard(text) {
  const card = document.createElement("div");
  card.className = "card swipe-card-in";
  card.innerHTML = `
    <p class="card-text">${text}</p>
    <button onclick="onNextClick(event)">Next</button>
    `;
  pageCards.append(card);
}

function onNextClick(event) {
  const parent = event.currentTarget.parentElement;
  parent.className = "card swipe-card-out";
  onNextCard(parent);
}

function onNextCard(lastCard) {
  currentCardListIndex++;
  createCard(cardList[currentCardListIndex].text);
  setTimeout(() => {
    removeCard(lastCard);
  }, 250);
}

function removeCard(card) {
  card.remove();
}

(() => {
  createCard(cardList[currentCardListIndex].text);
})();
