const achilles = document.getElementById("achilles");
const tortoise = document.getElementById("tortoise");

let achillesPos = 0;          // Achilles' position
let tortoisePos = 200;        // initial position of the tortoise
const tortoiseSpeed = 0.5; // constant speed of the tortoise
let step = 0;          // "round" of the paradox
let target = tortoisePos;     // current target of Achilles

function animate() {
  // The tortoise keeps moving
  tortoisePos += tortoiseSpeed;

  // if Achilles gets close enough to the target, set a new target (where the tortoise is now)
  if (achillesPos >= target - 1) {
    step++;
    target = tortoisePos;
  }

  // Achilles moves smoothly towards the target
  achillesPos += (target - achillesPos) * 0.05; // "ease out"

  // Update on screen
  achilles.style.left = achillesPos + "px";
  tortoise.style.left = tortoisePos + "px";

  if (tortoisePos < 760) { // limit space
    requestAnimationFrame(animate);
  }
}

animate();
