function validatePaswword(password) {
    // Validation criteria
    var minLength = 8;
    var upperCaseRegex = /[A-Z]/;
    var lowerCaseRegex = /[a-z]/;
    var digitRegex = /[0-9]/;
    var specialCharRegex = /[^A-Za-z0-9]/;
    // Checking criteria if passwored meets or not
    var isLengthValid = password.length >= minLength;
    var hasUpperCase = upperCaseRegex.test(password);
    var hasLowerCase = lowerCaseRegex.test(password);
    var hasDigit = digitRegex.test(password);
    var hasSpecialChar = specialCharRegex.test(password);
    return isLengthValid && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
}
// Example 
var password = "M.Aleem";
if (validatePaswword(password)) {
    console.log("Password is valid.");
}
else {
    console.log("Password is invalid. Please make sure it meets all its criteria.");
}
password = "M.aleem12@";
if (validatePaswword(password)) {
    console.log("Password is valid.");
}
else {
    console.log("Password is invalid. Please make sure it meets all its criteria.");
}
