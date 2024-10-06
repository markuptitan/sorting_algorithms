# Bubble Sort Implementation

## Code Explanation

For the complete code, [click here to see the code](https://github.com/markuptitan/sorting_algorithms/blob/main/01-bubble_sort.js).

### How It Works

1. **Initialization**: The function starts by determining the length of the input array and initializing a `swapped` variable to track whether any swaps occur during a pass.

2. **Outer Loop**: The `do...while` loop continues until no swaps are made in a complete pass, indicating that the array is sorted.

3. **Inner Loop**: The `for` loop iterates through the array, comparing each pair of adjacent elements. If the current element is greater than the next, they are swapped.

4. **Swapping**: The swapping of elements is accomplished using destructuring assignment, which allows for a clean and concise exchange of values.

5. **Return Value**: Once the array is sorted, the sorted array is returned.

## Time Complexity

- **Best Case**: O(n) - This occurs when the array is already sorted, resulting in a single pass through the array with no swaps.
- **Average Case**: O(n²) - On average, each element needs to be compared with every other element.
- **Worst Case**: O(n²) - This happens when the array is sorted in reverse order, requiring the maximum number of swaps.
