var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res) {
    fs.access('./cat2.png', function(err) {
        if (err) {
            res.statusCode = 404;
            res.end();
            return;
        }
        fs.readFile('./cat2.png', function(err, data){
            res.end(data);
        });
    });
}).listen(3000);