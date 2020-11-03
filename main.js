'use strict';

/* Задача

создать 3 объкта (objA, objB, objC) Придумать как минимум 1 свойство и 1 метод каждому объекту.

Прототипом objC дожен быть objB, а прототипом objB должен быть objA.



Реализовать цепочку протитопов с помощью Object.create.
Реализовать цепочку протитопов с помощью непосредственного изменения прототипа (__proto__, setPrototypeOf)
Реализовать цепочку протитопов с помощью функций конструкторов.
 */

class VehicleOptions {
	constructor(options) {
		this.brand = options.brand
		this.color = options.color
		this.countryProduction = options.countryProduction
	}
	vehicleDescription() {
		console.log(`${"Brand:"} ${this.brand}, ${"color is:"} ${this.color}, ${"country of origin:"} ${this.countryProduction}, ${"type of fuel:"} ${this.fuelType}`);
	}
}

VehicleOptions.prototype.showToConsole = function () {
	console.log(this);
}

class ElectricCar extends VehicleOptions {
	constructor(options) {
		super(options)
		this.fuelType = 'Electric Car'
		this.unitDrive = 'Four wheel drive'
		this.coolingSystem = 'Liquid + Air'
	}
	vehicleDescriptionTesla() {
		super.vehicleDescription()
		console.log(`${this.brand} ${"is high-tech electric car from"} ${this.countryProduction}`);
	}
}

const electricCar = new ElectricCar({
	brand: 'Tesla',
	color: 'White',
	countryProduction: 'USA',
})

ElectricCar.prototype.aboutElectricCar = function() {
	console.log('In the first half of 2019, the share of electric vehicles in the total volume of registrations in the world was 2.7%');
}

electricCar.aboutElectricCar();
electricCar.showToConsole();
electricCar.vehicleDescriptionTesla();

class DieselCar extends ElectricCar {
	constructor(options) {
		super(options)
		this.fuelType = 'Diesel'
		this.unitDrive = 'Rear drive'
		this.engine = 'Four cylinder engine'
		this.coolingSystem = 'Liquid'

	}
	vehicleDescriptionBMW() {
		super.vehicleDescription()
		console.log(`${this.brand} ${"is the best car for racing and every day from"} ${this.countryProduction}`);
	}
}

const dieselCar = new DieselCar({
	brand: 'BMW',
	color: 'Black',
	countryProduction: 'Germany',
})

DieselCar.prototype.infoAboutBMW = function () {
	console.log('BMWs offer advanced technologies, the highest level of safety, exemplary ergonomics, and the best finishing materials.');
}

dieselCar.infoAboutBMW();
dieselCar.showToConsole();
dieselCar.vehicleDescriptionBMW();

class SportBike extends DieselCar {
	constructor(options) {
		super(options)
		this.fuelType = 'GAS'
		this.unitDrive = 'Rear wheel, chain'
	}
	vehicleDescription() {
		super.vehicleDescription()
		console.log(`${this.brand} ${"One of the best sportbikes from"} ${this.countryProduction}`);
	}
}

const sportBike = new SportBike({
	brand: 'Yamaha',
	color: 'Red',
	countryProduction: 'Japan',

})

SportBike.prototype.infoAboutYamaha = function () {
	console.log('Yamaha has a rich heritage of building the most sought after supersport motorcycles designed to deliver the pinnacle of performance on and off the track.');
}

sportBike.infoAboutYamaha();
sportBike.showToConsole();
sportBike.vehicleDescription();
