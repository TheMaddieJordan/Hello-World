let firstName = 'Maddie';
let lastName = 'Jordan';
let fullName = firstName + ' ' + lastName;
let birthYear = 1986;
// new Date() is a method
let year = new Date();
// getFullYear() will get the full current year
let age = year.getFullYear() - birthYear;

//document.getElementById('biography').innerHTML = y.getFullYear() - birthYear;

//document.getElementById will help us grab an element from HTML
document.getElementById('biography').innerHTML = 'Hello World, my name is ' + fullName + ' and I am ' + age;