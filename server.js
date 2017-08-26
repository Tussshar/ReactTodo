/*
require is the node keyword to load in the module.
reuire takes only one argument i.e. module name
*/
var express = require('express'); //This gives us access to entire express api



//create our app
var app = express();

//when working with node we can access the PORT variable by accessing the process.env object
const PORT = process.env.PORT || 3000;


/*
	The below line of code allows us to run our app on both http and https
*/
app.use(function(req, res, next){
	if(req.headers['x-forwarded-proto'] === 'https'){
		res.redirect('http://' + req.hostname + req.url);
	} else{
		next();
	}
});

/*
App.use lets u add functionality to ur application
*/
app.use(express.static('public'));



app.listen(PORT, function(){
	console.log('Express server is on port ' + PORT);
});
