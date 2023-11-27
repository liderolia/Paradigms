const array = [1, 3, 5, 7, 9, 8, 6, 4, 2];

// Императивный стиль
function sortArray(arr) {
  if (arr.length < 2) return arr;
  let tmp = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (tmp < arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return sortArray(left).concat(tmp, sortArray(right));
}

console.log(sortArray(array));

// Декларативный стиль
console.log(
  array.sort((a, b) => {
    return b - a;
  })
);
