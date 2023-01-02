const choices = [
  { name: "clothes", value: "skunk" },
  { name: "food", value: "sandwich" },
  { name: "pickupLines", value: "true" },
  { name: "lineOne", value: "gorilla" },
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
