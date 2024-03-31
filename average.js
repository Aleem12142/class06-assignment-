function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    var sum = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        sum += num;
    }
    var average = sum / numbers.length;
    return average;
}
var numArray = [4, 6, 9, 10, 43, 87];
var avg = calculateAverage(numArray);
console.log("The average is: ", avg);
