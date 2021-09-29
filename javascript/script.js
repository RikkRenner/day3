// // Conditionals 

// // FALSEY

// let falseOne = 0;
// let falseTwo = '';
// let falseThree;
// let falseFour = null;
// let falseFive = NaN;
// let falseSix = false; 

// // everything else is TRUTHY

// // IF statements (also ELSE IF & ELSE)
// let a = 0; 

// if(a == 0){
//     console.log(`success`);
// } else if(a != 2) {
//     console.log(`not 2`)
// } else {
//     console.log(`failure`)
// }

// // Ternary IF 
// let b = 1

// if(b == true)

// if (b == true) {
//     console.log(`b is true`);
// } else {
//     console.log(`b is false`);
// }

// // EQUALITY & TYPE == duck type === object equality
// b === `1` ? console.log(`yes`) : console.log('no')

// 1. Create a IF statement that satifies the following:
// * Declare a variable age
// * Write a condition that checks if age is between 18 AND 65
// * Return a value in each case where the condition is satisfied and not satisfied.
// * Extra: Consider the case where age is less than 18 - return 'underage'.

let age = 20;
let result = " "
if(age < 18) {
    result = "person is underage."
}
else if(age >= 18 || age <= 65) {
    result = "person is between 18 and 65."
} else {
    result = "person is an old git"
}

console.log(result);

// 2. Using ternary-if syntax, write code that checks if age is above 50.
age > 50 ? console.log("person is over 50") : console.log("person is 50 or under");
