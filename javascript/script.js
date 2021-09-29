// let standard = `variable`;

// const constant = `variable`;

// let thisIsMyNewVariable = 1;
// let $myVariable = 2;
// let _newVar =3; 

// //Data Type

// let aBoolean =  true;
// let aNumber = 4;
// let aString =`this is a string`;
// let aBigInt = 9999999999999999n;
// let aBrokenBigInt = 999999999999999999999999;  

// console.log(aBigInt);
// console.log(aBrokenBigInt);

// let aSymbol = Symbol("decription of symbol")
// let aNull = null; 
// let anUndefined; 

// console.log(anUndefined
//             + "\r\n" + typeof(undefined)
// );

// let myObject; 

// console.log(myObject);

// myObject = {
//     key: `value`,
//     age: 29, 
//     height: 6.3, 
//     name: `Rikk`
// };

// console.log(myObject);

// //concatination
// let string1 = `2 + 2 = `
// let string2 = 2+2; 
// console.log(string1 + string2)

// //interpolation
// //console.log(`2 + 2 = ${2+2}`);


// Exercise
// 1. Use template literals in order to dynamically change the sentence
let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay = totalMoney - moneyPaidSoFar;

// Use interpolation for operations in string
console.log(`The total bill is £4000 the remaining amount of money to be paid is £${totalMoney - moneyPaidSoFar}`);

//Use variable and referance using interpolation
console.log(`The total bill is £4000 the remaining amount of money to be paid is £${totalLeftToPay}`);

