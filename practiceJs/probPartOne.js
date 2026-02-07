// Task-1: Write a function to convert temperature from Celsius to Fahrenheit.
// function celToFa(cels){
//     return cels * 1.8 + 32;

// }
// let convertedFar = celToFa(1);
// console.log(convertedFar);

// Task-2: You are given an array of numbers. Count how many times the a number is repeated in the array.
// let nums = [5, 6, 11, 12, 98, 5]
// function countDuplicate(nums){
//         let newNums = {};
//          for(let num of nums){
//             if(newNums[num]){
//                 newNums[num] = newNums[num] + 1;
//                 // console.log(typeof newNums[num]);
//             }
//             else{
//                 newNums[num] = 1;
//             }
//             }
//             return newNums;
//          }
         
// let count_Duplicate = countDuplicate(nums);
// console.log(count_Duplicate);

// // Task-3: Write a function to count the number of vowels in a string.

// const strs = "i am loving JavaScript";
// function countVowels(strs){
//     let vowelsCount = {};
//     let vowels = "aeiou"
//     for(let str of strs.toLowerCase()){
//         if(vowels.includes(str)){
//             if(vowelsCount[str]){
//                 vowelsCount[str] = vowelsCount[str] + 1;
//             }
            
//             else{
//            vowelsCount[str] = 1;
//             // console.log(vowelsCount[str]);

//             }    
//         }
// }
//     return vowelsCount;

// }
// console.log(countVowels(strs));

// Task-4: Write a function to find the longest word in a given string.
// const theSentence =  "I am learning Programming to become a programmer";
// function longestWord(theSentence){
// let words = theSentence.split(" ");
// let lengthObject = "" ;
//     for(let word of words){
//         if(word.length > lengthObject.length){
//             lengthObject = word
//     }
   
// }
//  return lengthObject
// }
// console.log(longestWord(theSentence));

// const theSentence = "I am learning Programming to become a programmer";

// function longestWord(theSentence) {
//     let words = theSentence.split(" ");
//     let longest = "";

//     for (let word of words) {
    
//         if (word.length > longest.length) {
//             console.log(word.length);
//             longest = word;
//         }
//     }

//     return longest;
// }

// console.log(longestWord(theSentence));

// Task-5 Generate a random number between 10 to 20.
// function randomNum(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
   
//     }
// console.log(randomNum(10, 20));

// Task-4: Write a function to find the longest word in a given string.
// const theSentence =  "I am learning Programming to become a programmer";
// function longestWord(theSentence){
// let words = theSentence.split(" ");
// let lengthObject = "" ;
//     for(let word of words){
//         if(word.length > lengthObject.length){
//             lengthObject = word
//     }   
// }  return lengthObject

// }
// console.log(longestWord(theSentence));