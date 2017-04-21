var port = process.env.PORT || 3000,
    express = require('express'),
    wines = require('./routes/wines');
 
var app = express();
 
app.get('/wines', wines.findAll);
app.get('/wines/:id', wines.findById);
 
app.listen(port);
console.log('Listening on port ' + port + ' ...');