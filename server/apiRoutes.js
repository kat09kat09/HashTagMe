var config= require('./config.js')(); 
var request= require('request'); 

module.exports= function (apiRouter){
  
  var accessToken; 

  var requestAccessToken= function (res, code){
    request.post(
        { form: { client_id: config.instagram_client_id,
                  client_secret: config.instagram_client_secret,
                  grant_type: 'authorization_code',
                  redirect_uri: 'http://localhost:3000/api/auth',
                  code: code
                },
          url: 'https://api.instagram.com/oauth/access_token'
        },
        function (err, response, body) {
          if (err) {
            console.log("error in swapping code for instagram token", err)
          } else {
            accessToken= JSON.parse(body).access_token; 
            res.redirect('http://localhost:3000/#/home?token='+accessToken); 
          }
        }
      );
  }

  //Step Two: Receive the redirect from Instagram
  apiRouter.get('/auth', function (req, res, next){
    if(req.params.error) {
      console.log('error with authenticaiton')
      res.redirect('/login');
    } else {
      //Step Three: Request the access_token
      var code= req.query.code;
      requestAccessToken(res, code); 
    }
  })

}