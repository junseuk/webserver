var net = require('net');

var host = '127.0.0.1';
var port = 3000;

var socket = new net.Socket();
socket.connect({host:host, port:port}, function(){
    console.log('success on connection')
    socket.on('data', function(){
        var str = data.toString();
        console.log('>>', str);
    });
    socket.on('end', function(){
        console.log('connection ends');
    });
    socket.write('Hello Socket Server');
    socket.write('bye bye');

    socket.end();
})



