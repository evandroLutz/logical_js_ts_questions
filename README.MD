Some logical and JS/TS exercises focusing on algorithmic solutions, clean and readable code, and efficiency.  

The repository will be divided into one file/folder per question.

# Exercises

## 1) Find Duplicates in an Array
Write a JavaScript function that finds the duplicate items in any given array.

---

## 2) Async Function with Exponential Delay
Write an async JavaScript function that writes every item in any given array with 1, 2, 4, 8, etc., seconds apart.  

**Example:**  
For `["a", "b", "c", "d"]`:  
- "a" is printed 1 second after the code runs  
- "b" is printed 2 seconds after the code runs  
- "c" is printed 4 seconds after the code runs  
- "d" is printed 8 seconds after the code runs  

---

## 3) React Flex Layout
Write the necessary React code for generating the below figure (using flex).

![React Structure](assets/react_structure.png)

---

## 4) Balanced Brackets
Write an efficient method that tells us whether or not an input string brackets (`{`, `}`, `(`, `)`, `[`, `]`) opened and closed properly.  

**Examples:**  
- `{[]}` => `true`  
- `{(])}` => `false`  
- `{([)]}` => `false`  

---

## 5) Egg Drop Problem (100 Floors)
A building has 100 floors. One of the floors is the highest floor an egg can be dropped from without breaking.  

- If an egg is dropped from above that floor, it will break.  
- If it is dropped from that floor or below, it will be completely undamaged and can be dropped again.  

**Task:**  
Given two eggs, find the highest floor an egg can be dropped from without breaking, with as few drops as possible in the worst-case scenario.

---

## 6) Zeno's Paradox Animation
Write the code that animates **“Zeno's Paradox of Achilles and the Tortoise”** on an interface (we would like to see the paradox demonstrated).

---

## 7) Carrots Knapsack Problem
You have an unlimited number of carrots, but a limited number of carrot types.  
You also have one bag that can hold a limited weight. Each type of carrot has a weight and a price.  

**Task:**  
Write a function that takes `carrotTypes` and `capacity` and returns the maximum value the bag can hold.  
(Solution in **Python or JavaScript**).  

**Example:**  
```js
carrotTypes = [
  {kg: 5, price: 100},
  {kg: 7, price: 150},
  {kg: 3, price: 70}
];
capacity = 36; // kg
getMaxValue(carrotTypes, capacity); 
// Output: 1800
