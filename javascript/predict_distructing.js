const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// predicttion:
// Tesla
// Mercedes

// Outcome:
// Tesla
// Mercedes

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name);
console.log(otherName);

// predicttion:
// first line will cause error since name is not defined in the scope
// if it would pass the first console.log then it would print Elon

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
// predicttion:
// 12345
// hash password is undefined

// Outcome:
// 12345
// undefined

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

// predicttion:
// 2!=5 -> False
// 2 == 2 -> True

// Outcome:
// false
// true


const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// predicttion:
// value
// [1,5,1,8,3,3]
// 1
// 5

// Outcome:
// value
// [1,5,1,8,3,3]
// 1
// 5

var exampleFunction = function(message){
    console.log( message );
  };
      
exampleFunction( "Hello from exampleFunction" );

function parentFunction( callback ) {
    callback( "information from the parent function" );
}
parentFunction( exampleFunction);


const arr = [1,2,3,4];
arr[0]=1000
console.log(arr)

  
  