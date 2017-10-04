var fs = require('fs');

fs.readFile('input.txt', 'utf8', function (err, data) {
    fs.writeFile('output.txt', data, function (err) {
        if (err) throw err;
        console.log('The file has been saved!');
        setTimeout(function () {
            fs.unlink('output.txt', function (err) {
                if (err) throw err;
                console.log('File has been deleted');
            })
        }, 6000);

    });
});

console.log('console text');
