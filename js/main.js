// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
// const age = +prompt("Введите ваш возраст");
// if (age >= 0 && age <= 12) {
//   console.log("ребенок");
// } else if (age > 12 && age <= 18) {
//   console.log("подросток");
// } else if (age > 18 && age <= 60) {
//   console.log("взрослый");
// } else if (age > 60 && age <= 120) {
//   console.log("пенсионер");
// } else {
//   console.log("Сомневаюсь, что ваш возраст указан верно!");
// }

// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
// switch (+prompt("Введите число от 0 до 9")) {
//   case 1: {
//     console.log("!");
//     break;
//   }
//   case 2: {
//     console.log("@");
//     break;
//   }
//   case 3: {
//     console.log("#");
//     break;
//   }
//   case 4: {
//     console.log("$");
//     break;
//   }
//   case 5: {
//     console.log("%");
//     break;
//   }
//   case 6: {
//     console.log("^");
//     break;
//   }
//   case 7: {
//     console.log("&");
//     break;
//   }
//   case 8: {
//     console.log("*");
//     break;
//   }
//   case 9: {
//     console.log("(");
//     break;
//   }
//   case 0: {
//     console.log(")");
//     break;
//   }
//   default: {
//     console.error("Wrong!");
//     break;
//   }
// }

// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
// const number = +prompt("Введите трехзначное число");
// let a = number % 10,
//   b = ((number - a) / 10) % 10,
//   c = (number - (number % 100)) / 100;
// if (a === b || a === c || b === c) {
//   console.log("есть совпадения");
// } else {
//   console.log("совпадения не найдены");
// }

// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
// const year = +prompt("Введите какой-то год!");
// year % 400 === 0 || (year % 4 === 0 && year % 100)
//   ? console.log("высокосный")
//   : console.log("не высокосный");

//---------- Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
// const number = +prompt("Введите пятиразрядное число!"),
//   number1 = (number - (number % 10000)) / 10000,
//   number2 = ((number - (number % 1000)) / 1000) % 10,
//   number5 = number % 10,
//   number4 = ((number - number5) / 10) % 10;
// if (number1 === number5 && number4 === number2) {
//   console.log("Число является палиндромом");
// } else {
//   console.log("Число не является палиндромом");
// }

// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
// const money = +prompt("Введите суму для обмена");
// switch (
//   prompt(
//     "Введите валюту в которую хотели бы сконвертировать. Формат (EUR, UAN or AZN)"
//   )
// ) {
//   case "EUR": {
//     console.log(`Euro: ${money * 0.9}`);
//     break;
//   }
//   case "UAN": {
//     console.log(`Gryvnu: ${money * 27.5}`);
//     break;
//   }
//   case "AZN": {
//     console.log(`Az.manat: ${money * 1.7}`);
//     break;
//   }
//   default: {
//     console.log("Корректо вводи плз!");
//   }
// }

// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
// const sum = +prompt("Введите сумму покупки!");
// if (sum >= 200 && sum < 300) {
//   console.log(`Сумма со скидкой: ${sum - sum * 0.03}`);
// } else if (sum >= 300 && sum < 500) {
//   console.log(`Сумма со скидкой: ${sum - sum * 0.05}`);
// } else if (sum >= 500) {
//   console.log(`Сумма со скидкой: ${sum - sum * 0.07}`);
// } else if (sum > 0 && sum < 200) {
//   console.log(`Скидки нет, возьми еще что-то!`);
// } else {
//   console.error("Wrong!");
// }

// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
// const l = +prompt("Длина окружности"),
//   p = +prompt("Периметр квадрата");
// pi = 3.14;
// if (p / 4 >= l / pi) {
//   console.log("Проходит!");
// } else {
//   console.log("НЕ проходит!");
// }

// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
// const q1 = +prompt(
//   "Ответьте на вопрос: \nВ каком году отменили крепостное право? \n1. 1852 \n2. 1861 \n3. 1882 \nОтвет вводите числом от 1 до 3"
// );
// const q2 = +prompt(
//   "Ответьте на вопрос: \nСколько областей в Украине?\n1. 22 \n2. 23 \n3. 24 \nОтвет вводите числом от 1 до 3"
// );
// const q3 = +prompt(
//   "Ответьте на вопрос: \nВ каком году было крещение Руси? \n1. 988 \n2. 932 \n3. 964 \nОтвет вводите числом от 1 до 3"
// );
// let result = 0;
// if (q1 === 2) {
//   result += 2;
// }
// if (q2 === 3) {
//   result += 2;
// }
// if (q3 === 1) {
//   result += 2;
// }
// console.log(`Ваш результат: ${result}`);

// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.
// let d = +prompt("Введите день"),
//   m = +prompt("Введите месяц"),
//   y = +prompt("Введите год");
// if (
//   (d === 30 && (m === 4 || m === 6 || m === 9 || m === 11)) ||
//   (d === 31 &&
//     (m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10)) ||
//   (d === 28 && m === 2 && !(y % 400 === 0 || (y % 4 === 0 && y % 100))) ||
//   (d === 29 && m === 2 && (y % 400 === 0 || (y % 4 === 0 && y % 100)))
// ) {
//   d = 1;
//   m += 1;
//   console.log(d, m, y);
// } else if (m === 12 && d === 31) {
//   d = 1;
//   m = 1;
//   y += 1;
//   console.log("С Новым годом!");
//   console.log(d, m, y);
// } else if (
//   d <= 0 ||
//   d > 31 ||
//   m <= 0 ||
//   m > 12 ||
//   (d === 31 && (m === 4 || m === 6 || m === 9 || m === 11))
// ) {
//   console.log("Такой даты быть не может!");
// } else {
//   d += 1;
//   console.log(d, m, y);
// }
