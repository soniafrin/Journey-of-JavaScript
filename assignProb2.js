function validOtp(otp) {
    // otp = "jgjgj";
    if(typeof otp !== "string"){
        return "invalid"
    }
    else if(otp.length === 8 && otp.startsWith("ph-")){
        return true

    }
    else{
        return false;
    }

}

console.log(validOtp("ph-10985"))
console.log(validOtp("ph-1234"))
console.log(validOtp("abc-12345"))
console.log(validOtp(["ph-10985"]))
console.log(validOtp(12345678))


// console.log(Number(["ph-10985"]))

// console.log(Math.ceil(Math.random() * 10))
