function handleCommand(event, card) {
  switch (true) {
    case card.command == "next":
      onNextCard(getCardsToRemove(), card);
      break;
    case card.command.startsWith("set-prop"):
      setProp(card.command);
      onNextCard(getCardsToRemove(), card);
      break;
    default:
      console.log("Unkown command: " + command);
  }
}

function getCardsToRemove() {
  const list = [];

  for (let card of pageCards.childNodes) {
    card.classList.toggle("swipe-card-out");
    list.push(card);
  }

  return list;
}

function setProp(command) {
  const arr = command.split(" ");

  playerChoices[arr[1]] = arr[2];
}
