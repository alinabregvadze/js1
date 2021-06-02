let name = prompt('your first name');
let surname = prompt('your last name');
let nick1 = prompt('your nicknames');
let nick2 = prompt('your nicknames');
let nick3 = prompt('your nicknames'); 
let ageStr = prompt('your age');
let userAge = parseInt(ageStr);
let incomeStr = prompt('your monthly income');
let income = parseInt(incomeStr);


let info = {
    firstName: name,
    lastName: surname,
    nicknames:[nick1, nick2, nick3],
    age: userAge,
    monthlyIncome: income,
}
console.log(info);

let isAdult = userAge>=18;
if (isAdult) {
    console.log(true + '  your old enough');
} else {
    console.log(false + ' you are not old enough') 
}

let getAnnoualIncome = income*12;
console.log('your annoual income is ' + getAnnoualIncome)
