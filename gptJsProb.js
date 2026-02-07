// let sentncs = "I am learning JS and I am enjoying JS";
// function countDuplicateWords(sentncs){
//     let sentncsArray = sentncs.split(" ");
//     // console.log(sentncsArray);
//     // let count = 0;
//     let duplicateObj = {};
//     for(let sentnc of sentncsArray){
//         // console.log(sentnc);
//         if(duplicateObj.hasOwnProperty(sentnc)){
//             duplicateObj[sentnc] = duplicateObj[sentnc] + 1;
//         }
//         else{
//             duplicateObj[sentnc] = 1;
//         }
//     }
//     return duplicateObj;
// }
// console.log(countDuplicateWords(sentncs))
// countDuplicateWords(sentncs)

// here is my countDuplicateWords. Please debug and review and tell me where can i improve also tell me other possible ways to do

const employees = [
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
   { name: "shahin", experience: 5, starting: 20000, increment: 5000 }
];
function analyzeEmployees(employees){
    let analyze_employees = {
        totalSalary: 0,
        highestPaid: "",
    }
    // let highestPaid = analyze_employees.highestPaid;
    let sum = 0;
    let highestSalary = 0;
    for(let employee of employees){
        let currentSalary = employee.starting + (employee.experience * employee.increment);
        // console.log(currentSalary)
        sum = sum + currentSalary;
        analyze_employees.totalSalary = sum;

        // console.log(totalSalary)
         if( currentSalary > highestSalary){
        highestSalary = currentSalary;
        // highestSalary = employee.name
        analyze_employees.highestPaid =  employee.name;;


        // console.log(highestSalary);
    }
    }
     
    return analyze_employees;

}
// analyzeEmployees(employees)
console.log(analyzeEmployees(employees))