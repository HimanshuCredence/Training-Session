/**
 *  Class
 */
class TestClass{
    // constructor executes automatically as soon as class is invoked
    constructor(){
        console.log(`Hello we are working with class constructor.`);
    }

    printCustom(){
        console.log(`now we are working with custom method.`);
    }
}

// it will print function
console.log(typeof TestClass); 
// constructor will automatically execute.
const classResult = new TestClass();
// for printing custom methods.
classResult.printCustom();
// or we can execute like
new TestClass().printCustom();


/**
 *  Class Expression
 */

const ClassUser = class expressionTest{
    printName(){
        console.log(`hey my name is class expression`);
    }
}

// now execution is same as function expression
let classUserResult = new ClassUser();
classUserResult.printName();
// or we can write like
new ClassUser().printName();


/**
 *  Returning class from a function
 */

const ReturnClass = function(){
   return class toBeReturn{
        printStatement(){
            console.log(`yeah retuning class from a function.`);
        }
    }
}

const returnClassResult = ReturnClass();
new returnClassResult().printStatement();

class HaveName {
constructor(name){
    //  console.log(this.name = name);
    return this.name = name;
}
}
const haveNameResult = new HaveName('Elon Musk');
console.log(haveNameResult.name);

/**
 *  getters and setters
 */

class SquareArea{
    constructor(side){
       this.side1 = side;
    }
    // we are getting area from constructor provided values
    get area(){
        return this.side1 ** 2;
    }
    // now we are setting the value so
    set area(area){
        this.side1 = Math.sqrt(area) * 2;
    }
}

let squareAreaResult = new SquareArea(12);
console.log(squareAreaResult.area);
// we set the value here of aet area()
squareAreaResult.area =  9;
console.log(squareAreaResult.area);



/**
 *  Inheritence in class
 */

class ParentClass{
   constructor(name,age){
    this.name = name;
    this.age  = age;
   }
   printOutput(){
    console.log(`the info name : ${this.name}, age : ${this.age}`);
   }
}
// we will use extend keyword to inherit ParentClass
class ChildClass extends ParentClass{
    constructor(name,age,state){
    //  super keyword is use to inherit properties of class
        super(name,age);
        this.state = state;
    }
}

const parentClassResult = new ParentClass("moi",55);
const childClassResult = new ChildClass('mia',66,'Maharashtra');
console.log(parentClassResult);
console.log(childClassResult);
childClassResult.printOutput();


/**
 *  Static
 *  static keyword in class makes property or method only accessable to class
 */

class StaticExample{
    static printing(){
        console.log(`Printing static method here.`);
    }
    normalPrint(){
        console.log(`Printing without static method.`);
    }
}

let staticExampleResult = new StaticExample();
staticExampleResult.normalPrint();
// if we try to print static method, it will throw error
staticExampleResult.printing();
// to access it call by classname
StaticExample.printing(); 




/**
 *  Polymorphism
 *  with it we can use same method and it can be transformed with class inheritence.
 */

class PolyMorphismDemo{
    Earth = "beautiful"
    sum(a,b){
        this.a = a;
        this.b = b;
        console.log(this.a+this.b);
    }
}

class PolyMorphismDemo2 extends PolyMorphismDemo{
    // Here we transformed the method by adding 100
    sum(a,b){
        console.log(a+b+100);
    }
}

let polyDemoResult = new PolyMorphismDemo();
let polyDemoResult2 = new PolyMorphismDemo2();

polyDemoResult.sum(15,35);
polyDemoResult2.sum(15,35);
// hasOwnProperty() To check if Property exist, if you're inheriting a class then it will search that property in that too.
console.log(polyDemoResult2.hasOwnProperty('Earth'));

/**
 *  Private in class
 *  this are not accessible outside the class
 */

class PrivateExample{
    #Universe = 'Infinity';
    // for accessing private outside, need to return it within a method
    getPrivate(){
        return this.#Universe;
    }
}

let privateExampleResult = new PrivateExample();
// it is not accessible outside
console.log(privateExampleResult.Universe);
// now it can access it
console.log(privateExampleResult.getPrivate());


/**
 *  Extending class with Array
 */

class ArrayExtends extends Array{
    check(){
        // either op will true or false
        return this.length === 0;
    }
}

const arrayExtendsResult = new ArrayExtends(11,12,13,14,15);
console.log(arrayExtendsResult.check());
// it can act as an array
console.log(arrayExtendsResult.length);
for(let i in arrayExtendsResult){
    console.log(arrayExtendsResult[i]);
}

/**
 *  Instance 
 */
class Groups{}
let groups = new Groups();
// checking groups is instance of Groups
console.log(groups instanceof Groups); 

/**
 *  Event Mixin
 */

let obj = {
    gettingData(){
        console.log(`hey there ${this.name} your age is : ${this.age}`);
    }
}

class MixinObj{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
// Object.assign copies the data, it is copying from obj to MixinObj class
Object.assign(MixinObj.prototype,obj);
new MixinObj('Elsa',99).gettingData();