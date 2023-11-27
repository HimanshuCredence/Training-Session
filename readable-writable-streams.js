const fs = require('fs');

const creatingReadStream = fs.createReadStream(__dirname + '/read-stream.json', 'utf8');
const creatingWriteStream = fs.createWriteStream(__dirname + '/writeStream.json');

// manual way to write the readed stream
creatingReadStream.on('data',(chunks) => {
    console.log(`chunks are getting printed ${chunks}`);
    creatingWriteStream.write(chunks);
})

// using pipe() to get same result with less code
creatingReadStream.pipe(creatingWriteStream);
