/**
 *   PROTOTYPES Examples
 */

let obj1 = {
    name: "himanshu",
    age: 28
}

let obj2 = {
    city: "karanja",
    state: "maharashtra"
}

// For inheriting properties of objects

// let obj1 = {
//     name : "himanshu",
//     age : 28,
//     __proto__ : obj2
// }


// OR

obj1.__proto__ = obj2;

// OR 

Object.setPrototypeOf(obj1, obj2);


for (let i in obj1) {
    console.log(obj1[i]);
}


/**
 *    Creating method for all objects 
 */

Object.prototype.printMsg = function () {
    console.log(`hey we are working on prototype with all objects`);
}

// Using printMsg() method with created object

obj2.printMsg();

// As array is also an object, it can also use printMsg() method

let arr = [12, 45, 67];

arr.printMsg();


/**
 *   We can also create seperate methods for string,array if needed with prototypes 
 */


Array.prototype.countLength = function () {
    console.log(`length of array is ${this.length}`);
}

arr.countLength();



