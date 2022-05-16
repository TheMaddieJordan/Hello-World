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


// Random Facts
const facts = [
    'I am obsessed with Batman',
    'I am a transwoman',
    'I love yoga & weightlifting',
    'I am originally from St. Louis, and I now live in Dunedin FL'
];
// Target the button
const btn = document.getElementById('btn');
// Color value
const fact = document.querySelector('.fact');

btn.addEventListener('click', function() {
    // get a random number between 0 - 3
   const randomNumber = getRandomNumber();
   console.log(randomNumber);
   // get into the array
   document.body.style.backgroundColor = facts[randomNumber];
   // select the color
   fact.textContent = facts[randomNumber];
});

// Generate random number
function getRandomNumber() {
    // Math.floor() will round down to the nearest full number
    // Math.random() will help us select a random number from the array
    return Math.floor(Math.random() * facts.length);
}