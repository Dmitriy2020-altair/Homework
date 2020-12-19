'use strict';

const str1 = "привет 12 ываыва34 98 3423ыавыа ыгвоылво";
const str2 = "10 ываыв 8 234ы";

function getDigits(initialString) {
	return initialString.match(/(^\d+\b)|(\s\d+\s)/g);
}

console.log(getDigits(str1));
console.log(getDigits(str2));

const ip1 = "127.0.155.10";
const ip2 = "127.0.0.0";
const ip3 = "127.0т155.10";

function validationOfIp(initialIp) {

	return ((/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/).test(initialIp));
	
}

console.log(validationOfIp(ip1)); // true
console.log(validationOfIp(ip2)); // true
console.log(validationOfIp(ip3)); // false

 