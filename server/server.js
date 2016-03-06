var express= require('express');

var app= express(); 
var port= process.env.PORT || 3000;

require('./middleware.js')(app, express); 

app.listen(port, function (){
  console.log('Server is listening to port: ', port); 
}); 

module.exports = {
  app: app
}