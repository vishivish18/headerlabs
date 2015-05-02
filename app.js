var express    =       require("express");
var multer     =       require('multer');
var app        =       express();



app.get('/',function(req,res){
      res.sendfile("index.html");
});

app.listen(3000,function(){
    console.log("listening on port 3000");
});
