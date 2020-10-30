'use strict';

// Написать свои функции apply, bind.
// Внутри использовать только встроенную функцию call.
// Пример использования

/* function f() {
	console.log(this);
  }
  apply(f, {}, [1, 2, 3]);
  Первый параметр это функция, которую необходимо вызовать, 2й - контекст, 3й это массив аргументов, с которым функция будет вызвана.
  
  let bindedF = bind(f, {});
  
  bindedF();
 */

const user = {
	firstName: 'Dmitriy',
}
 
 function personalInfo(phone, city) {
  console.log(`Name: ${this.firstName}, Phone: ${phone}, City: ${city}`)
 }

// Нативное поведение метода bind:
// personalInfo.bind(user, '+38006679234xx', 'Odessa')();
// personalInfo.bind(user, '+38006679234xx')('Odessa');
// personalInfo.bind(user)('+38006679234xx', 'Odessa');

// Решение:
function bind(fnc, context, ...rest) {
	return function (...args) {
		return fnc.call(context, ...rest.concat(args));
	}
}

bind(personalInfo, user, '+38006679234xx', 'Odessa')();
bind(personalInfo, user) ('+38006679234xx', 'Odessa');
bind(personalInfo, user,'+38006679234xx') ('Odessa');

//Нативное поведение apply:
// personalInfo.apply(user, ['+38006679234xx', 'Odessa']);

function apply(fnc, context, args) {
	const uniqId = Date.now().toString();
	context[uniqId] = fnc;
	const result = context[uniqId](...args);
	delete context[uniqId];
	return result;
}
apply(personalInfo, user, ['+38006679234xx', 'Odessa']);
