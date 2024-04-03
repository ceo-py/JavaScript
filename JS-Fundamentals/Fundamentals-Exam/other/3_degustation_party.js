function degustationParty(params) {
  const party = { };
  let unLiked = 0;
  const commands = {
    Like: (guest, meal) => {
      if (!party.hasOwnProperty(guest)) {
        party[guest] = [meal];
      } else if (!party[guest].includes(meal)) {
        party[guest].push(meal);
      }
    },
    Dislike: (guest, meal) => {
      if (!party.hasOwnProperty(guest)) {
        console.log(`${guest} is not at the party.`);
        return;
      }
      if (!party[guest].includes(meal)) {
        console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
        return;
      }
      party[guest].splice(party[guest].indexOf(meal), 1);
      unLiked++;
      console.log(`${guest} doesn't like the ${meal}.`);
    },
  };

  let commandsData = params.shift();

  while (commandsData !== "Stop") {
    const [command, ...data] = commandsData.split("-");
    commands[command](...data);
    commandsData = params.shift();
  }
  Object.entries(party).forEach(([key, value]) => {
    console.log(`${key}: ${value.join(", ")}`);
  });
  console.log(`Unliked meals: ${unLiked}`);
}

// degustationParty([
//   "Like-Krisi-shrimps",
//   "Like-Krisi-soup",
//   "Like-Penelope-dessert",
//   "Like-Misho-salad",
//   "Stop",
// ]);

// degustationParty(["Like-Krisi-shrimps",
// "Dislike-Vili-carp",
// "Dislike-Krisi-salad",
// "Stop"])

degustationParty(["Like-Katy-fish",
"Dislike-Katy-fish",
"Stop"])
