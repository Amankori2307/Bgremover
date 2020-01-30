const express = require("express");
const upload = require("express-fileupload");
const apiCall = require('./apiCall');
const callUpload = require('./fileUpload');
const fs = require('fs')
const app = express();


app.use(upload());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
app.get('/',function(req, res){
    res.render('index');
});
app.post('/', function(req, res){
    if(req.files){
        var file = req.files.filename;

        if(!fs.existsSync(`./public/bgremove/bgremove.${file.name}`)){
            callUpload(file);
            apiCall(file);
        }
        res.render('upload',{file : file});
    }else{
        res.send(`Please do select an image to remove background<br><a href = '/'>Home</a>`);
    }
});

// listening to port 3000
app.listen(3000,function(){
    console.log('server has started');
});