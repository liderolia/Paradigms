// Процедурная парадигма: вывод таблицы умножения организован в вице процедуры.
let n = prompt("Введите положительное целое число");
n = +n + 1;
function getMultiplication(n) {
  for (let j = 1; j < n; j++) {
    for (let i = 1; i < n; i++) {
      console.log(`${j} * ${i} = ${i * j}` + "\n");
    }
  }
}

getMultiplication(n);
