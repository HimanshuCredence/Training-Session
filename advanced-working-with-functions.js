/**
 *  An example without recursion
 */

function factorial(n) {
let total = 1;
//  Looping till input value 
for(let i = 1 ; i <= n ; i++){
    total *= i;
}
console.log(total);
}
factorial(4);


/**
 *   Same example with recursion
 */

function factorialWithRecursion(n){
//   Base condition or termination condition to terminate the program
    if(n <= 1){
        return 1;
    }
//  Calling function to implement recursion
    return n * factorialWithRecursion(n-1);
}
let result = factorialWithRecursion(5);
console.log(result);


/**
 *  Rest Parameter
 */

// rest parameter is used when we have to create an array for excessive arguments

function checkingRest(val1,val2, ...rest){
let total = val1 + val2;
// Rest Parameter creates an array of excessive arguments [23,44,55,66]
for(let i in rest){
    total += rest[i];
}
console.log(total);
}
checkingRest(10,11,23,44,55,66);


/**
 *  Spread Parameter
 */
// Spread Parameter is used when we need to convert or spread array elements into list.

function checkingSpread(a,b,c,d){
let sum = a+b+c+d;
console.log(sum);
}
let arrForSpread = [11,12,13,14];

// spread operator converts array in list (11,12,13,14)
checkingSpread(...arrForSpread);


/**
 *   scope and Closures 
 */

{
    let letScope = 10
    const constScope = 12
    var varScope = 15
// let and const only be accessed inside block
    console.log(letScope,constScope,varScope);
}
// but not outside block except var as it is not blocked scope, it is function scope
console.log(varScope);


function closureTest(){
    let closeVar = "hello there";  

/** here function innerFun is forming closure with closureTest, 
 *  that is it can access it's lexical environment
 */
    function innerFun(){
        console.log(closeVar);
    }
    return innerFun;
}
let closureResult = closureTest();
closureResult();

/**
 *  NFE (named function expression)
 *  there is a name property for function in javasript
 */

function sayHi(){
    console.log(sayHi.name);
}
sayHi()


/**
 *  New function syntax
 *  we use new keyword to create function
 */

// we wrote parameters inside single quote '' and inside backtick we wrote function code.

let tryNewSyntax = new Function('a,b,c',
`
let sum = 0;
sum += a+b+c;
console.log(sum)
`
);
tryNewSyntax(11,12,13);


/**
 *  setTimeout and setInterval
 */

// setTimeout terminates after provided limit of time

function testSetTimeout(){
 for(i=1;i<=3;i++){
    setTimeout(() => {
        // it'll print after i*1000.
        console.log(`setTimeout is printing`);
    },i*1000);
    }
}
testSetTimeout();

// setInterval

function testSetInterval (){
    setInterval(() => {
        // it will print continuously after provided time
        console.log(`setInterval is continuously printing after provided amount of time`);
    },1000);
    
}
testSetInterval();

/**
 *   Decorators and forwarding, call/apply
 */

// new Map() creates an object which holds key-value pair
let newMapFun = new Map();
// we are adding key-value using set() and Map considers 1st param as key and 2nd as value
newMapFun.set("banana",500);
newMapFun.set(800,"apples");
// we are getting values of keys from Map()
console.log(newMapFun.get('banana'));
console.log(newMapFun.get(800));
// Map() has multiple inbuilt methods has() is one of it, it check if key is present
if(newMapFun.has('banana')){
    console.log(true);
}

// Call()

let obj1 = {
    fName : "Himanshu",
    lName : "Fulmali"
}

let obj2 = {
    fName : "Abc",
    lName : "Xyz"
}

// created a method to use with object
let printMethod = function(city,state) {
    console.log(this.fName,this.lName,city,state );
}
// using call() to implement the method, call takes extra argument seperated by ,
printMethod.call(obj2,'Delhi','Maharashtra');

// apply(), apply takes arguments in an array, thats the difference between call and apply
printMethod.apply(obj2,['London','Bihar']);

// bind(), it forms a closure and return the method, we need to store in a variable and execute it.
let bindResult = printMethod.bind(obj2,'Delhi','Maharashtra');
bindResult();




/**
 *  Function Binding
 */

  let testUser = {
    firstName: "Himanshu",
    methodToCheck() {
      console.log(this.firstName);
    }
  };

  // it shows undefined as context of this is lost there
//   setTimeout(testUser.methodToCheck,1000);
// wrapping it in function will print desired op
  setTimeout(() => {
      testUser.methodToCheck();
  }, 1000); 

// we can also call,apply,bind and get op but for it we need to create a method

function bindForThis(){
console.log(this.firstName);
}

bindForThis.call(testUser);
// or we can do it without creating a seperate method also
testUser.methodToCheck.call(testUser);


/**
 *  arrow function does not support this keyword but there is an exception with forEach loop
 */
let group = {
    title: "testing forEach",
    students: ["a", "b", "c"],
  
    showList() {
      this.students.forEach(
        student => console.log(this.title + ' : ' + student) 
        /**
         *  output is
         *  testing forEach : a , testing forEach : b , testing forEach : c
         */
      );
    }
  };
  
  group.showList();