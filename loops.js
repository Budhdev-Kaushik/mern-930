// for (let i = 0; i <= 50; i++) {
//      console.log('counting with for loop', i);

// };

// let i = 99;
//while (i <= 100 ) {
//     console.log('counting using while loop', i);
//     i++;
//};

//let i = 1, n = 5;

//while (i <= n) {
//  console.log(i);
//  i++;
//}

// let i = 1;
// const n = 5;

// do {
//     console.log(i);
//     i++;
// } while (i <= n);

// //using break statement in nasted for loop

// for (let i = 1; i <= 3; i++) {

//     for (let j = 1; j <= 3; j++) {
//         if (i == 2.5) {
//             break;
//         }
//         console.log(`i = ${i}, j = ${j}`);
//     }

// };

// // using continue statement in nasted for loop

// for (let i = 0; i <= 5; i++){
//     if(i == 3){
//         continue;
//     }
//     console.log(i);
// }

/* Calculate Positive Number:

program to calculate positive numbers only
if the user enters a negative number, that number is skipped from calculation

negative number -> loop terminate
non-numeric character -> skip iteration
*/

// let sum = 0;
// let number = 0;
// while(number >= 0){
//     sum += number;
//     //take input from the user

//     number = parseInt(prompt('Enter a number'));

//     // contiue condition
//     if(isNaN(number)){
//         console.log('You entered a String');
//         number = 0; // the value of a number is make 0 again
//         continue;
//     }
// }

// // display the sum
// console.log(`The sum is ${sum}.`);

/* Switch statement: used for decision making */

// let a = 2;

// switch (a) {
//     case 1 :
//           a = 'One';
//         break;
//     case 2 :
//         a = 'Two';

//     default:
//         a = 'Not found...'
//         break;
// } console.log(`The value is ${a}`);

/* Program for a simple caluculator */

// let result;

// const operator = prompt('Enter the operator(either +, -, * or /):');
// const num1 = parseFloat(prompt('enter first number'));
// const num2 = parseFloat(prompt('enter second number'));

// switch (operator) {
//     case '+':
//         result = num1 + num2;
//         console.log(`${num1} + ${num2} = ${result}`);
//         break;
//     case '-':
//         result = num1 - num2;
//         console.log(`${num1} - ${num2} = ${result}`);
//         break;
//     case '*':
//         result = num1 * num2;
//         console.log(`${num1} * ${num2} = ${result}`);
//         break;
//     case '/':
//         result = num1 / num2;
//         console.log(`${num1} / ${num2} = ${result}`);
//         break;
//     default:
//         console.log('Invalid operator');
//         break;
// }

// program to print the text
// declaring a function
// function greet(name) {
//     console.log("Hello " + name + ":)");
// }

// // variable name can be different
// let name = prompt("Enter a name: ");

// // calling function
// greet(name);
