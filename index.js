const express = require('express')
const app = express()
const path = require("path");



app.use(express.static(__dirname  + "/public"));
const port = 3000

app.get("/", (req, res)=>{
    console.log(__dirname )
    res.sendFile(path.join(__dirname, "index.html"))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
