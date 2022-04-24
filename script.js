const express = require('express');
const { format } = require('path');
const path = require("path");
const app = express()
const server = require("http").createServer(app);
const io = require("socket.io")(server)
const port = 3000

let users = []
app.use(express.static(path.join(__dirname  + "/views")));

app.get("/", (req, res)=>{
    res.render(path.join(__dirname, "/views/index.html"))
    
})

app.get('/roomlist', (req, res) =>{
  res.sendFile(path.join(__dirname, "views/roomlist.html"))
})
app.get("/lobby", (req, res)=>{
  res.sendFile(path.join(__dirname,"/views/lobby.html"))
})


io.on("connection" , (socket) =>{
  console.log('new connection');
  // socket.on("joinRoom" , ({id , room}) =>{
  //   const user = userJoin(socket.id , username, room);
  //   socket.emit('message' , formatMessage(id, 'welcome to the room.'))
  // })

  socket.on("new message", msg =>{
    console.log("new message on the server: ", msg);
    io.emit("incoming" , msg)
  })

  socket.on("disconnect", () => {
    console.log('disconnect')
  })


})



server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

