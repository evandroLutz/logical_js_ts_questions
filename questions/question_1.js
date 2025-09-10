// Write a function that takes an array of numbers as input and returns an array of all the duplicate numbers found in the input array.

function findDuplicates(arr) { // here i will be suposed that arr can be an array of primitives or simple objects
  const duplicates = new Set();
  const checkeds = new Set();

  for (let item of arr) {
    const key = typeof item === 'object' && item !== null ? JSON.stringify(item) : item; // if item is an object, convert it to a string for comparison
    if (checkeds.has(key)) {
      duplicates.add(key);
    } else {
      checkeds.add(key);
    }
  }

  return Array.from(duplicates).map(item => {
    try {
      return JSON.parse(item); // try to parse back to object if it was an object
    } catch {
      return item; // if parsing fails, return the item without parse
    }
  });
}

// Example usage:
console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1]));
console.log(findDuplicates(['goku', 'gohan', 'gohan', 'vegeta', 'bills', 'vegeta']));
console.log(findDuplicates([{x:1}, {y:2}, {x:1}, {z:3}, {y:2}]));