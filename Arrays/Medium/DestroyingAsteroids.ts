// 2126. Destroying Asteroids

function asteroidsDestroyed(mass: number, asteroids: number[]): boolean {
  // sort it low to high

  asteroids.sort((a, b) => a - b);

  for (let i = 0; i < asteroids.length; i++) {
    if (mass >= asteroids[i]) {
      mass += asteroids[i];
      continue;
    }
    return false;
  }

  return true;
}

console.log(asteroidsDestroyed(10, [3, 9, 19, 5, 21]));
