var express    =       require("express");
var multer     =       require('multer');
var app        =       express();
var done       =       false;


app.get('/',function(req,res){
      res.sendfile("test.html");
});

app.listen(3000,function(){
    console.log("listening on port 3000");
});
