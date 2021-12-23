//select Dom elements
const passwordEl = document.getElementById("password");
const copyEl = document.getElementById("copy");
const lengthEl = document.getElementById("p-length");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

//created values for different cases
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

//set initial password with plus equal operator when button is clicked
generateEl.addEventListener('click' , ()=> {
    let initialPassword = '';
    (upperEl.checked)? initialPassword += upperLetters : '';
    (lowerEl.checked)? initialPassword += lowerLetters : '';
    (numberEl.checked)? initialPassword += numbers : '';
    (symbolEl.checked)? initialPassword += symbols : '';
    passwordEl.value = generatePassword(lengthEl.value ,initialPassword);
});

// create a function that generates random characters and symbols for a particular length
function generatePassword(l , initialPassword){
    let pass = '';

    for(let i = 0; i<l; i++){
        pass += initialPassword.charAt(Math.floor (Math.random() * initialPassword.length))
    };
    return pass;
};

//copy password to clipboard
copyEl.addEventListener('click' , ()=> {
    if (passwordEl.value.length < 1){
        alert('please generate a password');
    } else {
        passwordEl.select(); 
        document.execCommand('copy');
        alert('password has been copied to clipboard');
        passwordEl.value = '';
    }
});