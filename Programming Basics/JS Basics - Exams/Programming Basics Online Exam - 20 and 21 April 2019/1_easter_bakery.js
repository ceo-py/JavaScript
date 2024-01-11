function easterBakery(param) {
    const [flour_kilogram, flour_kilograms, sugar_kilograms, eggshells_number, yeast_packets] = param.map(Number)
    const sugar_kg_price = flour_kilogram * 0.75;
    const eggshells_price = flour_kilogram * 1.10;
    const yeast_price = sugar_kg_price * 0.20;

    const flour_total_sum = flour_kilogram * flour_kilograms;
    const sugar_total_sum = sugar_kg_price * sugar_kilograms;
    const eggshells_sum = eggshells_price * eggshells_number;
    const yeast_sum = yeast_price * yeast_packets;

    const total_price = flour_total_sum + sugar_total_sum + eggshells_sum + yeast_sum;
    console.log(total_price.toFixed(2));
}

easterBakery([])