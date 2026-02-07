/*function signature/sample */
function finalScore (omr) {
    if(omr.right + omr.wrong + omr.skip !== 100){
        return "Invalid"
    }
    else{
        return Math.round(omr.right * 1 - omr.wrong * 1/2);
    }
  
}
console.log(finalScore({ right: 67, wrong: 23, skip: 10 }))
console.log(finalScore({ right: 80, wrong: 25, skip: 0 }))
console.log(finalScore({ right: 50, wrong: 10, skip: 40 }))
console.log(finalScore({ right: 30, wrong: 30, skip: 40 }))
console.log(finalScore("!@#"))
console.log(finalScore(["Raj"]))
   



