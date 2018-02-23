const express = require( 'express' );
const app = express();
const path = require( 'path' );
const bodyParser = require( 'body-parser' );
const port = process.env.PORT || 12345;
const imageRouter = require('./routes/image-router');


// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));

// serve back static files
app.use(express.static('server/public'));

// app.use('jokes', jokeRouter); 


app.listen(port, function(){
  console.log('server running on: ', port);
});