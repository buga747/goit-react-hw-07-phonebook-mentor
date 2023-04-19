export function shuffleItemsForExam(arr) {
  const result = [];
  const numItems = Math.min(arr.length, 10); // Limit to 10 items if array length is greater than 10
  const usedIndexes = new Set(); // Keep track of used indexes to avoid duplicates

  while (result.length < numItems) {
    const randomIndex = Math.floor(Math.random() * arr.length); // Get random index
    if (!usedIndexes.has(randomIndex)) {
      // Check if index has been used before
      result.push(arr[randomIndex]); // Add element to result array
      usedIndexes.add(randomIndex); // Add index to usedIndexes set
    }
  }

  return result;
}
