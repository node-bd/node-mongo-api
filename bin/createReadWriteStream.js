var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readData', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeData.txt');


myReadStream.on('data', function (chunk) {
    console.log('New Chunk Received');
    myWriteStream.write(chunk);
});