var bodyParser=  require('body-parser'), 
    cors= require('cors'); 

module.exports= function (app, express){
  var apiRouter= express.Router(); 
  app.use(cors());
  app.use(bodyParser.urlencoded({extended:true})); 
  app.use(bodyParser.json()); 

  // serve static assets from client folder
  app.use(express.static(__dirname + '/../client'));

  //prefix routes in apiRouter with /api
  app.use('/api', apiRouter); 

  require('./apiRoutes.js')(apiRouter); 
}