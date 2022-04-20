let firstName = 'Maddie';
let lastName = 'Jordan';
let fullName = firstName + ' ' + lastName;
let birthYear = 1986;
let year = new Date();
let age = year.getFullYear() - birthYear;

//console.log(y.getFullYear() - birthYear);

//document.getElementById('biography').innerHTML = y.getFullYear() - birthYear;

document.getElementById('biography').innerHTML = 'Hello World, my name is ' + fullName + ' and I am ' + age;