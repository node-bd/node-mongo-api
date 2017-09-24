var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readData', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeData.txt');

myReadStream.pipe(myWriteStream);
