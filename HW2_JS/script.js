//Задание 1

// let num1 = prompt("Введите число a: ")
// let num2 = prompt("Введите число b: ")

// if (num1 <= 1 && num2 >= 3) {
//     console.log("Верно число")
// } else {
//     console.log("Неверно!")
// }

//Задание 2

// let test = true;
// console.log = (test === true ? '+++' : '---');

//Задание 3

// let day = prompt("Введите число от 1 до 31");

// if (day <= 10) {
//     console.log("Первая декада месяца");
// } else if (day > 10 && day <= 20) {
//     console.log("Вторая декада месяца");
// } else if (day > 20 && day <= 31) {
//     console.log("Третья декада месяца");
// }

//Задание 4
let userInput = parseInt(prompt("Введите число: "));

let hundreds = Math.floor(userInput / 100);
let tens = Math.floor((userInput % 100) / 10);
let units = userInput % 10;

console.log(`В числе ${userInput} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}`);