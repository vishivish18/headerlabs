var express    =       require("express");
var multer     =       require('multer');
var app        =       express();
var done       =       false;

app.use(multer({ dest: './uploads/',
 rename: function (fieldname, filename) {
    return filename+Date.now();
  },
onFileUploadStart: function (file) {
  console.log(file.originalname + ' is starting ...'+file.length)
for (i = 0; i < file.length; i++) {
    console.log('uploadig');
}

},
onFileUploadComplete: function (file) {
  console.log(file.fieldname + ' uploaded to  ' + file.path)
  done=true;
}
}));

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
      res.sendfile("index.html");
});

app.post('/api/photo',function(req,res){

if(done==true){
    console.log(req.files);
    console.log('this is the size'+ (req.files['userPhoto'].size/1024)+'kb');
      
      
    res.end("File uploaded.");
  }
   
});

app.listen(3000,function(){
    console.log("listening on port 3000");
});
