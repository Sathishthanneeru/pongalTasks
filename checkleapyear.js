
function checkLeapYear(year) {
  if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
    return`true`
  } else {
    return`false`
  }
}
console.log(checkLeapYear(2000))
console.log(checkLeapYear(1900))
console.log(checkLeapYear(2024))
console.log(checkLeapYear(2021))