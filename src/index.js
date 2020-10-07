module.exports = function reverse (n) {
  let newNumber=n.toString();
  let result=newNumber.split("").reverse().join("");
  let reverseNumber=Number(result)
    return reverseNumber;
}
