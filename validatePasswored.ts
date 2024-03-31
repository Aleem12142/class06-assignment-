function validatePaswword(password: string): boolean{
    // Validation criteria
    let minLength = 8;
    let upperCaseRegex = /[A-Z]/;
    let lowerCaseRegex = /[a-z]/;
    let digitRegex = /[0-9]/;
    let specialCharRegex = /[^A-Za-z0-9]/;
    // Checking criteria if passwored meets or not
    let isLengthValid = password.length >= minLength;
    let hasUpperCase = upperCaseRegex.test(password);
    let hasLowerCase = lowerCaseRegex.test(password);
    let hasDigit = digitRegex.test(password);
    let hasSpecialChar = specialCharRegex.test(password);

    return isLengthValid && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
}
// Example 
let password = "M.Aleem";
if(validatePaswword(password)){
    console.log("Password is valid.");
}else{
    console.log("Password is invalid. Please make sure it meets all its criteria.");
}
password = "M.aleem12@";
if(validatePaswword(password)){
    console.log("Password is valid.");
}else{
    console.log("Password is invalid. Please make sure it meets all its criteria.");
}