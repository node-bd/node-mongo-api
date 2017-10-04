var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/UnicodeData', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/UnicodeWriteData');


myReadStream.on('data', function (chunk) {
    console.log('New Chunk Received');
    myWriteStream.write(chunk);
});