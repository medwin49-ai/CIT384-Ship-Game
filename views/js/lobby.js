 const socket = io()

 document.getElementById("send").addEventListener("click" , textchat)
 messages = document.getElementById("output")
 function textchat() {
     message = document.getElementById('from').value
     socket.emit("new message" , message);
     message = '' ;
 }

 socket.on("incoming" , msg =>{
     var p= document.createElement("p")
     p.textContent = msg;
    messages.appendChild(p)
})