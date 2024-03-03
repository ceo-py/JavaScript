function shoppingList(input) {

    let initialList = input.shift().split("!");
    let infoData = input.shift();

    while (infoData !== "Go Shopping!") {
        if (infoData.includes("Correct")) {
            const [, oldItem, newItem] = infoData.split(" ");
            if (initialList.includes(oldItem)) {
                initialList[initialList.indexOf(oldItem)] = newItem;
            }
        } else {
            const [command, item] = infoData.split(" ");
            if (command === "Urgent") {
                if (!initialList.includes(item)) {
                    initialList.unshift(item);
                }
            } else if (command === "Unnecessary") {
                if (initialList.includes(item)) {
                    initialList.splice(initialList.indexOf(item), 1);
                }
            } else if (command === "Rearrange") {
                if (initialList.includes(item)) {
                    initialList.splice(initialList.indexOf(item), 1);
                    initialList.push(item);
                }
            }
        }
        infoData = input.shift();
    }

    console.log(initialList.join(", "));

}