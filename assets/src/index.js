const pageCards = document.querySelector(".page-cards");
const callsElement = document.querySelector(".calls");

const playerChoices = {};
const callsStartValue = 30;
let calls,
  onDate = false;

const cardList = [
  {
    text: "Det här är den största dagen i Kims liv!",
    command: "next",
    btnName: "Nästa",
  },
  {
    text: "Han ska gå på sin första dejt någonsin!",
    command: "next",
    btnName: "Nästa",
  },
  { text: "Hon heter Wilma.", command: "next", btnName: "Nästa" },
  {
    text: "Det är lördag morgon och Kim ska förbereda sig för dejten…",
    command: "start",
    btnName: "Jag är redo!",
    newSrc: "Home/Bedroom/Main",
  },
];

let currentCardListIndex = 0;

function createCard(card, styleClass) {
  const cardContainer = document.createElement("div");
  cardContainer.className =
    styleClass != undefined ? styleClass : "card swipe-card-in";
  if (card.options != undefined) {
    if (calls == 0 && !onDate && card.ignoreLastCall == undefined) {
      goToDate();
      return;
    }
    for (let optionCard of card.options) {
      if (optionCard.condition != undefined && eval(optionCard.condition)) {
        createCard(optionCard, "card swipe-card-in option-card");
      } else if (optionCard.condition == undefined) {
        createCard(optionCard, "card swipe-card-in option-card");
      }
    }
  }
  cardContainer.innerHTML = `<p class="card-text">${card.text}</p>`;
  if (card.command != null) {
    cardContainer.innerHTML += `<button>${card.btnName}</button>`;
    cardContainer.querySelector("button").addEventListener("click", (event) => {
      handleCommand(event, card);
    });
  }
  pageCards.append(cardContainer);
}

function onNextCard(cardsToRemove, clickedCardInfo) {
  if (clickedCardInfo.newSrc != undefined) {
    const newList = fetch(
      "assets/src/card-collection/" + clickedCardInfo.newSrc + ".json"
    );
    onGettingNewList(newList);
  } else {
    currentCardListIndex++;
    createCard(cardList[currentCardListIndex]);
  }
  setTimeout(() => {
    removeCards(cardsToRemove);
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

function removeCards(cards) {
  for (let card of cards) {
    card.remove();
  }
}

function updateCalls() {
  calls--;
  calls = Math.max(calls, 0);
  callsElement.textContent = calls;
}

(() => {
  createCard(cardList[currentCardListIndex]);
})();
