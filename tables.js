function multliplication(number) {
  for (i = 0; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}
const number = parseInt(prompt("Enter a number:"), 10);
if (!isNaN(number)) {
  multliplication(number);
} else {
  console.log("enter valid number");
}
