var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
/* --------------------- routes */

/* index route */
app.get('/', function(request, response) {
  response.render('pages/index');
});
/* about me route */
app.get('/aboutMe', function(request, response) {
  response.render('pages/aboutMe');
});
/* contact route*/
app.get('/contact', function(request, response) {
  response.render('pages/contact');
});
/* glacier route*/
app.get('/lifeCoach', function(request, response) {
  response.render('pages/lifeCoach');
});
/* glacier route*/
app.get('/glacier', function(request, response) {
  response.render('pages/glacier');
});
/* mas cakes route*/
app.get('/masCakes', function(request, response) {
  response.render('pages/masCakes');
});
/* dj rock route*/
app.get('/djRock', function(request, response) {
  response.render('pages/djRock');
});
/* food matrix route*/
app.get('/foodMatrix', function(request, response) {
  response.render('pages/foodMatrix');
});
/* internship route*/
app.get('/internship', function(request, response) {
  response.render('pages/internship');
});
/* touse route*/
app.get('/touse', function(request, response) {
  response.render('pages/touse');
});
/* cars route*/
app.get('/cars', function(request, response) {
  response.render('pages/cars');
});
/* veterans route*/
app.get('/veterans', function(request, response) {
  response.render('pages/veterans');
});
/* dream calculator route*/
app.get('/dreamCalculator', function(request, response) {
  response.render('pages/dreamCalculator');
});
/* fat albert route*/
app.get('/fatAlbert', function(request, response) {
  response.render('pages/fatAlbert');
});



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


