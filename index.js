const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Thank you so much to call me')
  })



app.listen(3000 , () => console.log("Listening to port 3000"));
