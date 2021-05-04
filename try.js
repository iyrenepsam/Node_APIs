var bodyParser=require('body-parser')
var express = require('express')
var mongoose=require('mongoose');

var app = express()

app.get('/', (req, res)=>{
  res.send('Hello World!')
})

app.listen(3000, ()=> {
  console.log('Example app listening on port 3000!')
})