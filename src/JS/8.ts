function combos(num: number) {
  function backtrack(start: number, currentCombination: any[]) {
    // якщо вхідний параметр 0, тоді результат - пустий масив
    if (start === 0) {
      result.push([...currentCombination]);
      return;
    }

    // в циклі по черзі додаємо до масиву числа від 1 до num, поки не отримаємо в сумі num.
    // Після цого додаємо масив у результат і закінчуємо цикл рекурсії

    for (
      let i = 1;
      i <= Math.min(start, currentCombination[currentCombination.length - 1] || start);
      i++
    ) {
      currentCombination.push(i);

      backtrack(start - i, currentCombination);

      currentCombination.pop();
    }
  }

  const result: Array<Array<number>> = [];
  backtrack(num, []);
  return result;
}

// Примеры использования
console.log(combos(3));
