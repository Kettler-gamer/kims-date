function handleCommand(event, command) {
  switch (command) {
    case "next":
      const parent = event.currentTarget.parentElement;
      parent.className = "card swipe-card-out";
      onNextCard(parent);
      break;
    default:
      console.log("Unkown command: " + command);
  }
}
