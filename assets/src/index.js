const pageCards = document.querySelector(".page-cards");

const cardList = [
  { text: "Det här är den största dagen i Kims liv!" },
  { text: "Han ska gå på sin första dejt någonsin!" },
  { text: "Hon heter Julia." },
  {
    text: "Det är lördag morgon och Kim ska förbereda sig för dejten…",
    newSrc: "test",
  },
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
  if (cardList[currentCardListIndex].newSrc != undefined) {
    const newList = fetch(
      "assets/src/card-collection/" +
        cardList[currentCardListIndex].newSrc +
        ".json"
    );
    onGettingNewList(newList);
  } else {
    currentCardListIndex++;
    createCard(cardList[currentCardListIndex].text);
  }
  setTimeout(() => {
    removeCard(lastCard);
  }, 250);
}

async function onGettingNewList(newList) {
  await Promise.all([newList]).then(async (response) => {
    const list = await response[0].json();
    cardList.splice(0, cardList.length);
    for (let card of list) {
      cardList.push(card);
    }
    currentCardListIndex = 0;
    createCard(cardList[currentCardListIndex].text);
  });
}

function removeCard(card) {
  card.remove();
}

(() => {
  createCard(cardList[currentCardListIndex].text);
})();
