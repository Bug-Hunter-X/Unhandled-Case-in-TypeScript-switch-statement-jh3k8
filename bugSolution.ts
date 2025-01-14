function calculateArea(shape: string, width: number, height: number): number | string {
  switch (shape) {
    case "rectangle":
      return width * height;
    case "triangle":
      return width * height / 2;
    default:
      return `Invalid shape: ${shape}`; // Return informative string
  }
}

console.log(calculateArea("rectangle", 10, 5)); // 50
console.log(calculateArea("triangle", 10, 5)); // 25
console.log(calculateArea("circle", 10, 5)); // Invalid shape: circle