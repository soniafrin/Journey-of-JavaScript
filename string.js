// let iMe = "I am sticked with web Developing."

// let rev = iMe.split("").reverse().join("");
// console.log(rev);

// let reverse = ""
// for(let bonrno of iMe){
//     // console.log(bonrno);
//     reverse = bonrno + reverse;
//     console.log(reverse);

// }
// console.log(reverse);

// let rev = ""
// for(i = 0; i < iMe.length; i++){
//     // console.log(iMe[i]);
//     rev = iMe[i] + rev;

// }
// console.log(rev);

// let str = "i am cheking if numbers contact to string creates string";
// let num = 23456;
// num.c
// console.log( typeof "23456".concat(" ", "i am cheking if numbers contact to string creates string"));

// let str = "Mississippi";
// console.log(str.indexOf("i", 2));

// let nam = "Tanay";
// nam[0] = "t";
// console.log(nam);
// const str = "Hello";
// str[0] = "h";
// console.log(str);



// const obString = new String("Testing String");
// console.log(typeof obString);

let str = "hello world from JavaScript";
let fltr = str.filter();




// Capitalize only first Letter of a first word in a String
// let strs = "aMarxomaXr tAyDeYr";
// let words = strs.split(" ");
// let capitalFirst = words[0][0].toLocaleUpperCase() + words[0].slice(1);
// let capitalizedWord = capitalFirst + words[1];
// let result = words.join(" ");

// // console.log(capitalFirst);
// console.log(result);

// Capitalize Every first Letter of each word in a String
// let strs = "aMarxomaXr tAyDeYr";
// let words = strs.split(" ");
// let result = [];
// for(let word of words){
//     let capitalFirst = word[0].toUpperCase();
//     let rest = word.slice(1);
//     let capitalizedWord = capitalFirst + rest;
//     result.push(capitalizedWord);
//     finalResult = result.join(" ");
// }
// // console.log(typeof words);
// console.log(finalResult);





// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
// let strs = "AMarxomaXr TAyDeYr";
// let modifiedStr = "";
// for(let str of strs){
//     if(str === "x"){
//         modifiedStr = modifiedStr + "y";
//     }
//     else if (str === "X"){
//         modifiedStr = modifiedStr + "Y";
//     }
//     else{
//         modifiedStr = modifiedStr + str;
//         // modifiedStr = str + modifiedStr;
//     }
//     console.log(modifiedStr);
    
// }
// console.log(modifiedStr);

// Check whether a string contains all the vowels a, e, i, o, u
// let str = "AMarTomar TADer";
// str = str.toLowerCase();
// let vowels = ["a", "e", "i", "o", "u"];
// let isAllVowelsPresent = true;
// for(let vowel of vowels){
//     if(!str.includes(vowel)){
//         isAllVowelsPresent = false;
//         break
//     }
// }
// console.log(isAllVowelsPresent);



// count = 0;
// for(let letter of str){
//     if(letter == "a" || letter === "A"){
//         count++
//     }   
// }
// console.log(count);
// count = 0;
// countA = 0;
// for(let letter of str){
//     if(letter == "a"){
//         count++
//     }
//     else{
//         if (letter === "A"){
//             countA++
//         }
//     }
    
// }
// console.log(count, countA);
// let str = "aMarTomar TaDer";
// count = 0;
// for(let letter of str){
//     if(letter == "a" || ){
//         count++
//     }   
// }
// console.log(count);
// let count = {};
// for(let letter of str){
//     if(count[letter]){
//         count[letter] = count[letter] + 1;
//     }
//     else{
//         count[letter] = 1;
//     }
// }
// // console.log(count);

// for(let letter of str){
//     if (count[letter] > 1){
//         console.log(letter, count[letter]);
//     }
        
// }


// let str = "banana";
// let count = {};

// // Count all letters
// for (let char of str) {
//   if (count[char]) {
//     count[char] += 1;
//   } else {
//     count[char] = 1;
//   }
// }

// // Show only letters that appear more than once
// for (let char in count) {
//   if (count[char] > 1) {
//     console.log(char, count[char]);
//   }
// }

// let str = "aMarTomar TaDer";
// let count = {};

// for(let letter of str){
//     if(count[letter]){
//         count[letter] = count[letter] + 1;
//     }
//     else{
//         count[letter] = 1;
//     }
// }
// console.log(count);

// for(let char of str){
//     console.log(count[char]);
// }

// for(let i = 0; i < str.length; i++){
//     if (str.includes("x")){
//         console.log("yess! we got a")
//     }
// else{
//     console.log("a nai")
// }
// }



// console.log(str.includes("a"));

// console.log(typeof str);
// console.log(str.length);
// console.log(str[1]);
// console.log(str.toLocaleUpperCase());
// console.log(str.toLocaleLowerCase());
// console.log(str.trim());

// let num = 23456;
//  let concatStr = "i am cheking if numbers contact to string creates string";


// console.log(typeof str.concat(num));