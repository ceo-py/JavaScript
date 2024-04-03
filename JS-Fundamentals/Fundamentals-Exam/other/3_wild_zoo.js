function wildZoo(input) {
  const zoo = [];
  const commands = {
    Add: (animalName, neededFoodQuantity, area) => {
      const animal = zoo.find((x) => x.name === animalName);
      if (animal) {
        animal.food += neededFoodQuantity;
      } else {
        zoo.push({
          name: animalName,
          food: neededFoodQuantity,
          area,
        });
      }
    },
    Feed: (animalName, foodQuantity) => {
      const animal = zoo.find((x) => x.name === animalName);
      if (!animal) return;
      animal.food -= foodQuantity;
      if (animal.food <= 0) {
        zoo.splice(zoo.indexOf(animal), 1);
        console.log(`${animal.name} was successfully fed`);
      }
    },
  };

  let commandData = input.shift()
  while (commandData!== "EndDay") {
    const [command, data] = commandData.split(": ");
    commands[command](...data.split("-").map(x => isNaN(x)? x : Number(x)));
    commandData = input.shift();
  }
  const area = {}
  console.log('Animals:');
  zoo.forEach(a => {
    area[a.area] = area[a.area] + 1 || 1
    console.log(` ${a.name} -> ${a.food}g`)
  })
  console.log('Areas with hungry animals:');
  Object.keys(area).forEach(a => console.log(` ${a}: ${area[a]}`))

}

// wildZoo([
//   "Add: Adam-4500-ByTheCreek",
//   "Add: Maya-7600-WaterfallArea",
//   "Add: Maya-1230-WaterfallArea",
//   "Feed: Jamie-2000",
//   "EndDay",
// ]);


// wildZoo(["Add: Jamie-600-WaterfallArea",
// "Add: Maya-6570-WaterfallArea",
// "Add: Adam-4500-ByTheCreek",
// "Add: Bobbie-6570-WaterfallArea",
// "Feed: Jamie-2000",
// "Feed: Adam-2000",
// "Feed: Adam-2500",
// "EndDay"])


wildZoo(["Add: Bonie-3490-RiverArea",
"Add: Sam-5430-DeepWoodsArea",
"Add: Bonie-200-RiverArea",
"Add: Maya-4560-ByTheCreek",
"Feed: Maya-2390",
"Feed: Bonie-3500",
"Feed: Johny-3400",
"Feed: Sam-5500",
"EndDay"])