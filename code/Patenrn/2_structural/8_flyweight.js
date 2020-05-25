class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price
    }
}

class CarFactory {
    constructor() {
        this.cars = [];
    }

    getCar(model) {
        return this.cars.find(car => car.module === model)
    }

    create(model, price) {
        const candidate = this.getCar(model);
        if (candidate) {
            return candidate
        }

        const newCar = new Car(model,price);
        this.cars.push(newCar);
        return newCar
    }
}

const factory = new CarFactory();

const bmwX5 = factory.create("bmw", 10000);
const bmwX3 = factory.create("bmw", 10000);
const audi = factory.create("A8", 12000);
console.log(bmwX5);
console.log(bmwX3);
console.log(audi);
