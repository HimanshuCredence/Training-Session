/**
 *  Callbacks
 *  When we pass a function as an argument to other function known as callback.
 */

function callBack1(cb){
    cb(); // here callBack2() will print
console.log(`Hi I'm callback1()`);
}

function callBack2(){
console.log(`Hi I'm callback2() `);
}
// callBack2() will print before callBack1()
callBack1(callBack2);


/**
 *  Promise
 */

const promise = Promise.resolve('hi').then((value) => {
    console.log(promise); // it'll print that promise is in pending state.
    console.log(value); // it will print resolved value.
});


/**
 *  Same Callback functionality we can achieve with promise
 */
function callBack3(){
    console.log(`Hi I'm callback3() `);
    }

function callBack4(){
    console.log(`Hi I'm callback4() `);
    }
/** 
 * here we implement promise on callBack3(),
 * so it will be in pending state until condition get resolved and callBack4() prints first 
 */ 
Promise.resolve().then(() => callBack3());
callBack4();

/**
 *  Async Await is also a way of implementing promise
 */

 async function callBack5(){
    let msg = `Hi I'm callback5()`;
    let awaitKey = await Promise.resolve(msg);
    console.log(awaitKey);
}
function callBack6(){
    console.log(`Hi I'm callback6()`);
    }
console.log(callBack5); // it shows fun is asynchronous
callBack5();
callBack6();

/**
 *  Advance Promise Examples and  Error handling with promise
 */

let conditionForPromise = true;

function PromiseDefine(time, state) {
  return new Promise((resolve, reject) => {
    if (conditionForPromise === true) {
      setTimeout(() => {
        resolve(state());
      }, time);
    } else {
      reject(console.log(`Condition is false`));
    }
  });
}

PromiseDefine(1000, () => {
  console.log(`condition is true`);
}).then(() => {
    return PromiseDefine(1000, () => {
      console.log(`Just Checking again`);
    });
  }).catch(() => {
    console.log('Yeah so we should not execute promise as condition failed');
});

// Same with Async Await

let conditionForPromiseAsync = true;

function PromiseDefineAsync(time) {
  return new Promise((resolve, reject) => {
    if (conditionForPromiseAsync === true) {
      setTimeout(resolve, time);
    } else {
      reject(console.log(`Condition is false`));
    }
  });   
}

async function testAsync(){
    try{
        await PromiseDefineAsync(1000);
        console.log(`condition is true`);

        await PromiseDefineAsync(1000);
        console.log(`Just Checking again`);
    }catch(err){
        console.log('Yeah so we should not execute promise as condition failed',err);
    }
}
testAsync();

console.log(`${10+'a' +10}`);