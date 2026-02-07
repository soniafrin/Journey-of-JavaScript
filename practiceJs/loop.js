// for (let i = 0; i <5; i =+3){
//     console.log(i);
// }

// for (let i = 0; i < 5; i+=3) {
//  console.log(i);
// }

// let n = 0;

// while (n < 5){
//     console.log(n);
//     n++;
// }



// let greetings = "hello gelo";
// for (i = 1; i <= 5; i++){
//     console.log(greetings);
// }

// const myCommitment = "I will invest at least 6 hrs every single day for next 60 days!";

// for (i = 1; i <= 60; i++){
//     console.log(myCommitment);
// }


// for (i = 61; i <= 100; i++){
//         console.log(i + 2); 
// }

// for (i = 61; i <= 100; i+= 2){
//         console.log(i); 
// }

// for (i = 61; i <= 100; i++){  
//     if (i % 2 !== 0){
//         console.log(i);
//     } 
// }

// let n = 1;
// while (n <= 10){
//     console.log(n);
//     n+= 2;
//     // console.log(n);
// }


// let oddArray = [];

// for (i = 61; i <= 100; i++){
//     if (i % 2 !== 0){
//         // console.log(i);
//         oddArray.push(i)
//     }
    
// }
// console.log(oddArray)

 
// let i = 78;
// while (i <= 98){
//     if (i % 2 === 0){
//         console.log(i);
//     }
//     i++;
// }

// for (i = 78; i <= 98; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }

// let evenArray = [];

// for (i = 78; i <= 98; i++){
//     if (i % 2 === 0){
//         evenArray.push(i);
//         console.log(i);
//     }
// }
// console.log(evenArray);



// let total = 0;
// for (i = 91; i <= 129; i++){
//     if (i % 2 !== 0){
//     // console.log(i);
//         total = total + i;
//     }
// }
//     console.log(total);


// let sum = 0;
// let even = 51;

// while (even <= 85){
//     if (even % 2 === 0){
//         sum = sum + even;
//         // console.log(sum);
//     }
//      even++
//     // console.log(even);  

// }
//         console.log(sum);


// let mul = 9;
// for ( num = 1; num <= 10; num++){
//         let mult = mul * num;

//     console.log(mult);
// }

// for (i = 81; i >= 65; i-- ){
//     console.log(i);
// }


//*********BREAK*******//
// for (let i = 1; i <= 200; i++){
    
//     if (i === 100)
//         break;
//     console.log(i);
// }

// let num = 1;
// let sum = 0;
// while (num <= 10000 ){
//     sum = sum + num;
//     if (sum >= 100)
//     break;
//     num++
// }
//     console.log(sum);

// for (i = 1; i <= 10; i++){

//     if (i === i)
//     console.log(i)
// }



//*********CONTINUE*******//

// for ( i = 61; i <= 100; i++){
//     if (i % 2 == 0){ 
//         continue;}
//         console.log(i)
// }



// for ( i = 61; i <= 100; i++){
//     if (i % 2 == 0) 
//         continue;
//         console.log(i)
// }

// *****
// for (let i = 61; i <= 100; i++) {
//     if (i % 2 === 0) continue;
//     console.log(i);
// }

// ****
// let oddArray = [];
// for (i = 61; i <= 100; i++){
//     if (i % 2 === 0)
//         continue;
//         // oddArray.push(i)
//      console.log(i)
// }
// console.log(oddArray);

// *****
// const array = [1, 2, 3, 4, 5, 6, 7];
// for (i = 1; i <= array.length; i++){
//     if (i == 5){
//         continue;
//     }
//     console.log(array[i]);

// ******
// let evenArray = [];
// for (i = 78; i <= 98; i++){
//     if (i % 2 !== 0)
//         continue;
    
//     evenArray.push(i);
//     console.log(i);
// }
// console.log(evenArray);

// for (i = 1; i <= 40; i++){
//     if (i % 2 !== 0){
//         continue;}
    
//     console.log(i);
// }

// for ( i = 61; i <= 100; i++){
//     if (i % 2 == 0){ 
//         continue;}
//         console.log(i)
// }

// for (let i = 1; i <= 20; i++){
//     if (i % 2 !== 0){
//         // console.log(i)
//         if (i % 5 == 0 ){
//             continue;}
//             console.log(i);
//     }
// }



// for (let i = 1; i <= 10; i++){
//     let sqrt = Math.sqrt(i);
//     if (Number.isInteger(sqrt) && sqrt !== 1){
//         console.log(i);
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) { 
//     let sqrt = Math.sqrt(i);

//     if (Number.isInteger(sqrt) && sqrt !== 1) {
//         break;
//     }

//     console.log(i);
// }

// for (i = 1; i <= 100; i++){
//     if (i === 1){
//         continue;
//     }
//     let sqrt = Math.sqrt(i);
  
//         if (Number.isInteger(sqrt)){
//             console.log(i);
//             break;
//         }
// }


// for (let i = 1; i <= 100; i++){
//     if (i !== 1 && Number.isInteger(Math.sqrt(i))){
//         console.log("Yeeee!!! I got the root", ":", i);
//         break;
//     }
// }
