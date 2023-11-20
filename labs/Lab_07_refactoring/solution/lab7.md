# Лабораторная работа №7

## Задание №1. level stone

```js
let firstString = prompt('var one');
let secondString = prompt('var two');

if (firstString === secondString) {
    console.log('equal');
}
else {
    console.log('not equal');
}

let thirdString = 'world';
let finalString = firstString + thirdString;
```

## Задание №2. level iron

```js
let fruits = ['apple', 'strawberry', 'blueberry', 'raspberry', 'lemon'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let i = 0; i < fruits.length; i++) {
    switch (fruits[i]) {
        case 'apple':
            console.log(`${fruits[i]} green`);
            break;
        case 'strawberry':
            console.log(`${fruits[i]} red`);
            break;
        case 'blueberry':
            console.log(`${fruits[i]} blue`);
            break;
        case 'raspberry':
            console.log(`${fruits[i]} light red`);
            break;
        case 'lemon':
            console.log(`${fruits[i]} yellow`);
            break;
    }
}
```

## Задание №3. level gold

```js
let peopleAmount, salaryAmount;

do {
    peopleAmount = prompt('Введите кол-во человек ', undefined);
    peopleAmount = parseFloat(peopleAmount);
} while (isNaN(peopleAmount));

do {
    salaryAmount = prompt('Введите зарплату на человека ', undefined);
    salaryAmount = parseFloat(salaryAmount);
} while (isNaN(salaryAmount));

alert('Затраты на ЗП: ' + peopleAmount * salaryAmount);
```

## Задание №4

```js
let students = [{
    Name: 'Петров А.А.',
    Grade: 5
},
{
    Name: 'Иванов Б.Б.',
    Grade: 3.4
},
{
    Name: 'Сидоров Г.Г.',
    Grade: 9
},
{
    Name: 'Немолодой Д.Д',
    Grade: 2
},
{
    Name: 'Молодой Е.Е',
    Grade: 3.4
}];

let averageSum = 0;
let studentsCounter = 0;
let badStudents = [];

for (let i = 0; i < students.length; i++) {
    if (students[i].Grade > 5 && students[i].Grade <= 0) {
        continue;
    }

    if (students[i].Grade < 4) {
        badStudents.push(students[i]);
    }

    averageSum += students[i].Grade;
    studentsCounter++;
}

averageSum /= studentsCounter;

console.log('Средняя оценка: ' + averageSum);
console.log('Плохие студенты:');

if (badStudents.length === 0) {
    console.log('Таких нет');
}

badStudents.forEach((student) => { console.log('Фио: ' + student.Name + '; Оценка: ' + student.Grade) });
```
