const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "/views/index.html"));
})
app.get('/milanesa', function(req, res){
    console.log(req.url)
    res.sendFile(path.join(__dirname, "/views/babbage.html" ))
})
app.get('/berners-lee', function(req, res){
    res.sendFile(path.join( __dirname, "/views/berners-lee.html" ))
})
app.get('/clarke', function(req, res){
    res.sendFile(path.join( __dirname, "/views/clarke.html" ));
})
app.get('/hamilton', function(req, res){
    res.sendFile(path.join( __dirname, "/views/hamilton.html" ));
})
app.get('/hopper', function(req, res){
    res.sendFile(path.join( __dirname, "/views/hopper.html" ));
})
app.get('/lovelace', function(req, res){
    res.sendFile(path.join( __dirname, "/views/lovelace.html" ));
})
app.get("turing", function(req, res){
    res.sendFile(path.join( __dirname, "/views/turing.html" ));
})


app.listen(process.env.PORT || 3030, function(){
    console.log("Puerto funcionando en el 3030!")
})