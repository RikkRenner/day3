// Iteration

// FOR loops
// create a for loop...
// declaring a variable;
// starting a condition
// declaring a 'step'

console.log("FOR loop")
for(let i = 0; i < 10; i++) {
    console.log(`i = ${i}`);
}

// WHILE loops
// work with booleans
// run until a condition is no longer here
let condition = true;
let increment = 0;

while(condition) {
    if(increment == 10){
        condition = false;
        break;
    }

    console.log(`increment = ${increment}`)
    increment++
}

// DO-WHILE loop
// The same as a while loop but runs at least ONCE
let a = false;
do {
    console.log(`This loop is running`)
} while (a);

//SWITCH cases

let num =1; 

switch(num) {
    case 0: 
        console.log(`the number is equal to 0`)
        break;
    case 1: 
        console.log(`the number is 1`)
        break;
    case 4: 
        console.log(`the number is 4`)
        break;
    case 10: 
        console.log(`reached 10`)
        break;
    default:
        console.warn(`not sure what you are doing here?`);
}

