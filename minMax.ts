function findMinimum(numbers: number[]):number{
    return Math.min(...numbers);
}

function findMaximum(numbers: number[]):number{
    return Math.max(...numbers);
}

let array = [2, 6, 5, 3, 8, 9, 0, 1];
let minimum = findMinimum(array);
let maximum = findMaximum(array);
console.log("Minimum number is:", minimum);
console.log("Maximum number is:", maximum);
