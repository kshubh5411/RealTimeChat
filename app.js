var express     =    require('express');
var app         =    express();
var ejs         =    require("ejs");
var http        =    require('http');
var server      =    http.Server(app);
var io          =    require('socket.io')(server);

//set view Engine====
app.set("view engine","ejs");
app.use(express.static('public'));


//Make io connection===
  io.on('connection',function(socket)
  {
   socket.on('chat',function (data) {
       io.sockets.emit('chat',data);
   });
   console.log("listening to both "+socket.id);
  })
  
  //Route to index;
  app.get("/",function(req,res)
  {
   res.render("../public/index");
  });
  
  //listening server
  server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  var address = server.address();
  console.log("Chat server running at", address.address + ":" + address.port);
});