let text1 = '\nThis is a text!';
let text2 = "\nThis uses double quotes.";
let escapedText =  "\nHe said: \"Yes!\", that's for sure.";
let escapedText2 = '\nHe said: "Yes!", that\'s for sure.';
console.log(text1,text2,escapedText,escapedText2);
console.log("$") 
let name = 'John';
let welcomeMessage1 = "Hello, I'm";
let welcomeMessage2 = 'and I say to you: "Hello!"';

console.log(welcomeMessage1 + ' ' + name + ' ' + welcomeMessage2);
console.log(`\n${welcomeMessage1} ${name} ${welcomeMessage2}`);
let car = {
    color: 'red',
    mileage: 10
  };


let annesAge = 27;
let anne = {
    name: 'Anne',
    age: annesAge,
    child: {
        name: 'Joe',
        age: 2
    }
};

let shortObject = { name: 'Bob' };
let emptyObject = {};

console.log('dot noation =',anne.child.age);
//test
let currentUserName = 'sam';
let userAges = {
  anne: 27,
  sam: 112,
  megan: 97
};
userAges[currentUserName] = 113;
console.log(userAges[currentUserName]);

let numberArraytest = [1, 2, 3];
 
// array of strings
let foodArray = ['pizza', 'tuna', 'apple'];

// array of objects
let carArray = [
  { type: 'Bus', wheels: 4, color: 'blue'},
  { type: 'Sport', wheels: 4, color: 'red'}
];

console.log(carArray[0].type, carArray[1].wheels);


// array of arrays
let myCalculatorNumbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let numberArray = [1111, 2, 3];
let mixedArray = [
  1,
  'two',
  numberArray,
  { age: 5, age2:6 }
];

console.log(numberArray[0]);
console.log(mixedArray[2][0]);

console.log(mixedArray[3].age);
console.log(mixedArray[3]);



let ki = 1;
while ( ki < 5) {
    console.log(ki);
    ki++;
}