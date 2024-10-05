const bubbleSort = (array) => {
  const arrayLength = array.length;
  for (let outerIndex = 0; outerIndex < arrayLength - 1; outerIndex++) {
    let swapped = false;
    for (
      let innerIndex = 0;
      innerIndex < arrayLength - outerIndex - 1;
      innerIndex++
    ) {
      if (array[innerIndex] > array[innerIndex + 1]) {
        // Swap array elements
        [array[innerIndex], array[innerIndex + 1]] = [
          array[innerIndex + 1],
          array[innerIndex],
        ];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return array;
};

module.exports = { bubbleSort };
