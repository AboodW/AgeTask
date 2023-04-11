/*
! Age Task
*Write a program that asks the user for their age and returns a message that 
*says whether they are a child(0-15), a teenager(15-25), or an adult(25-max).
*/

const AgeField = document.querySelector("#ageField");
const enterButton = document.querySelector("#enterButton");
const result = document.querySelector("#resultText");
const resultBanner = document.querySelector("#result");
//greenTextWithBorder

enterButton.addEventListener("click", function () {
  const age = Number(AgeField.value);
  var resultValue;
  if (age >= 0 && age < 15) {
    resultValue = " You are a Child!";
  } else if (age >= 15 && age < 25) {
    resultValue = "You are a Teenager!";
  } else if (age >= 25) {
    resultValue = "You are an Adult!";
  } else {
    resultValue = "Invalid Age!";
  }
  result.classList.add("greenTextWithBorder");
  result.textContent = resultValue;
});

// another way using alert and prompt
// const age = prompt("Enter your age");
// if (age >= 0 && age < 15) {
//   alert("You are a Child!");
// } else if (age >= 15 && age < 25) {
//   alert("You are a Teenager!");
// } else if(age >=25) {
//   alert("You are an Adult!");
// } else{
//   alert("Invalid Age!");
//}
//
