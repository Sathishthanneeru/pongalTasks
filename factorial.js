function fact(n) {
  let num = 1;
  for (let i = 1; i <= n; i++) {
    num *= i;
  }
  return num;

}
console.log(fact(4));
console.log(fact(5));
console.log(fact(0))
