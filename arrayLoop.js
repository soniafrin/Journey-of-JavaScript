// Write a JavaScript code to reverse the array colors without using the reverse method.

// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// let colors_rev = [];
// for(i = colors.length - 1; i >= 0; i--){
//     colors_rev.push(colors[i]);
// }
//     console.log(colors_rev);
// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// let colors_rev = [];
// for(i = 0; i < colors.length; i++){
//     colors_rev.unshift(colors[i]);

// }
//     console.log(colors_rev);

// let colors_rev = [];
// for(let color of colors){
//     colors_rev.unshift(color);
// }
// console.log(colors_rev);

// Write a JavaScript code to get the even numbers from an array using any looping technique.
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// let evenNum = [];
// for(let num of numbers){
//     if(num % 2 === 0){
//         evenNum.push(num);
//     }
// }
// console.log(evenNum);

// Use a for...of loop to concatenate all the elements of an array into a single string.
// const numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
// let finalStr = "";
// for(let num of numbers){
//      finalStr = finalStr.concat(num)
// }
// console.log(finalStr);

// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
// const statement = 'I am a hard working person'
// let splitState = statement.split(" ");
// let rev = [];
// for(let state of splitState){
//     rev.unshift(state);
// }
//      console.log(rev);

// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.
// let firstArray = [1, 2, 3];
// // let secArray = [...firstArray];
// let secArray = firstArray;
// // console.log(secArray);
// secArray[0] = 99;
// console.log(secArray);
// console.log(firstArray);

// Given an array of student objects, print each student’s name and marks.
let scores = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]
let result = [];
for(let score of scores){
     result.push(score.name + " " + "Scored" + " " + score.marks);
    //  nam = score.name;
    // mark = score.marks;
}
    console.log(result);

// Given a 2D array, update the value at second row first item to 99 and print the updated array.
// let array2d = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]
// array2d[1][0] = 99;
// console.log(array2d);
