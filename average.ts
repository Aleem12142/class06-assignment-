function calculateAverage(numbers: number[]): number{
    if(numbers.length === 0){
        return 0;
    }
    let sum = 0;
    for(const num of numbers){
        sum += num;
    }
    let average = sum / numbers.length;
    return average;
}

let numArray = [4, 6, 9, 10, 43, 87];
let avg = calculateAverage(numArray);
console.log("The average is: ", avg);