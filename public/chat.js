//Make connection

var socket= io.connect("https://resturantdekho-shubhamk541.c9users.io/");

//Query DOM
var message=document.getElementById("message");
var btn=document.getElementById("button");
var output=document.getElementById("output");


//Emit Event====
btn.addEventListener("click",function()
{
    if(message.value==="")
    {
        alert("Text message blank....")
    }
    else{
    socket.emit('chat',{
        message:message.value
    });
    message.value="";}
});
//listen Event on frontend===
var i=0;
var d = new Date();
var n = d.toLocaleTimeString();
socket.on('chat',function(data)
{
   
    {
    if(i%2==0)
    output.innerHTML+='<div class="alert alert-info" style="word-wrap:break-word;width:"100px";margin-left:40%;margin-right:5px">'+data.message+'<br><small><span class="glyphicon glyphicon-time">'+n+'</span></small> </div><hr>'
    else
     output.innerHTML+='<div class="alert alert-warning"style="word-wrap: break-word;width:"100px";margin-right:40%;margin-left:5px">'+data.message+'<br><small><span class="glyphicon glyphicon-time">'+n+'</span></small> </div><hr>'
 i++;}
});
