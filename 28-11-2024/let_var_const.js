// example of hoisting 
function foo() {
  console.log(a);  // first it is undefined in execution context 
}
var a = 10;
var a = 15;      // no error as re-declaration is allowed.
foo();



