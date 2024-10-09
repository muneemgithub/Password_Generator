const passwordBox = document.getElementById("Password");
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+=~{}[]<>/-";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(lenght > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];

    }
    passwordBox.value = password;
}

function copypassword() {
    const passwordBox = document.getElementById("Password"); // Corrected the id here
    navigator.clipboard.writeText(passwordBox.value)
    .then(() => {
        console.log("Password copied to clipboard!");
        alert("Password copied to clipboard!"); // Optional: show alert to user
    })
    .catch(err => {
        console.error("Failed to copy: ", err);
    });
}


