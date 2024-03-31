function checkEvenOrOdd(num: number): string{
    if(num %2 === 0){
        return "Even";
    }else{
        return "Odd";
    }
}

let numberToCheck = 9;
let result = checkEvenOrOdd(numberToCheck);
console.log(numberToCheck, "is", result);
numberToCheck = 8;
result = checkEvenOrOdd(numberToCheck);
console.log(numberToCheck, "is", result);
