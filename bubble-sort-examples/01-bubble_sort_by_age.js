const bubbleSortByAge = (arrayOfPeople) => {
  // Filter out objects with invalid age
  const validPeople = arrayOfPeople.filter(
    (person) => Number.isInteger(person.age) && person.age >= 0
  );
  const validPeopleLength = validPeople.length;
  let swapped;
  do {
    swapped = false;
    for (let innerIndex = 0; innerIndex < validPeopleLength - 1; innerIndex++) {
      if (validPeople[innerIndex].age > validPeople[innerIndex + 1].age) {
        // Swap elements
        [validPeople[innerIndex], validPeople[innerIndex + 1]] = [
          validPeople[innerIndex + 1],
          validPeople[innerIndex],
        ];
        swapped = true;
      }
    }
  } while (swapped);
  return validPeople;
};

module.exports = { bubbleSortByAge };
