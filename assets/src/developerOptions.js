const choices = [
  { name: "clothes", value: "costume" },
  { name: "food", value: "sandwich" },
  { name: "pickupLines", value: "true" },
  { name: "lineOne", value: "ignition" },
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
