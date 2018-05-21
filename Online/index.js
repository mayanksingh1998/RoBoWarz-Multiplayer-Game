var express = require('express');
var socket = require('socket.io');
var app = express();



var server = app.listen(4000,'0.0.0.0',function(){

console.log("server shuru ho gya ");
});

app.use(express.static('public'));

var io = socket(server);

io.on('connection',function (socket){

	 console.log("USER CONNECTED...");

socket.on('chat', function (data){
	io.sockets.emit('chat',data);

});
socket.on("typing",function (data){

	socket.broadcast.emit("typing",data);
});
});


