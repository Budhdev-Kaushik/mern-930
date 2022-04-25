//  CRUD = CREATE , READ, UPDATE, DELETE

// let names = ["abc", "def", "ghi", "jkl", "mno"];  //CREATE

// array insertion

//beginning = unshift()
//end = push()
//middle = splice()

/*
array deletion

beginning = shift();
end = pop();
middle = splice();
*/

//         function generateRandomNumber(digit) {
//     return parseInt(Math.random() * 10 ** digit);
//   }

//   let numbers = [];
//   for(let i = 0; i < 1000; i++){
//       let random = generateRandomNumber(3);
//       numbers.push(random);
//   }

//   for(let el of numbers) {
//       console.log(el);
//   }

// const sum = (a,b) => {
//     console.log(a + b);}

//     function printSum(cb){
//         cb(2,4);
//     }

// const multiply = (a,b) => {
//     return a * b;
// };

// function somthing(test){
//    console.log(test(3,5));
// };

// let numbers = [2, 4, 54
//     , 6, 7, 8, 54548
//     , 9, 0, 0];

// const print = (i) => {
//     console.log(i);
//  };

//  numbers.forEach((el) => {
//      console.log(el);
//   });

// const compare = (a, b) => {
//     //  console.log(`a = ${a}-----  b = ${b}`);
//     // if (a >b ) { return 1;}
//     // if(a<b){return -1;};
//     // return 0;

// return };

// numbers.sort( (i,j) => i - j );
// numbers.sort( (i,j) => j - i );

// let names1 = ['abc', 'Zeg', 'nmo', 'kdlsj'];
// names1.sort((i,j) => {
//         i = i.toUpperCase();
//         j = j.toLowerCase();
//         console.log(`i = ${i}, j = ${j}`);
// }
// );

// let number = [1,3,4,5,6,7,8,9,8,9,0,11];

// let fullName = "My name is Mohit";

// let names = ['Zeg', "abc", "def", "ghi", "jkl", "mno"];

// function generateRandomNumber(digit) {
//     return parseInt(Math.random() * 10 ** digit);
//  };

// let numbers = [];

//Array genration

// for (let i = 0; i < 100; i++) {
//    let random = generateRandomNumber(2);
//    numbers.push(random);
// }

// console.time('for');
// let len = numbers.length;
// for (let i = 0; i < len; i++) {
//     const element = numbers[i];
// }
// console.timeEnd('for');

// console.time('for-of');
// for(let elements of numbers) {
//     // console.log(elements);
// }
// console.timeEnd('for-of');

// names.sort((i, j) => {
//         i = i.toLowerCase();
//         j = j.toLowerCase();
//         if (i > j) return -1;
//         if (j > i) return 1;
//         return 0;

// });

//names.sort((i, j) =>

//         i.toLowerCase().charCodeAt(0) - j.toLowerCase().charCodeAt(0)
// );

// let filtered = numbers.filter((el) => el % 2 === 0);

/* Array Iteration using for loop */

// let numbers = [23, 2, 45, 65, 6, 7, 8, 9, 0, 11];

// let size = numbers.length;

// for (let i = 0; i < size; i++) {
//   const element = numbers[i];
//   console.log(element);
// }

// for (let element of numbers) {
//   console.log(element);
// }

// let numbers = [];

// function generateRandomNumber(digit) {
//   return parseInt(Math.random() * 10 ** digit);
// }

// for (let i = 0; i < 1000; i++) {
//   let random = generateRandomNumber(3);
//   numbers.push(random);
// }

// console.time("for");
// let len = numbers.length;

// for (let index = 0; index < len; index++) {
//   const element = numbers[index];
// }
// console.timeEnd("for");

// console.time("fof");
// for (let el of numbers) {
//   // if(el % 2 === 0){
//   //   console.log(el);
//   //}
// }
// console.timeEnd("fof");

/* callback functions */

// const sum = (a, b) => {
//   console.log(a + b);
// };

// const multiply = (a, b) =>{
//   console.log(a * b);
// };

//  somthing( (a) => a **2);

/* forEach loop */

// let numbers = [2, 4, 5, 56, 7, 8, 98, 989, 6, 68, 87, 45];

// numbers.forEach((el) => { console.log(el); });

// let names = ['budha', 'kdj', 'kldf'];

// names.forEach((el) => {
//    console.log(el);
//   });

/* sorting in arrays */

//sort();

//sorting of numbers

// let numbers = [23, 45, 5, 7, 58, 9, 034, 03, 3, 343, 5, 436, 7];

// const compare = (a, b) => {
//   // console.log(`a = ${a}, ---- b = ${b}`);
//   if (a > b) return 1;
//   if(a < b) return -1;
//   return 0;
// };

// sortest way of sorting

// const compare = (a,b) => a - b;// <= assending sort, => decending sort b - a;

// numbers.sort((i,j) => i - j);

// console.log(numbers);

/* sorting of strings */

// let fullName = "My name is Pardeep";

//startsWith();
//endsWith();
//replace(searchValue, replaceValue);
//replaceAll();  :used for multiple accerance
//split();
//toLowerCase();
//toUpperCase();

let names = ["Mno", "pqr", "Stu", "vwx", "Yz", "abc", "Def", "ijk"];

// names.sort((i,j) =>{
//   console.log(` i = ${i}, === j = ${j}`);
// })

// names.sort((i, j) => {
//   i = i.toUpperCase();
//   j = j.toUpperCase();
//   if (i > j) return 1;
//   if (j > i) return -1;
//   return 0;
// });

// names.sort((i, j) => i.toLowerCase().charCodeAt(0) - j.toLowerCase().charCodeAt(0));  // for reverse use the j - i


/* filtre() method */

//let numbers = [2,4,6,4,4,34,3,5,7877,65,54,34,3323,2323,56,68,00];

// let filtredOdd = numbers.filter((el) => el % 2 === 1);
// let filtredEven = numbers.filter((el) => el % 2 === 0);

// /* map() */
// let mapped = numbers.map( (elements) => elements ** 2);

// let mappedOnNames = names.map(
//   (el) => { return "It's " + el;}
// );

// /* reduce() */

// let sum = numbers.reduce(
  
//   (acc, el) => { return acc + Number(el);
  
// }, 0); // 0 is the inital value of accumulator 


/* every(); : only returns true & false */

// let numbers = [0, 2, 4, 6, 8, 10];
// let res = numbers.every(
//   // (el) => el % 2 === 0
//   (el) => el % 2 === 1
// );


// let numbers = [1,3, 5,7,3,3,3];

// let res = numbers.some(
//     (el) => el % 2 === 0
// );