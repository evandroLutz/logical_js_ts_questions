// ### 5) Egg Drop Problem (100 Floors)

// A building has 100 floors. One of the floors is the highest floor an egg can be dropped from without breaking.
// If an egg is dropped from above that floor, it will break.
// If it is dropped from that floor or below, it will be completely undamaged and can be dropped again.
// Task:
// Given two eggs, find the highest floor an egg can be dropped from without breaking, with as few drops as possible in the worst-case scenario.

// Problem with simple strategies:

// - Dropping floor by floor → worst case = 100 drops

// - Using binary search → if the first egg breaks early, only 1 egg left → many drops needed


// decreasing step strategy:
// - Start with a first jump of x floors
// - Then go up x-1, x-2, ..., until 1
// Example sequence of floors to test:
// 14 → 27 → 39 → 50 → 60 → 69 → 77 → 84 → 90 → 95 → 99 → 100

//  why the first step is 14:
// - Total floors covered with decreasing steps: x + (x-1) + (x-2) + ... + 1
// - We need sum ≥ 100 to cover all floors
// - 1+2+...+13 = 91 → not enough
// - 1+2+...+14 = 105 → covers all floors
// - So first step = 14 ensures worst-case drops ≤ 14

// example:
// - Suppose real threshold = 73
// - First egg drops: 14, 27, 39, 50, 60, 69, 77 → breaks at 77
// - Threshold is between 70 and 76
// - Second egg tests 70,71,72,73 → breaks at 74
// - Result: highest safe floor = 73
// - Drops: 7 (first egg) + 4 (second egg) = 11 ≤ 14


function findThreshold() {
  let step = 14;        // first jump size
  let current = step;   // current floor to test
  let previous = 0;     // last safe floor

  // First egg: jump floors in decreasing steps
  while (current <= 100) {
    if (dropEgg(current) === "break") {
      // First egg breaks → use second egg
      // Test floors one by one between previous and current-1
      for (let floor = previous + 1; floor < current; floor++) {
        if (dropEgg(floor) === "break") {
          return floor - 1; // previous floor is highest safe
        }
      }
      return current - 1; // breaks exactly at current
    }

    // First egg didn't break → move up and reduce step
    step--;
    previous = current;
    current += step;
  }

  // If first egg never breaks, highest safe floor is top
  return 100;
}

// Mock drop function for testing
function dropEgg(floor) {
  const threshold = 73; // example highest safe floor
  return floor > threshold ? "break" : "safe";
}

// Run the function
console.log("Highest safe floor is:", findThreshold());
