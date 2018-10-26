function computeManhattanDist(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  console.log(`x1: ${x1} / y1: ${y1} / x2: ${x2} / y2: ${y2}`);
  return Math.abs(x2 - x1) + Math.abs(y2 - y1);
}

function computeSteps(n: number): number {
  let currentX = 0;
  let currentY = 0;
  const moves = ["RIGHT", "UP", "LEFT", "DOWN"];
  let currentDirection = 0;

  let maxMoveLenght = 1;
  let currentMoveLenght = 0;

  for (let i = 1; i < n; i++) {
    switch (moves[currentDirection]) {
      case "RIGHT":
        currentX += 1;
        break;
      case "LEFT":
        currentX -= 1;
        break;
      case "UP":
        currentY += 1;
        break;
      case "DOWN":
        currentY -= 1;
        break;
    }
    currentMoveLenght++;
    if (currentMoveLenght === maxMoveLenght) {
      console.log(`Move ${moves[currentDirection]} of ${currentMoveLenght}`);

      currentDirection = (currentDirection + 1) % 4;
      if (moves[currentDirection] == "RIGHT") {
        maxMoveLenght++;
      }
      if (moves[currentDirection] == "LEFT") {
        maxMoveLenght++;
      }
      currentMoveLenght = 0;
    }
  }

  const computed = computeManhattanDist(0, 0, currentX, currentY);
  console.log("Manhattan for number " + n + " is " + computed);
  return computed;
}

// computeSteps(1);
const result = computeSteps(368078);
console.log(result);
