class Laptop {
    constructor(info, quality) {
        this.info = info
        this.isOn = false
        this.quality = quality
    }
    get price() {
        return 800 - (this.info.age * 2) + (this.quality * 0.5)
    }
    turnOn() {
        this.isOn = true
        this.quality--
    }
    turnOff() {
        this.isOn = false
        this.quality--
    }
    showInfo() {
        return JSON.stringify(this.info)
    }
}

let info = {producer: "Dell", age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)