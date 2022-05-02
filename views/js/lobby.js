 const socket = io()

 document.getElementById("send").addEventListener("click" , textchat)
 messages = document.querySelector(".output-message")
 function textchat() {
     message = document.getElementById('from').value
     if (message != ""){
        userid = socket.id
     socket.emit("new message" , message , userid);
     document.getElementById('from').value= "" ;
     }

 }

 socket.on("incoming" ,( msg , userid)=>{
     var strong = document.createElement("strong")
     var p= document.createElement("p")
     var textnode = document.createTextNode(msg);
     var strongnode = document.createTextNode(userid + ":");
    p.appendChild(textnode)
    strong.appendChild(strongnode)
    messages.appendChild(strong)
    messages.appendChild(p)
})