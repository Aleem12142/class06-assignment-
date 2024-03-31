function passwordValidation(password) {
    if (password.length < 8 || password.length > 20) {
        return false;
    }
    else {
        return true;
    }
}
var password = "aleem12345";
console.log("Is password valid?", passwordValidation(password));
