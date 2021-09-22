var http = require('http');
var server = http.createServer();

server.on('request', function(req, res) {
    res.write('Hello world');
    res.end();
});

server.listen(3000);