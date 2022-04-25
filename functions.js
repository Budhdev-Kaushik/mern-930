function isEligible(age, hasPassport, country) {
    return age > 18 && hasPassport && country === "India";
  }
  
  function isEven(number) {
    return number % 2 === 0;
  }
  
  function isDivisible(divident, divisor) {
    return divident % divisor === 0;
  }
  
  function extractLastDigit(number) {
    return number % 10;
  }
  
  function trimLastDigit(number) {
    return parseInt(number / 10);
  }
  
  function generateRandomNumber(digit) {
    return parseInt(Math.random() * 10 ** digit);
  }
  
//   function factorial(number) {
//     if (number === 0) return 1; //base condition
//     return number * factorial(number - 1);
//   }
  
//   function totalDigitsInANumber(number) {
//     let digits = 0;
//     while (number > 0) {
//       number = trimLastDigit(number);
//       digits++;
//     }
//     return digits;
//   }
  

  //through Recursion function

  function hello(initialValue){
      let count = initialValue;
      count++;
      if(count ===35) return; //base / terminating condition
      console.log('heLOO world!',count);
      hello(count);
  }

  function hii(initialValue){
    let count = initialValue;
    count++;
    if(count === 100) return; //base / terminating condition
    console.log('heLOO world!',count);
    hii(count);
}

//factorial of number using in function while loop

// function factorial(number){
//     let product = 1;
//     while (number>0) {
//         product = product * number;
//         number--;
//         console.log('product', product);
//         console.log('number', number);
//         console.log("----------------------");
//     }
//     return product;
// }

//factorial by using Recursive function:

function fact(number){
    //base conditon
    if(number === 0) return 1;
    return number * fact(number - 1);
}

//arrow function

let sum = (a, b) => {
  let result = a + b;
  return result;
}


// function divide(divided, divisor){
//   let reminder = divided % divisor;
//   console.log(reminder);

// }


export{isEligible, isEven, isDivisible}

export default extractLastDigit;