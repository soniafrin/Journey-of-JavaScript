// // Task -1: Fnd the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];
// function lowestNumber(heights2){
//     let lowest = heights2[0];
//     for(let height of heights2){
//         if(height < lowest){
//             lowest = height;
//         }
//     }
//     return lowest;
// }
// console.log(lowestNumber(heights2));

// Task -2:Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
// function smallestName(heights2){
//     let smallest = [];
//     for(let height of heights2){
//         if(smallest.length === 0 || height.length < smallest.length){
//             smallest = [height];
//         }
//         else if(height.length === smallest[0].length){
//             smallest.push(height);
            
//         }
//     }

//     return smallest;
// }
// console.log(smallestName(heights2));

// Task-3: Your task is to calculate the total budget required to buy electronics:
// function calculateElectronicsBudget(laptop, tablets, mobile){
//     return laptop + tablets + mobile

// }
// let requiredBudget = calculateElectronicsBudget(35000, 15000, 20000);
// console.log(requiredBudget)

// Task-4: You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.(I have modified the problem with the last phone price with mullo.)
// const phones = [
//         { model: "PhoneA", brand: "Iphone", price: 95000 },
//         { model: "PhoneB", brand: "Samsung", price: 40000 },
//         { model: "PhoneC", brand: "Oppo", price: 26000 },
//         { model: "PhoneD", brand: "Nokia", price: 35000 },
//         { model: "PhoneE", brand: "Iphone", price: 105000 },
//         { model: "PhoneF", brand: "HTC", mullo: 48000 },
//     ];
// function findAveragePhonePrice(phones){
//     let sum = 0;
//     let count = 0;
//     for(let phone of phones){
//         if(typeof phone.price === "number"){
//          sum = sum + phone.price;
//          count = count + 1;
//         }
//         // console.log(sum);
//     }
//         return sum / count;
    
//     // console.log(phones[1]["price"])

// }
// console.log(findAveragePhonePrice(phones))

// Task -5: For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
function totalProvidingSalary(employees){
let totalSalary = 0
    for(let employee of employees){
        let totalIncrement = employee.experience * employee.increment;
        let individualSalary = totalIncrement + employee.starting
         totalSalary = totalSalary + individualSalary;
    }

return totalSalary
}
console.log(totalProvidingSalary(employees))