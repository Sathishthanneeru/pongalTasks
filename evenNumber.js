const number = parseInt(prompt("Enter a non-negative number:"), 10);

if (number >= 0) {
  for (let i = 0; i <= number; i += 2) {
    console.log(i);
  }
} else {
  console.log("Please enter a valid non-negative number.");
}
