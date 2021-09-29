// // Objects, Arrays & JSON

// let animal = new Object();
// animal["name"] = "Clifford";
// animal["type"] = "Dog";
// animal["size"] = "Big"

// // console.log(animal)
// // console.log(animal.name)

// animal.colour = "Red"

// // console.log(animal);

// //Object Literal
// let vehicle = {
//     "type": "car",
//     "seats": "5",
//     "wheels": 4
// }

// console.log(vehicle);

// // OBJECTS can be stored in an ARRAY
// let garage = [
//     vehicle,
//     {"type": "bike", "seats": 1, "wheels": 2}
// ];

// // console.log(garage)

// // lets loop through an ARRAY

// let x = [1,2,3,4,5];
// let y = [15,2,-34,42,99,0]

// for(let i = 0; i < x.length; i++){
//     console.log(x[i])
// }

// // enhanced for loop
// for(let i of y) {
//     console.log(i)
// }

// // ARRAY OBJECT METHODS
// // console.log(y.revere());

// // console.log(y.join(`.-.`));

// // JSON

// let newJson = {
//     "name": "Rikk",
//     "age": 39
// }

// let MyName = JSON.parse(`{"name": "Rikk"}`);
// console.log(myName.name);

// let str = JSON.stringify(newJson);
// console.log(str);

// Exercise
// 1. Create an array with the name myArray with 2 elements hello,everyone..
// 2. Next print the length of the array
// 3. Next use the push() method to add 3 elements to the array
// 4. Next print the length of the array
// 5. Next use shift() to remove an element
// 6. Finally print the contents of the array using a for of loop.

let myArray = ["hello", "world"]
console.log(`length of array is ${myArray.length}`)

myArray.push("hola", "bonjour", "kuday");

console.log(`length of array is ${myArray.length}`)

myArray.shift();

console.log(`length of array is ${myArray.length}`)

for(let greeting in myArray) {
    console.log(myArray[greeting]);
}