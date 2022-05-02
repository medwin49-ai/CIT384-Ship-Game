const socket = io()

document.getElementById("user-button").addEventListener("click" , function(){
    let username = document.getElementById("user-id").value
    var hideInput = document.querySelector(".user-input")
    var singleplay = document.getElementById("spb")
    var multiplPlayer = document.getElementById("mp")
    console.log(username)
    if (hideInput.style.display === "none") {
       hideInput.style.display ="block"
        
      } else {
        hideInput.style.display = "none";
        singleplay.style.display = "block";
        multiplPlayer.style.display = "block"
      }
    
    let p = document.createElement("p")
    let node = document.createTextNode("Welcome, " + username)
    p.appendChild(node)
    document.body.appendChild(p)
    socket.emit("user-information" , username)
})





socket.on("connect", () =>{
    console.log(socket.id)
})

