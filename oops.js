// //functions and properties
// //Object Oriented Programming. (OOPS)

// //principles of OOPS
/*
 1. ENCAPSULATION: grouping of properties and methods that act on those properties;

 2. ABSTRACTION : hiding the details and showing on the essentials

 3. INHERITANCE : 

 4.POLYMORPHISM :
  */

/* (1). OOPS ENCAPSULATION */

// const TV = {
//   //properties
//   isRunning: false,
//   currentVolume: 0,
//   currentChannel: 1,

//   //methods
//   on() {
//     this.isRunning = true;
//     console.log("tv is on now...");
//   },

//   off() {
//     this.isRunning = false;
//     console.log("tv is off now...");
//   },
//   //   on: function () {
//   //     console.log("Tv is On...");
//   //   },
//   //   off: function () {
//   //     console.log("Tv is off..."); },

//   volUp() {
//     this.currentVolume++;
//     console.log("currentVolume", this.currentVolume);
//   },

//   volDown() {
//     this.currentVolume--;
//     console.log("currentVolume", this.currentVolume);
//   },
// };

// let stopwatch = {
//   //properties
//   startTime: 0,
//   stopTime: 0,
//   isRunning: false,

//   //methods
// start() {
//   if (this.isRunning) throw new Error("Watch has already started...");
//   this.isRunning = true;
//   this.startTime = new Date().getTime();
//   console.log("Watch is started at", this.startTime);
// },

// stop() {
//   if (!this.isRunning) throw new Error("Watch hasn't started yet...");
//   this.isRunning = false;
//   this.stopTime = new Date().getTime();
//   let duration = (this.stopTime - this.startTime) / 1000;
//   console.log(" Watch stopped at", duration);
// },

// reset() {
//   (this.startTime = 0),
//     (this.stopTime = 0),
//     (this.isRunning = false),
//     console.log("watch has been reset...");
// },
// };

/* classes : blue-Print of objects ,,,
name should always wirtten in pascale case*/

class StopWatch {
  constructor(modelNo, color) {
    this.#modelNo = modelNo;
    this.#color = color;
  }

  //properties

  #modelNo = null;
  #color = null;
  #isRunning = false;
  #startTime = 0;
  #stopTime = 0;

  //Methods

  //getter Method

  get color() {
    return this.#color;
  }

  get modelNo() {
    return this.#modelNo;
  }

  get startTime() {
    return this.#startTime;
  }

  get isRunning() {
    return this.#isRunning;
  }

  //setter Method

  set isRunning(value) {
    if (!(typeof value === "boolean")) throw new Error("Invalid value");
    this.#isRunning = value;

    //  throw new Error("Internal property can't be changed");
  }

  start() {
    let Starts = new Date().toLocaleTimeString();
    if (this.#isRunning) throw new Error("Watch has already started...");
    this.#isRunning = true;
    this.#startTime = new Date().getTime();
    console.log(`
    start Time is ${Starts}: `, 'MS ' + this.#startTime);
  }

  stop() {
    let Stops = new Date().toLocaleTimeString();
    if (!this.#isRunning) throw new Error("Watch hasn't started yet...");
    this.#isRunning = false;
    this.#stopTime = new Date().getTime();
    let duration = (this.#stopTime - this.#startTime) / 1000;
    console.log(`Watch stoped at ${Stops}`, duration);
  }

  reset() {
    (this.#startTime = 0),
      (this.#stopTime = 0),
      (this.#isRunning = false),
      console.log("watch has been reset...");
  }
}
class AdvancedStopWatch extends StopWatch {
  #readings = [];
  takeReadings() {
    //record multiple readings...
    if (!super.isRunning) throw new Error("Watch hasn't started yet...");
    let now = new Date().getTime();
    let interval = (now - super.startTime) / 1000;
    this.#readings.push(interval);
    console.log(this.#readings);
  }
}

class Person {
  constructor(name, dob) {
    this.#name = name;
    this.#dob = dob;
  }
  // Properties
  #name = null;
  #dob = null;
  #isVerified = false;

  //methods
  get name() {
    return this.#name;
  }
  set name(value) {
    if (
      !(
        typeof value === "string" &&
        value.length >= 3 &&
        value.split(" ").length === 2
      )
    ) {
      throw new Error("Invalid value");
    }
    this.#name = value;
  }
  speak() {
    console.log(this.#name, " is speaking...");
  }

  move() {
    console.log(this.#name, " is moving..");
  }
}

class Student extends Person {
  constructor(name, dob, rollNo) {
    super(name, dob);
    this.rollNo = rollNo;
  }

  read() {
    console.log(`${super.name} is reading...`);
  }

  write() {
    console.log(`${super.name} is writing...`);
  }
}

class SeniorStudent extends Student {
  constructor(name, dob, rollNo, specilization) {
    super(name, dob, rollNo);
    this.specilization = specilization;
  }

read(){
  console.log(`${super.name} is Reading....`);
}

  research() {
    console.log(`${super.name} is researching on ${this.specilization}`);
  }
}


//Static classes

