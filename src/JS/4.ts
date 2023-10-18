type ArrayElement1 = string;
type ArrayElement2 = string | number | boolean | NestedArray;
type ArrayElement = [ArrayElement1, ArrayElement2]; // вказуємо, що кожен елемент вхідного масиву - це кортеж конкретної структури
type NestedArray = Array<ArrayElement>;

const arrayToObject = (arr: NestedArray) => {
  let result = {};

  //в процесі перебору вхідного масива формуємо вихідний об'єкт

  arr.forEach(([key, value]) => {
    // якщо value - масив, то до нього рекурсивно викликаємо функцію arrayToObject, якщо примітив, то записуємо в об'єкт

    if (!Array.isArray(value)) {
      result[key] = value;
    } else {
      result[key] = arrayToObject(value);
    }
  });

  return result;
};

const a: NestedArray = [
  ['name', 'developer'],
  ['age', 5],
  [
    'skills',
    [
      ['html', true],
      ['css', true],
      ['js', true],
      [
        'languages',
        [
          ['english', 'intermediate'],
          ['french', 'fluent'],
          ['polish', 'fluent'],
        ],
      ],
    ],
  ],
];

console.log(arrayToObject(a));
