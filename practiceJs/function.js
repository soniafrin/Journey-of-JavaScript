// let singaraPrice = 35;
// let totalSingara = 8;
// function sumPrice(num1, num2){
//     // console.log("total singara price is", num1 * num2);
    
// }

// sumPrice(singaraPrice);

// // sumPrice(singaraPrice, totalSingara);

// function menu(){
//     console.log("all, the, mwnus");
// }
// // menu();

// function getMenu() {
//  console.log("Burger, Pizza, Pasta");
// }
// // console.log(getMenu());
// // getMenu();

// //Task-1: Take four parameters. Multiply the four numbers and then return the result
// const numbers = [1, 2, 3, 4, 5, 6];
// function productOfNumbers(numbers){
//     let product = 1;
//     for(let num of numbers){
//         product = product * num;
//         // console.log(product)
//     }
//     return product;
// }
// const totalProduct = productOfNumbers(numbers);
// // console.log(totalProduct);

//reduce
// const numbers = [1, 2, 3, 4];
// let product = numbers.reduce((p, n) =>{
//     return p * n;
// } ,1);
// console.log(product);

// const totalProduct = numbers.reduce((product, num) => {
//   return product * num;
// }, 1);

// console.log(totalProduct);

// //fokira 
// function multFourNumbers(num1, num2, num3, num4){
//     const mult = num1 * num2 * num3 * num4;
//     return mult;

// }
// let totalMult = multFourNumbers(1, 2, 3, 4)
// // console.log(totalMult);

//debug the code with requirement and tell me where i can improve - // Task-2: Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function isOddOrEven(num){
    if(num % 2 !== 0){
        // console.log("I an odd", number, "so i multiple num by 2 and the new numer is", num)
        return num * 2;
    }
    else if (num % 2 === 0){
        // console.log("I an even", number, "so i divide num by 2 and the new numer is", num)
        return num / 2;
    }

}
const oddEven = isOddOrEven(5);
console.log(oddEven);
// isOddOrEven(38);
// isOddOrEven(0);
// isOddOrEven(25);
// isOddOrEven(12);
// isOddOrEven(73);

// Task-3: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(arrays){
    // console.log("I will always work till here, dont worry here is your", array);
    let sum = 0;
    for(let array of arrays){
        sum = sum + array;
        // console.log(sum);
    }
    let avgOfArrayValue = sum / arrays.length;
    // console.log(avgOfArrayValue);
    return avgOfArrayValue;
}
const integerAraay = [23, 14, 93, 73, 3.5, 56, 19, 39, 50, 35];
const anotherArray = [1, 2, 3, 4, 5, 6, 7, 8];
make_avg(integerAraay);
make_avg(anotherArray);
// console.log(make_avg(integerAraay));
// console.log(make_avg(anotherArray));



// // Task-4: Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
let num = 101010;
let binaryNumbers = num.toString(2);
// console.log(binaryNumbers);

function count_zero(binaryNumbers){
          let sum = 0;
    for(const binaryNUmer of binaryNumbers){
        //  console.log(binaryNUmer);
        if(binaryNUmer === "0"){
             sum = sum + 1;
            //  console.log(sum);
        }
    }
        //  console.log(sum);

    return sum;

}
let countZero = count_zero(binaryNumbers);
// console.log(countZero);

// Task-5: Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
function odd_even(value){
    if(value % 2 === 0){
        // console.log("i am even");
        return "Even";
    }
    else{
        // console.log("i am odd");
        return "Odd";
    }
}
let ifEvenOdd = odd_even(21);
// console.log(ifEvenOdd);



