function calculateAreaOfCircle(radius) {
    var pi = 3.14159;
    var area = pi * radius * radius;
    return area;
}
var radius = 6;
var area = calculateAreaOfCircle(radius);
console.log("The area of the circle with radius ".concat(radius, " is ").concat(area));
