const numbers = [89, 35, 98, 12];
const student = {
    name : 'salib khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}
// 1. template string
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
// console.log(about);

// 2. arrow function
const getFiftyFive = () => 55;
// console.log(getFiftyFive());
const addSixtyFive = num => num + 65;
// console.log(addSixtyFive(40));
const isEven = x => x % 2 == 0;
// console.log(isEven(4));
const addThree = (x, y, z) => x + y + z;
// console.log(addThree(2,4,6));
const doMath = (num1, num2) =>{
     const sum = num1 + num2;
     return sum;
}


// 3. spread operator
const newNumbers = [...numbers];
// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];

numbers.push(99);
numbers.push(99);
numbers.push(99);

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);