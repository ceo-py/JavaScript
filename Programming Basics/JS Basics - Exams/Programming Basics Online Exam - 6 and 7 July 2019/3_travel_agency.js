function travelAgency(param) {
    let [town_name, extras, vip_packet, days_to_stay] = param.map(x => isNaN(x) ? x : Number(x));

    let total = 0;

    if (!(town_name === "Varna" || town_name === "Burgas" || town_name === "Bansko" || town_name === "Borovets") ||
        !(extras === "withEquipment" || extras === "noEquipment" || extras === "withBreakfast" || extras === "noBreakfast")) {
        console.log("Invalid input!");
    } else if (days_to_stay < 1) {
        console.log("Days must be positive number!");
    } else {
        if (days_to_stay > 7) {
            days_to_stay--;
        }

        if ((town_name === "Bansko" || town_name === "Borovets") && extras === "withEquipment" && vip_packet === "yes") {
            total = (days_to_stay * 100) - (days_to_stay * 100 * 0.10);
        } else if ((town_name === "Bansko" || town_name === "Borovets") && extras === "noEquipment" && vip_packet === "yes") {
            total = (days_to_stay * 80) - (days_to_stay * 80 * 0.05);
        } else if ((town_name === "Bansko" || town_name === "Borovets") && extras === "noEquipment" && vip_packet === "no") {
            total = (days_to_stay * 80);
        } else if ((town_name === "Bansko" || town_name === "Borovets") && extras === "withEquipment" && vip_packet === "no") {
            total = (days_to_stay * 100);
        } else if ((town_name === "Varna" || town_name === "Burgas") && extras === "withBreakfast" && vip_packet === "yes") {
            total = (days_to_stay * 130) - (days_to_stay * 130 * 0.12);
        } else if ((town_name === "Varna" || town_name === "Burgas") && extras === "noBreakfast" && vip_packet === "yes") {
            total = (days_to_stay * 100) - (days_to_stay * 100 * 0.07);
        } else if ((town_name === "Varna" || town_name === "Burgas") && extras === "noBreakfast" && vip_packet === "no") {
            total = (days_to_stay * 100);
        } else if ((town_name === "Varna" || town_name === "Burgas") && extras === "withBreakfast" && vip_packet === "no") {
            total = (days_to_stay * 130);
        }

        console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`);
    }
}

travelAgency([])