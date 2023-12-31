const add = (x: number) => {
  //створюю змінну-акумулятор для зберігання проміжного результату між викликами функції
  let res = x;

  // створюю внутрішню функцію, яка додаватиме до проміжного результату нове число з наступного виклику
  // і, повертаючи саму себе, буде викликатись доти, доки будуть нові числа в дужках(нові виклики)
  const addFn = (y: number) => {
    res += y;
    return addFn;
  };

  //проводжу перетворення функції в примітив для того, щоб після останнього виклику функції
  // отримати доступ до змінної res, а не просто повернути функцію
  addFn.toString = function () {
    return res;
  };

  return addFn;
};

console.log(Number(add(1)(2))); // == 3
console.log(Number(add(1)(2)(5))); // == 8
console.log(Number(add(1)(2)(-3)(4))); //  == 4
console.log(Number(add(1)(2)(3)(4)(-5))); // == 5
