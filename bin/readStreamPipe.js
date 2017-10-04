var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/UnicodeData', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/UnicodeWriteData');

myReadStream.pipe(myWriteStream);
