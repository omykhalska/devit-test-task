type Func = (...args: any[]) => any;
type Props = [Func, any[]][];

function bulkRun(props: Props) {
  //створюю проміси для виконання кожної з функцій
  let promises = props.map(e => e[0](...e[1]));
  //чекаю виконання усіх промісів
  return Promise.all(promises);
}

const f1: Func = () => 1;
const f2: Func = a => a;
const f3: Func = (...args) =>
  new Promise(resolve => {
    setTimeout(resolve, 1000, args);
  });

bulkRun([
  [f1, []],
  [f2, [2]],
  [f3, [3, 4]],
]).then(console.log);
