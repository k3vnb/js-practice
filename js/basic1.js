
// below is a ternary operator ie: a>b ? -- it is the equivalent of an if statement
function findBiggestFraction(a, b){
  var result;
  a>b ? result = ["firstFranction", a] : result = [("secondFraction: ", b)];
  return result;
}
var firstFraction = 3/4;
var secondFraction = 5/7;

var fractionResult = findBiggestFraction(firstFraction, secondFraction);
console.log("Fraction " + fractionResult[0] + " with a value of"  + fractionResult[1] +
"is bigger");
