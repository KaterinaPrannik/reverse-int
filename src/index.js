module.exports = function reverse (n) {
  let module=Math.abs(n);
  let newNumber=module.toString();
  let result=newNumber.split("").reverse().join("");
  let reverseNumber=Number(result)
    return reverseNumber;
}
