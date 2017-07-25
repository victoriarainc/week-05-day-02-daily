const express = require('express');
const mustacheExpress = require('mustache-express');
const data = require('./data.js')
const app = express();

app.engine ('mustache', mustacheExpress());
app.set ('views', './views');
app.set ('view engine', 'mustache');

app.use (express.static('public'));

app.get('/', function(req, res) {
  res.render('home', {users:data.users})
});

app.get('/:user', function (req, res) {
  // res.send(req.params.user);
  res.render('goof', {
    users: req.params.id
  });
});

app.listen(3000, function() {
  console.log('You started the application!');
});
