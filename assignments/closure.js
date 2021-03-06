// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function findPlace(place) {
  const placeHolder = place;
  console.log(`This is ${placeHolder}.`);

   function state() {
     const stateName ="I am the State";
     console.log(`${stateName} of ${placeHolder}`)

     function city() {
       const cityName ="I am the City";
       console.log(`${cityName} of ${placeHolder} and ${stateName} ?`)
     }
     city();
   }
   state();
}
findPlace("Phoenix");

// ==== Challenge 2: Create a counter function ====
const counter = () => {
 let count = 0;
   return () => {
   return ++ count;
 }
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: 
const newCounter = counter();
 console.log(newCounter()); // 1
 console.log(newCounter()); // 2
 console.log(newCounter());
 console.log(newCounter());
/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
