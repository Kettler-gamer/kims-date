const pageCards = document.querySelector(".page-cards");

const cardList = [
  { text: "Det här är den största dagen i Kims liv!", command: "next" },
  { text: "Han ska gå på sin första dejt någonsin!", command: "next" },
  { text: "Hon heter Julia.", command: "next" },
  {
    text: "Det är lördag morgon och Kim ska förbereda sig för dejten…",
    command: "next",
    newSrc: "Home/Bedroom/Main",
  },
];

let currentCardListIndex = 0;

function createCard(card, styleClass) {
  const cardContainer = document.createElement("div");
  cardContainer.className =
    styleClass != undefined ? styleClass : "card swipe-card-in";
  if (card.options != undefined) {
    for (let optionCard of card.options) {
      createCard(optionCard, "card swipe-card-in option-card");
    }
  }
  cardContainer.innerHTML = `<p class="card-text">${card.text}</p>`;
  if (card.command != null) {
    cardContainer.innerHTML += `<button>Next</button>`;
    cardContainer.querySelector("button").addEventListener("click", (event) => {
      onNextClick(event, card.command);
    });
  }
  pageCards.append(cardContainer);
}

function onNextClick(event, command) {
  console.log(command);
  handleCommand(event, command);
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
    createCard(cardList[currentCardListIndex]);
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
    createCard(cardList[currentCardListIndex]);
  });
}

function removeCard(card) {
  card.remove();
}

(() => {
  createCard(cardList[currentCardListIndex]);
})();
