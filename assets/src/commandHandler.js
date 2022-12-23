function handleCommand(event, card) {
  switch (true) {
    case card.command == "next":
      if (!isNaN(calls)) {
        updateCalls();
      }
      onNextCard(getCardsToRemove(), card);
      break;
    case card.command.startsWith("set-prop"):
      updateCalls();
      setProp(card.command);
      onNextCard(getCardsToRemove(), card);
      break;
    case card.command.startsWith("start"):
      onStart();
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

function onStart() {
  calls = callsStartValue;
  callsElement.textContent = calls;
}
