// the following script is for an immediately invoked function, hence the parenthensis around the function itself


var theBiggest = (function(a, b){
  var result;
  a>b ? result = ["a", a] : result = ["b", b];
  return result;
})(7/9, 13/25)

console.log(theBiggest)

// if you place variables beneath the immediately invoked function expression, it will not work b/c the function ran on load;
