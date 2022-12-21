const pageCards = document.querySelector(".page-cards");

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
}

(() => {
  createCard("Det här är den största dagen i Kims liv!");
})();
