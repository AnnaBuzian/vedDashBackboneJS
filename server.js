var http = require('http');
var express = require('express');
/* Express Web Development Framework is used */
var app = express();
 
app.use(express.static('./public'));
/* Specifying the public folder to place the static html and javascripts */
 
/* app.get listens to GET requests to the URL in the first argument 
   and callback function is executed in respose to it */
app.get('/courses',function(req,res){
    console.log('Get Request obtained from Backbone.JS');
    data = {
        author:"Anna Buzian",
        frontend:"Backbone.JS",
        request:"GET",
        backend:"NODE.JS and Express"
    } /*data to be sent to the client */
    res.writeHead(200,{'Content-Type':'application/json'});
    /* The response type should be a JSON */
    res.write(JSON.stringify(data));
    /*The Javascript Object is converted to JSON and sent
     back to the browser as response*/
    res.end();
});
/*app.get listens to GET requests to the URL in the first argument 
   and callback function is executed in respose to it*/
app.post('/courses',function(req,res){
     
    console.log('Post Request Accepted' );
});
 
http.createServer(app).listen(8124);