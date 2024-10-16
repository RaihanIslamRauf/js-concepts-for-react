// 1. How to declare variable using let and const
const fatherName =  'Arnold';
let season = 'rainy';
season = 'winter';

// 2. Conditions
// 6 basic conditions: >, <, ===, !==, <=, >=
// multiple conditions: &&, ||

if(fatherName === 'Arnold' || season ==='rainy') {

}
else if(fatherName === 'Arnold'){

}
else{

}

// 3. array declare
// index
// length, push,
const numbers = [89, 35, 98, 12];
numbers[0] = 56; // index diye array er value change kora jay

// 4. for loop, while loop
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

// 5. function
function multiply(num1, num2){
    const result = num1*num2;
    return result;
}
const output = multiply(35,78);
console.log(output)

// 6. object
// 3 ways to access property by name
const student = {
    name : 'salib khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}

const myVariable = 'age';

console.log(student.age);// directly by property
console.log(student['age']);// access via property name string
console.log(student[myVariable]);// access via property name in a variable
