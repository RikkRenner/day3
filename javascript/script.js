// // Iteration

// // FOR loops
// // create a for loop...
// // declaring a variable;
// // starting a condition
// // declaring a 'step'

// console.log("FOR loop")
// for(let i = 0; i < 10; i++) {
//     console.log(`i = ${i}`);
// }

// // WHILE loops
// // work with booleans
// // run until a condition is no longer here
// let condition = true;
// let increment = 0;

// while(condition) {
//     if(increment == 10){
//         condition = false;
//         break;
//     }

//     console.log(`increment = ${increment}`)
//     increment++
// }

// // DO-WHILE loop
// // The same as a while loop but runs at least ONCE
// let a = false;
// do {
//     console.log(`This loop is running`)
// } while (a);

// //SWITCH cases

// let num =1; 

// switch(num) {
//     case 0: 
//         console.log(`the number is equal to 0`)
//         break;
//     case 1: 
//         console.log(`the number is 1`)
//         break;
//     case 4: 
//         console.log(`the number is 4`)
//         break;
//     case 10: 
//         console.log(`reached 10`)
//         break;
//     default:
//         console.warn(`not sure what you are doing here?`);
// }

// Flow 1: 
let a = 100; 
// while(a <= 200) {
//     console.log(`a is ${a}`);
//     a++
// }

for(a; a <= 200; a++){
    console.log(`a is ${a}`);
    a++
}

// Flow 2: 
let b = 100; 
// while(b <= 200) {
//     if(b % 2 == 0){
//         console.log("-");
//     } else {
//         console.log("*");
//     }    
//     b++
// }

for(b; b <= 200; b++) {
    if(b % 2 == 0){
        console.log("-");
    } else {
        console.log("*");
    } 
}

//Flow 3
let printedAmount = 10;
for(let i = 0; i <= printedAmount; i++){
    console.log(`PRINT OUT ${i}`)
    for(let j = 0; j <=10; j++){
        console.log(`j = ${j}`)
    }
}

let day = "wednesday";

switch(day) {
    case "monday":
        console.log("Monday");
    case "tuesday":
        console.log("tuesday");
    case "wednesday":
        console.log("wednesday");
    case "thursday":
        console.log("thursday");
    case "friday":
        console.log("friday");
        break;
    case "saturday":
        console.log("saturday");
        break;
    case "sunday":
        console.log("sunday");
        break;
    default:
        console.log("No Such Day You Moron?");
}







