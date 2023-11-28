/**
 *  reading and writing synchronously and asynchronously with fs module
 */

var fs = require('fs');

// reading and writing synchronously.
// all the data is read first before moving to next code. 
var readSynchronously = fs.readFileSync('read.json','utf8');
console.log(readSynchronously);

// writing files synchronously with fs
// all the data is write first before moving to next code. 
fs.writeFileSync('write.json',readSynchronously);
// this code will only run after above process gets complete
console.log(`code will print after synchronous reading and writing`);


// reading and writing asynchronously.

fs.readFile('read.json','utf8',(err,data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
        fs.writeFile('write-async.json',data, () => {
            console.log(`data is written asynchronously`);
        });
    }
});
// this will print before asynchronous code execution
console.log(`code will print before asynchronous reading and writing`);