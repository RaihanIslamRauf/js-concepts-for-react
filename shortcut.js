// truthy - 'almas', 5, true, {}, []
// falsy - '', 0, false, null, undefined
// check truthy

let myVar = 5;
// check any truthy
if(myVar){
    myVar = myVar * 100;
}
else{
    myVar = 0;
}

let myMoney = 50;
// you check negative or falsy anything
if(!myMoney){

}

const money = 80;
let food;
if(money < 80){
    food = 'biriyani';
}
else{
    food = 'cha biscuit';
}

// ternary
let food1  = money > 100 ? 'biryani' : 'cha biscuit';
// console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink);

// number to string
const num1 = 52;
// console.log(num1);
const numStr = 52 + '';
// console.log(numStr);

// string to number
const input = '560';
const inputNumber = +input;
// console.log(inputNumber);

//
const isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
// isActive ? showUser() : hideUser();
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser();

// toggle boolean
isActive = !isActive;
