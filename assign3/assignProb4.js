function gonoVote(array) {
    if(!Array.isArray(array)){
        return "Invalid"
    }
    let obj = {
        na: 0,
    };
    for(let arr of array){
        if(obj.hasOwnProperty(arr)){
            obj[arr] = obj[arr] + 1
        }
        else{
            obj[arr] = 1;
        }
    }
    console.log(obj);
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


// console.log(gonoVote(["ha", "na", "ha", "na"]));
// console.log(gonoVote(["ha", "na", "na"]));
console.log(gonoVote(["ha", "ha", "ha", "ha"]));
// console.log(gonoVote("ha, na"));
// console.log(gonoVote(12345));
// let arr = { right: 67, wrong: 23, skip: 10 }
// let isIncludes = arr.includes["67"]
// console.log(arr.hasOwnProperty("right"))

    

// let ha = obj["ha"] || 0;
    // let na = obj["na"] || 0;
    // // return obj;
    // if (ha > na) {
    //     return true;
    // } 
    // else if (ha === na) {
    //     return "equal";
    // } 
    // else {
    //     return false;
    // }