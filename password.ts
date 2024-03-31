function passwordValidation(password: string): boolean{
    if(password.length < 8 || password.length > 20){
        return false;
    }else{
        return true;
    }
}

let password = "aleem12345";
console.log("Is password valid?", passwordValidation(password));