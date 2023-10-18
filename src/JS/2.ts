function* chunkArray(arr: Array<number>, num: number) {
  while (arr.length > num) {
    yield arr.splice(0, num);
  }
  yield arr;
}

const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(iterator.next()); // { value: [1, 2, 3], done: false }
console.log(iterator.next()); // { value: [4, 5, 6], done: false }
console.log(iterator.next()); // { value: [7, 8], done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// в циклі for...of можна витягнути результати на кожній ітерації
// for (const i of iterator) {
//   console.log(i);
// }
