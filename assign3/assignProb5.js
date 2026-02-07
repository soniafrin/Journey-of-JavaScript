function  analyzeText(str) {
    if(typeof str !== "string" || str === ""){
        return "Invalid"
    }
    let word = str.split(" ");
    let obj = {
        longwords: "",
        token: 0,
    };
    
    // console.log(obj["token"].length )
    for(let letter of word){
        obj["token"] = obj["token"] + letter.length;
        if(letter.length > obj.longwords.length){
            obj["longwords"] = letter;
        }  
    }
  
    return obj;

          
}
console.log(analyzeText("I am a little honest person"))
console.log(analyzeText("Hello world"))
console.log(analyzeText("Keep coding keep shining"))
console.log(analyzeText(12345))
console.log(analyzeText(""))
