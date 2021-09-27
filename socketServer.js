var net = require('net');
var server = net.createServer(function(socket){
    socket.write('Welcome to Socket server!');

    socket.on('data', function(data){
        var text = data.toString();
        console.log('Client send:', text);
    })
    socket.on('end', function(){

    })
})

//Server's event
server.on('listening', function(){
    console.log('server is listening')
})
server.on('close', function(){
    console.log('server is closing')
})
server.listen(3000);