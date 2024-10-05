const bubbleSort = (array) => {
  const arrayLength = array.length;
  let swapped;
  do {
    swapped = false;
    for (let innerIndex = 0; innerIndex < arrayLength; innerIndex++) {
      if (array[innerIndex] > array[innerIndex + 1]) {
        // Swap elements
        [array[innerIndex], array[innerIndex + 1]] = [
          array[innerIndex + 1],
          array[innerIndex],
        ];
        swapped = true;
      }
    }
  } while (swapped);

  return array;
};

module.exports = { bubbleSort };
