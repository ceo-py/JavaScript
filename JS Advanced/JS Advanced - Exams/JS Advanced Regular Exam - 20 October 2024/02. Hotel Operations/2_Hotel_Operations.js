class Hotel {
  constructor(initialBudget) {
    this.initialBudget = initialBudget;
    this.roomAvailability = {};
    this.supplyStock = {};
  }

  restockSupplies(supplies) {
    const output = [];

    for (const supply of supplies) {
      const [name, quantity, price] = this.parseSupplyData(supply);

      if (this.initialBudget < price) {
        output.push(`There was not enough money to restock ${quantity} ${name}`);
        continue;
      }

      this.initialBudget -= price;
      this.updateSupplyStock(name, quantity);
      output.push(`Successfully stocked ${quantity} ${name}`);
    }

    return output.join('\n');
  }

  addRoomType(roomType, neededSupplies, pricePerNight) {
    if (this.roomAvailability[roomType]) {
      return `The ${roomType} is already available in our hotel, try something different.`;
    }

    this.roomAvailability[roomType] = {
      pricePerNight,
      neededSupplies: this.parseNeededSupplies(neededSupplies)
    };

    return `Great idea! Now with the ${roomType}, we have ${Object.keys(this.roomAvailability).length} types of rooms available, any other ideas?`;
  }

  showAvailableRooms() {
    const rooms = Object.keys(this.roomAvailability);

    if (rooms.length === 0) {
      return 'Our rooms are not ready yet, please come back later...';
    }

    return rooms
      .map(roomType => `${roomType} - $ ${this.roomAvailability[roomType].pricePerNight}`)
      .join('\n');
  }

  bookRoom(roomType) {
    const room = this.roomAvailability[roomType];

    if (!room) {
      return `There is no ${roomType} available, would you like to book another room?`;
    }

    if (!this.hasRequiredSupplies(room.neededSupplies)) {
      return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
    }

    return `Your booking for ${roomType} has been confirmed! The price is $${room.pricePerNight} per night.`;
  }

  parseSupplyData(supply) {
    return supply.split(' ').map(item => !isNaN(item) ? Number(item) : item);
  }

  updateSupplyStock(name, quantity) {
    this.supplyStock[name] = (this.supplyStock[name] || 0) + quantity;
  }

  parseNeededSupplies(supplies) {
    return supplies.reduce((acc, supply) => {
      const [name, quantity] = this.parseSupplyData(supply);
      acc[name] = quantity;
      return acc;
    }, {});
  }

  hasRequiredSupplies(neededSupplies) {
    return Object.entries(neededSupplies)
      .every(([supply, quantity]) => (this.supplyStock[supply] || 0) >= quantity);
  }
}




// class Hotel {
//   constructor(initialBudget) {
//     this.initialBudget = initialBudget;
//     this.roomAvailability = {};
//     this.supplyStock = {};
//   }
//   restockSupplies(supplies) {
//     const output = [];
//     for (const supply of supplies) {
//       const [name, quantity, price] = supply
//         .split(" ")
//         .map((item) => (!isNaN(item) ? Number(item) : item));
//       if (this.initialBudget < price) {
//         output.push(
//           `There was not enough money to restock ${quantity} ${name}`
//         );
//         continue;
//       }
//       this.initialBudget -= price;
//       if (!this.supplyStock[name]) {
//         this.supplyStock[name] = 0;
//       }
//       this.supplyStock[name] += quantity;
//       output.push(`Successfully stocked ${quantity} ${name}`);
//     }
//     return output.join("\n");
//   }
//   addRoomType(roomType, neededSupplies, pricePerNight) {
//     const output = [];
//     if (!this.roomAvailability[roomType]) {
//       this.roomAvailability[roomType] = {
//         pricePerNight,
//         neededSupplies: neededSupplies.reduce((acc, supply) => {
//           const [name, quantity] = supply
//             .split(" ")
//             .map((item) => (!isNaN(item) ? Number(item) : item));
//           acc[name] = quantity;
//           return acc;
//         }, {}),
//       };
//       output.push(
//         `Great idea! Now with the ${roomType}, we have ${
//           Object.keys(this.roomAvailability).length
//         } types of rooms available, any other ideas?`
//       );
//     } else {
//       output.push(
//         `The ${roomType} is already available in our hotel, try something different.`
//       );
//     }
//     return output.join("\n");
//   }
//
//   showAvailableRooms() {
//     const rooms = Object.keys(this.roomAvailability);
//     if (rooms.length === 0) {
//       return "Our rooms are not ready yet, please come back later...";
//     }
//     return rooms
//       .map(
//         (roomType) =>
//           `${roomType} - $ ${this.roomAvailability[roomType].pricePerNight}`
//       )
//       .join("\n");
//   }
//
//   bookRoom(roomType) {
//     if (!this.roomAvailability[roomType]) {
//       return `There is no ${roomType} available, would you like to book another room?`;
//     }
//     const room = this.roomAvailability[roomType];
//     const neededSupplies = room.neededSupplies;
//     const hasAllSupplies = Object.keys(neededSupplies).every(
//       (supply) => this.supplyStock[supply] >= neededSupplies[supply]
//     );
//     if (!hasAllSupplies) {
//       return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
//     }
//
//     return `Your booking for ${roomType} has been confirmed! The price is $${room.pricePerNight} per night.`;
//   }
// }

// let hotel = new Hotel(500);

// console.log(
//   hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"])
// );

// let hotel = new Hotel(500);

// console.log(
//   hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"])
// );

// console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));

// let hotel = new Hotel(500);

// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

// console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
// console.log(hotel.showAvailableRooms());


let hotel = new Hotel(500);

console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
console.log(hotel.showAvailableRooms());
console.log(hotel.bookRoom("Apartment"));
console.log(hotel.bookRoom("Deluxe Suite"));