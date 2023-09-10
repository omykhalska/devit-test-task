// Напишите функцию deepEqual для проверки двух обьектов на идентичность

function deepEqual(x: Object, y: Object) {
  // Перевіряю на null
  if (x === null && y === null) {
    return true;
  }

  // Перевіряю, чи аргументи є об'єктами (актуально для повторних викликів функції)
  if (typeof x !== 'object' || typeof y !== 'object') {
    return false;
  }

  // отримую масиви пар "ключ, значення" для обох аргументів
  const entriesX = Object.entries(x);
  const entriesY = Object.entries(y);

  // перевіряю об'єкти на ідентичність по кількості ключів
  if (entriesX.length !== entriesY.length) {
    return false;
  }

  // в циклі перевіряю поо черзі на рівність ключі і значення
  for (let i = 0; i < entriesX.length; ++i) {
    // Ключі
    if (entriesX[i][0] !== entriesY[i][0]) {
      return false;
    }
    // Значення (якщо вони не рівні, то це можуть бути об'єкти.
    // Якщо об'єкти, то на них повторно викликаємо цю функцію. Якщо не об'єкти, то виходимо з функції)
    if (entriesX[i][1] !== entriesY[i][1]) {
      if (typeof entriesX[i][1] === 'object') {
        return deepEqual(entriesX[i][1], entriesY[i][1]);
      } else {
        return false;
      }
    }
  }

  return true;
}

console.log(deepEqual({ name: 'test' }, { name: 'test' })); // output true
console.log(deepEqual({ name: 'test' }, { name: 'test1' })); // output false
console.log(deepEqual({ name: 'test', data: { value: 1 } }, { name: 'test', data: { value: 2 } })); // output false
console.log(deepEqual({ name: 'test' }, { name: 'test', age: 10 })); // false
