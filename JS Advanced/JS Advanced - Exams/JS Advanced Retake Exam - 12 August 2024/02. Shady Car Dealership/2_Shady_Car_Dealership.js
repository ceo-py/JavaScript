class ShadyCarDealership {
  constructor(dealerName) {
    this.dealerName = dealerName;
    this.availableCars = [];
    this.soldCars = [];
    this.revenue = 0;
  }
  addCar(model, year, mileage, price) {
    if (model == "" || year < 1950 || mileage < 0 || price < 0) {
      throw new Error(`Invalid car!`);
    }
    this.availableCars.push({ model, year, mileage, price });
    return `New car added: ${model} (${year}) / ${mileage} km. - ${price.toFixed(
      2
    )}$`;
  }
  sellCar(model, desiredYear) {
    const car = this.availableCars.find((car) => car.model == model);
    let priceChange = 0;
    if (!car) {
      return `${model} was not found!`;
    }
    if (car.year >= desiredYear) {
      priceChange = 1;
    } else if (desiredYear - car.year <= 5) {
      priceChange = 0.9;
    } else {
      priceChange = 0.8;
    }
    this.availableCars.filter((c) => c.model != model);
    const soldPrice = car.price * priceChange;
    this.revenue += soldPrice;
    this.soldCars.push({
      model: car.model,
      year: car.year,
      mileage: car.mileage,
      soldPrice,
    });
    return `${car.model} (${car.year}) was sold for ${soldPrice.toFixed(2)}$`;
  }
  prepareCarForSale(model) {
    const car = this.availableCars.find((car) => car.model == model);
    if (!car) {
      return `${model} was not found for preparation!`;
    }
    car.mileage *= 0.5;
    car.price *= 1.3;
    return `${car.model} (${car.year}) is prepared for sale with ${
      car.mileage
    } km. - ${car.price.toFixed(2)}$`;
  }
  salesJournal(criteria) {
    if (!["year", "model"].includes(criteria)) {
      throw new Error("Invalid criteria!");
    }
    const output = [
      `${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$`,
      `${this.soldCars.length} cars sold:`,
    ];
    this.soldCars.sort((a, b) =>
      criteria === "year" ? b.year - a.year : a.model.localeCompare(b.model)
    );
    this.soldCars.forEach((car) =>
      output.push(
        `${car.model} (${car.year}) / ${
          car.mileage
        } km. / ${car.soldPrice.toFixed(2)}$`
      )
    );

    return output.join("\n");
  }
}

const dealership = new ShadyCarDealership("Shady Motors");
console.log(dealership.addCar("Honda CR-V", 2010, 120000, 15000));
console.log(dealership.addCar("VW Golf", 2011, 130000, 12000));
console.log(dealership.addCar("BMW X3", 2005, 220000, 9000));
console.log(dealership.prepareCarForSale("Honda CR-V"));
console.log(dealership.prepareCarForSale("BMW X3"));
console.log(dealership.sellCar("Honda CR-V", 2012));
console.log(dealership.sellCar("BMW X3", 2012));
console.log(dealership.salesJournal("model"));
