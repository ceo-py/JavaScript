function mobileOperator(param) {
    const [contract_term, contract_type, mobile_internet, mounts_to_pay] = param.map(x => isNaN(x)? x: Number(x))

    let tax_to_pay = 0;
    let discount_two_year_contract = 1;

    if (contract_term === "one") {
        switch (contract_type) {
            case "Small":
                tax_to_pay = 9.98;
                break;
            case "Middle":
                tax_to_pay = 18.99;
                break;
            case "Large":
                tax_to_pay = 25.98;
                break;
            case "ExtraLarge":
                tax_to_pay = 35.99;
                break;
        }
    } else if (contract_term === "two") {
        switch (contract_type) {
            case "Small":
                tax_to_pay = 8.58;
                break;
            case "Middle":
                tax_to_pay = 17.09;
                break;
            case "Large":
                tax_to_pay = 23.59;
                break;
            case "ExtraLarge":
                tax_to_pay = 31.79;
                break;
        }
    }

    if (mobile_internet === "yes") {
        if (tax_to_pay <= 10) {
            tax_to_pay += 5.50;
        } else if (tax_to_pay <= 30) {
            tax_to_pay += 4.35;
        } else if (tax_to_pay > 30) {
            tax_to_pay += 3.85;
        }
    }

    if (contract_term === "two") {
        discount_two_year_contract = 0.9625;
    }

    const total_price_to_pay = (tax_to_pay * mounts_to_pay) * discount_two_year_contract;

    console.log(`${total_price_to_pay.toFixed(2)} lv.`);

}

mobileOperator([])