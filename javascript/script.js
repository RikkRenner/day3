// // FUNCTIONS

// function funcName(arg1, arg2, arg3) {
//     // execute some code
// };

// let x = sum(3,5);

// function sum(a,b) {
//     return a + b;
// }

// //console.log(x);

// let welcome = function(fullName) {
//     console.log(`hello ${fullName}`);
// }

// //welcome();

// let welcomeTwo = () => {
//     console.log(`hello two`);
// }

// //welcomeTwo();

// welcomeThree = () => console.log(`hello three`);

// //welcomeThree();

// welcomeName = fullName => console.log(`hello ${fullName}`);

// welcomeName(`Rikk`);

// 1. Create a function that takes in 2 parameters num1 and num2 and subtracts the two numbers.
// 2. Create a function expression called welcome that take in name and age as a parameters. The outcome should be like so:
// e.g. "My name is Cameron, i am 28 years old"

// 3. Create an arrow function called powerUp that takes in two values n1 and n2. The arrow function will return the power of the two numbers.
// e.g:
// * n1=2, n2=3 will return 8 (2 x 2 x 2);
// * n1=3, n2=3 will return 27 (3 x 3 x 3);
// -> hint use Math.pow(

subtraction = (num1, num2) => {
    return num1 - num2;
}

console.log(subtraction(5,3))

welcome = (name, age) => {
    return `my name is ${name} & I am ${age} years old`
}

console.log(welcome("Rikk", 39))

powerUp = (n1, n2) => {
    return Math.pow(n1, n2);
}

console.log(powerUp(2,3))
console.log(powerUp(3,3))