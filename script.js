const express = require('express');
const { format } = require('path');
const path = require("path");
const app = express()
const server = require("http").createServer(app);
const io = require("socket.io")(server)
const port = 3000



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



// Socket.io section
io.on("connection" , (socket) =>{
  const users = []
  socket.on("user-information",(username)=>{
    const user = {
      username,
      id: socket.id,
    };

    users.push(user)
    io.emit("new user" ,user)
    console.log(users)
  })

  socket.on("new message",( msg ,userid )=>{
    console.log(userid + ": ", msg);
    io.emit("incoming" , msg , userid)
  });

  socket.on("disconnect", () => {
    console.log('disconnect')
  });



  // socket.on("join room", (roomName , cb)=>{
  //   socket.join(roomName);
  //   cb(messages[roomName]);
  // });


});



server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

