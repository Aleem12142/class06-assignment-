function findMinimum(numbers) {
    return Math.min.apply(Math, numbers);
}
function findMaximum(numbers) {
    return Math.max.apply(Math, numbers);
}
var array = [2, 6, 5, 3, 8, 9, 0, 1];
var minimum = findMinimum(array);
var maximum = findMaximum(array);
console.log("Minimum number is:", minimum);
console.log("Maximum number is:", maximum);
