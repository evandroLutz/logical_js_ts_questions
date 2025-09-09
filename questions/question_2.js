// Write an async JavaScript function that prints every item in an array
// with delays of 1, 2, 4, 8, ... seconds respectively.

async function waitXSecondsToWrite(arr) {
  for (let i = 0; i < arr.length; i++) {
    const delay = 1000 * Math.pow(2, i); // use Math.pow to calculate powers of 2: 1s, 2s, 4s, 8s...
    await new Promise(resolve => setTimeout(resolve, delay));
    console.log(arr[i]);
  }
}

// mixed itens

await waitXSecondsToWrite([
  42,                // favorite number
  101,               // project ID
  6,                 // hours of coding per day
  'Robotics project in Belo Horizonte',
  'IoT app development in São Paulo',
  'Hackathon in Recife',
  true,              // homework done
  false,             // sleep enough
  true,              // coffee consumed
  { device: 'Arduino', location: 'Minas Gerais lab' },
  { device: 'Raspberry Pi', location: 'São Paulo lab' },
  { module: 'Differential Equations', completed: false }
]);

// numbers
await waitXSecondsToWrite([10, 20, 30, 40]);

// arrays of arrays
await waitXSecondsToWrite([[1, 2], [3, 4], [1, 2], [5, 6]]);
