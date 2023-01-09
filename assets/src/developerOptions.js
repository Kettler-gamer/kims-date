const choices = [
  { name: "clothes", value: "skunk" },
  { name: "food", value: "sandwich" },
  { name: "pickupLines", value: "true" },
  { name: "lineOne", value: "ignition" },
  { name: "lineTwo", value: "fly" },
  { name: "lineThree", value: "ignition" },
];

function setPlayerChoices() {
  for (let choice of choices) {
    playerChoices[choice.name] = choice.value;
  }
}

function speedDate() {
  setPlayerChoices();
  goToDate();
}

function jump() {
  setPlayerChoices();
  onDate = true;
  callsElement.style.display = "none";
  onNextCard(getCardsToRemove(), { newSrc: "Date/Clothes/Food/Main2" });
}
