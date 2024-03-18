// DOM Manipulation
const passwordBox = document.getElementById("password");
const generatePasswordBtn = document.getElementById("generatePassword");
const copyBtn = document.getElementById("copy");

const length = 19;

const upperCase = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_?/{]{]*%<?>$~";

const allChars = upperCase + lowerCase + numbers + symbols;

generatePasswordBtn.addEventListener("click", () => {
  generateRandomPassword();
});

copyBtn.addEventListener("click", () => {
  copyPassword();
});

// Generate Random Password Function
function generateRandomPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
}

// Copy Function
function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
  window.alert("Password Copied");
}
