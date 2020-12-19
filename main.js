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

/* 
^ указываем начало строки
  (?!0)         Начало  IP не может начинаться с 0;
  (?!.*\.$)     проверяем то что IP не может заканчиваться точкой;
  (
    (
    1?\d?\d| - указываем возможные числа, может быть одно, два числа или от 100 до 199;
	25[0-5]| 2[0-4]\d) - диапазон от 250 до 255 или от 200 до 249; 
  (\.|$ - после числа должна стоять точка или конец строки;
  ){4} - квантором указываем что должно быть конкретно 4 таких повторения;
$ указываем конец строки;
 */
console.log(validationOfIp(ip1)); // true
console.log(validationOfIp(ip2)); // true
console.log(validationOfIp(ip3)); // false

 