// Console log
console.log("Hello World!");

//Different kinds of console logging
const msg = 'this is a message ';

//General log
console.log(msg);

//Info Message
console.info(msg);

//Warning message
console.warn(msg);

//Error message
console.error(msg);

//Make console log look unique with HTML/CSS
console.log(`%c` + msg, `color: black; background-color: white; font-size 20px; padding: 5px;`);

console.log(`%c` + msg + `%c` + msg, `color:red;`, `color:green;`);

const msgExercise = 'This is a message for the exercises! '

//Exercise 1
console.log(`Exercise 1`);
console.log(`First Name: Richard`);
console.log(`Second Name: Renshaw`);
console.log(`From: Manchester`);
console.log(`StarSign: Aries`);

//Exercise 2
console.log(`Exercise 2`);
console.log(`%c` + msgExercise, `color: orange; font-weight: bold; font-family: fantasy; background-color: black; padding: 10px;`);













