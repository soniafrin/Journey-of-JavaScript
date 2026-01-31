// Is there any other way to access?

// how can i solve this- Loop through an object and print the key-value pairs with their types
let myObject = {
name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

console.log(myObject.citi);


// for (let key in myObject){
//     console.log(key, myObject[key],":" , typeof myObject[key]);
// }


// Count the number of properties.
// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };
// console.log(Object.keys(student).length);

// count = 0;
// for (let key in student){
//     count++
// }
//     console.log(count);

// Display the physics marks as output.
// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };
// console.log(student.physics.marks);

// For this object below add a property named passenger capacity with value 5
// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
// car.property = 5; //method 1
// car["color"] = "greay"; //method 2
// car["timing Chain"] = true; //method 2
// const key = "isMot";//method 3
// car[key] = true; //method 3.0

// const bodyProp = "isBodyChange" //method 3
// car[bodyProp] = false; //method 3.0
// Object.assign(car, {noOFOwner : 5}); //method 4
// const updateUser = {//method 5
//     car,
//     doubleKey: true,
//     country: "United Kinngdom"
// };

// console.log(updateUser);

// const user = { name: "Sonia" };

// const updatedUser = { //method 5
//   ...user,
//   age: 25,
//   country: "UK"
// };
// console.log(updatedUser);


// access the golden rod color value in output.
// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };
// let key = "golden rod";
// console.log(colors["golden rod"]);
// console.log(colors[key]);

