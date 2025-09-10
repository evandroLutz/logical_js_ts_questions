// 7) Carrots Knapsack Problem
// You have an unlimited number of carrots, but a limited number of carrot types.  
// You also have one bag that can hold a limited weight. Each type of carrot has a weight and a price.  

// **Task:**  
// Write a function that takes `carrotTypes` and `capacity` and returns the maximum value the bag can hold.  
// (Solution in **Python or JavaScript**).  

// **Example:**  
// ```js
// carrotTypes = [
//   {kg: 5, price: 100},
//   {kg: 7, price: 150},
//   {kg: 3, price: 70}
// ];
// capacity = 36; // kg
// getMaxValue(carrotTypes, capacity); 

// Carrot types: weight in kg and price
const carrotTypes = [
  { kg: 5, price: 100 },
  { kg: 7, price: 150 },
  { kg: 3, price: 70 }
];
const capacity = 36;


// Function to calculate maximum value and show step-by-step table
function getMaxValueStepByStep(carrotTypes, capacity) {
  // dp[w] will store the maximum value for weight w
  let dp = Array(capacity + 1).fill(0);

  // Loop through each possible weight
  for (let w = 1; w <= capacity; w++) {
    let choices = []; // store possible values for this weight

    // Check each carrot type
    for (let carrot of carrotTypes) {
      if (carrot.kg <= w) {
        // Value if we include this carrot
        let value = dp[w - carrot.kg] + carrot.price;
        choices.push(value);

        // Update dp[w] if this choice is better
        dp[w] = Math.max(dp[w], value);
      }
    }

    // Print the step: weight, maximum value, and choices considered
    console.log(`Weight ${w}kg: max value = ${dp[w]}, choices = [${choices.join(", ")}]`);
  }

  return dp[capacity];
}

// Run the function and see the table
console.log("Maximum value the bag can hold:", getMaxValueStepByStep(carrotTypes, capacity));

//obs: the value is 840