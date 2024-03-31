function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
var numberToCheck = 9;
var result = checkEvenOrOdd(numberToCheck);
console.log(numberToCheck, "is", result);
numberToCheck = 8;
result = checkEvenOrOdd(numberToCheck);
console.log(numberToCheck, "is", result);
