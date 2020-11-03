'use strict';

function Vehicle(brand, color) {
    this.brand = brand;
    this.color = color;
}

Vehicle.prototype.vehicleInfo = function() {
    console.log(`Brand is - ${this.brand}, color - ${this.color}, model - ${this.model}.` );
}

function ElectricCar(brand, color, engine, model) {
    Vehicle.apply(this, arguments);

	this.engine = engine;
	this.model = model;
}

ElectricCar.prototype = Object.create(Vehicle.prototype);

ElectricCar.prototype.aboutElectricCar = function() {
	console.log('In the first half of 2019, the share of electric vehicles in the total volume of registrations in the world was 2.7%.');
}

const electricCar = new ElectricCar('Tesla', 'White', 'Electric', 'Model X');

console.log(electricCar);
electricCar.vehicleInfo();
electricCar.aboutElectricCar();

function SportBike(brand, color, engine, model, engineCC) {
	ElectricCar.apply(this, arguments);

	this.engineCC = engineCC;
}

SportBike.prototype = Object.create(ElectricCar.prototype);

SportBike.prototype.infoAboutYamaha = function () {
	console.log('Yamaha has a rich heritage of building the most sought after supersport motorcycles designed to deliver the pinnacle of performance on and off the track.');
}

const sportBike = new SportBike('Yamaha', 'Red', 'Gas', 'R1', '1000cc');

console.log(sportBike);
sportBike.vehicleInfo();
sportBike.infoAboutYamaha();

function DieselCar(brand, color, engine, model, engineCC, tuningCompany) {
	SportBike.apply(this, arguments);

	this.tuningCompany = tuningCompany;
}

DieselCar.prototype = Object.create(SportBike.prototype);

DieselCar.prototype.infoAboutBMW = function () {
	console.log('BMW is offer advanced technologies, the highest level of safety, exemplary ergonomics, and the best finishing materials.');
}

const dieselCar = new DieselCar('BMW', 'Blue', 'Diesel', 'M5', '3.5L', 'Alpina');

console.log(dieselCar);
dieselCar.vehicleInfo();
dieselCar.infoAboutBMW();