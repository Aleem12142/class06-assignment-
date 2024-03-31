function calculateAreaOfCircle(radius: number): number{
    const pi = 3.14159;
    const area = pi * radius * radius;
    return area;
}

let radius = 6;
let area = calculateAreaOfCircle(radius);
console.log(`The area of the circle with radius ${radius} is ${area}`);
