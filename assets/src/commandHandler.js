function handleCommand(event, card) {
  switch (true) {
    case card.command == "next":
      onNextCard(getCardsToRemove(), card);
      break;
    case card.command.startsWith("clothes"):
      setClothes(card.command);
      onNextCard(getCardsToRemove(), card);
      break;
    default:
      console.log("Unkown command: " + command);
  }
}

function getCardsToRemove() {
  const list = [];

  for (let card of pageCards.childNodes) {
    card.className = "card swipe-card-out";
    list.push(card);
  }

  return list;
}

function setClothes(command) {
  const choice = command.split(" ")[1];

  console.log(choice);
}
