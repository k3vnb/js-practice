// this is a sample example of closures, which is a function inside of another function, where the inner function depends on variables from the outer function

function findEms(pixels) {
  let baseValue = 16;

  function doTheMath() {
    return pixels/baseValue;
  }
  return doTheMath;
}

let smlSize = findEms(12);
let mdSize = findEms(18);
let lgSize = findEms(24);
let xlgSize = findEms(32);

console.log("Small size: ", smlSize());
console.log("Medium size: ", mdSize());
console.log("Large size: ", lgSize());
console.log("Extra-large size: ", xlgSize());
