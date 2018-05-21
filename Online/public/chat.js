var socket = io.connect( "http://" + window.location.hostname + ":4000");

console.log(window.location.hostname);


var message = document.getElementById("message");

var handle = document.getElementById("handle");

var send = document.getElementById("send");

var output = document.getElementById("output");

var feedback = document.getElementById("feedback");

var chat = document.getElementById('mayank-chat');

var chatbutton = document.getElementById('chat');

var chatbutton2 = document.getElementById('chatoff');

chat.style.display = "none";
chatbutton2.style.display = "none";
chatbutton.addEventListener("click",function(){

	chatbutton.style.display = "none";

	chat.style.display = "block";
	chatbutton2.style.display = "block";


});

// chatoff.style.display = "block";

chatbutton2.addEventListener("click",function(){

	chatbutton2.style.display = "none";

	chat.style.display = "none";

	chatbutton.style.display = "block";


});
send.addEventListener("click",function(){
	socket.emit("chat",{message:message.value, handle:handle.value});

});
message.addEventListener("keypress",function(){
	socket.emit("typing",handle.value);
});

socket.on("chat",function(data){
	feedback.innerHTML="";
	output.innerHTML+='<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
});

socket.on("typing",function(data){
		feedback.innerHTML='<p><em>' + data + ' is marwaing....</em></p>'; 
});
