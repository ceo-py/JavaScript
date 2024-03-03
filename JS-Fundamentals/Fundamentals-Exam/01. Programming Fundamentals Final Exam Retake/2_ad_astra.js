function adAstra([input]) {

    let pattern = /(\||#)(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
    let [match, products, totalCalories] = [pattern.exec(input), [], 0];

    while (match !== null) {
        products.push({...match.groups});
        totalCalories += Number(match.groups.calories);
        match = pattern.exec(input);
    }
    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);
    products.forEach(p => console.log(`Item: ${p.name}, Best before: ${p.date}, Nutrition: ${p.calories}`));
}