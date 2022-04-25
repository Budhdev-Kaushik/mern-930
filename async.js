console.log("first");
// setTimeout(() => {
//   console.log("Reading files...");
// }, 5000); //async code / non blocking statement
// for(let i = 1; i < 1000000000; i ++){} //sync code / blocking code

// function readFile(){
//   return  "Second";
// }

// function readFile(){
//   setTimeout(() => { return 'Second' }, 4000);
// }

// let file = readFile();
// console.log(file);

// Sovling this problem: Using Callback Function && Promises

// let file = null;

// function readFile(cb){
//   setTimeout(() => {
//    return cb('abc.html')
//    }, 4000);
// }

// readFile((newFile) => {
//   file = newFile;
//  });

//  console.log(file);
// console.log('third');
// console.log('forth');

//.............................................................

// let file1 = null;

// function readFileFromDb(cb){
//   setTimeout(() => {
//     cb('ABC.HTML');
//    }, 5000);
// }

// readFileFromDb((newFile) => { return console.log(newFile)});

console.log("testing1");
console.log("testing2");
console.log("testing3");

/* async: solving though Promises : is an object , which is used to store the result  of an async operation */

// let file = null;

// function readFile() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ name: "Budhdev", doing: "BCA", additionalDoing: "ReactJs" });
//       reject(new Error("Something went wrong..."));
//     }, 4000);
//   });
// }

// file = readFile();

// let interval = setInterval(() => { console.log(file) }, 1000)

// setTimeout(() => {
//   clearInterval(interval);
// }, 5000);

// readFile().then((data) => console.log(data));
// .catch(err => console.log(err));

//...........................

function getUsers() {
  console.log("Reading users...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(getLocation);
      // reject(new Error("Something went wrong..."));
    }, 2000);
  });
}

function getLocation() {
  console.log("Reading Location...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(getStatus);
      reject(new Error("Disk failure"));
    }, 2000);
  });
}

function getStatus() {
  return new Promise((resolve, reject) => {
    resolve("The status is : Active");
  });
}

// getUsers()
//   .then((fn) => fn())
//   .then((loc) => loc())
//   .then((x) => console.log(x))
//   .catch((err) => console.log(err.message));


//Async await

async function getDetails(){
  //async tasks....
  try {
    let result1 = await getUsers();
let result2 = await result1();
let result3 = await  result2();
console.log(result3);

  } catch (error) {
    console.log(error.message);
  }
}