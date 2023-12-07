function binarySearch(array, number) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let element = Math.floor((start + end) / 2);
    if (array[element] === number) {
      return `Индекс элемента: ${element}`;
    } else if (array[element] < number) {
      start = element + 1;
    } else {
      end = element - 1;
    }
  }
}

arraySearch = [1, 3, 4, 6, 7, 8, 10, 13, 14];
//numberSearch = 9;
numberSearch = 10;

if (!arraySearch.includes(numberSearch)) {
  console.log(`элемента нет в массиве`);
} else {
  console.log(binarySearch(arraySearch, numberSearch));
}
