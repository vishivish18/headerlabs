var multer     =       require('multer');
var done       =       false;
var app = require('express')();
var http = require('http').Server(app);
var io = require("socket.io")(http);


var socket = io.listen(1222);  

io.on('connection',function(socket){
    console.log('hellll0 from server');
    
    app.post('/api/photo',function(req,res){
      if(done==true){
        console.log(req.files);
        console.log('this is the size'+ (req.files['userPhoto'].size/1024)+'kb');
        var filesize = (req.files['userPhoto'].size/1024);        
        console.log('File size is '+filesize);
        
        res.end("File uploaded.");
      }
    
    var testing = "just a test";
        socket.emit('test', {'test': req.files['userPhoto'].size});    
});

        
    
});




app.use(multer({ dest: './uploads/',
 rename: function (fieldname, filename) {
    return filename+Date.now();
  },
onFileUploadStart: function (file) {
  console.log(file.originalname + ' is starting ...')
},
onFileUploadComplete: function (file) {
  console.log(file.fieldname + ' uploaded to  ' + file.path)
  done=true;
      
}
}));



app.get('/',function(req,res){
      res.sendfile("index.html");
});



http.listen(3000, function(){
  console.log('listening on *:3000');
});
