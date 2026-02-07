function gonoVote(array) {
    if(!Array.isArray(array)){
        return "Invalid"
    }
    let obj = {};
    for(let arr of array){
        if(obj.hasOwnProperty(arr)){
            obj[arr] = obj[arr] + 1
        }
        else{
            obj[arr] = 1;
        }
    }
    // return obj;
    if(obj["ha"] > obj["na"]){
            return true;
        }
            else if(obj["ha"] === obj["na"]){
                return "equal";
        }
            else{
                return false;
        }  
} 

console.log(gonoVote(["ha", "na", "ha", "na"]));
console.log(gonoVote(["ha", "na", "na"]));
console.log(gonoVote(["ha", "ha", "ha", "na"]));
console.log(gonoVote("ha, na"));
console.log(gonoVote(12345));
// let arr = { right: 67, wrong: 23, skip: 10 }
// let isIncludes = arr.includes["67"]
// console.log(arr.hasOwnProperty("right"))

    