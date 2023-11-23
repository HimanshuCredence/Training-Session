/**
 *  with function currying we create a method and we can customise it in
 *  order to get desired output 
 */

// normal syntax
function multiply(x) {
    return function (y) {
        return x * y;
    }
}
// let say we want only 2x output
let multiplyBytwo = multiply(2) // it'll return function
console.log(multiplyBytwo(6));

// suppose we want to use same method but want 3x
let multiplyBythree = multiply(3); // it'll return function
console.log(multiplyBythree(6));

/**
 *  another syntax for currying 
 */
let newCurrySyntax = x => y => x * y;

// if we want 4x output
let fourTimeOp = newCurrySyntax(4); // it'll return function
console.log(fourTimeOp(6));

/**
 *  We can use bind() also
 */

const usingBindexample = function usingBind(x, y) {
    console.log(x * y);
}
// if we want 5x
const usingBindResult = usingBindexample.bind(this, 5); // it'll return function
usingBindResult(6);


