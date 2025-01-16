function multliplication(num) {
  console.log(`${num}`);
  for (i = 0; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
const input = parseInt(prompt("Enter a number:"), 10);
if (!isNaN()) {
  multliplication();
} else {
    console.log("enter valid number");
}
console.log(multliplication(9));
