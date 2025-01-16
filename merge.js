function mergeSort(list) {
  if (list.length === 0) {
    return [];
  }

  if (list.length === 1) {
    return list;
  }

  const half = list.length / 2;
  const leftList = mergeSort(list.slice(0, half));
  const rightList = mergeSort(list.slice(half, list.length));
  const mergedList = [];

  for (;;) {
    if (leftList.length === 0) {
      rightList.forEach((num) => mergedList.push(num));
      break;
    }

    if (rightList.length === 0) {
      leftList.forEach((num) => mergedList.push(num));
      break;
    }

    if (leftList[0] < rightList[0]) {
      mergedList.push(leftList.shift());
    } else {
      mergedList.push(rightList.shift());
    }
  }

  return mergedList;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
