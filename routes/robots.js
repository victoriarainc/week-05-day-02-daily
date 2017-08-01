const express = require('express');
const robot = require('../models/robot');

//EDITED: Added a router to group the two routes
var routes = express.Router();


routes.get('/', function(req, res) {
  //EDITED: Template now uses method from the model file.
  res.render('home', {users:robot.getAll()})
});

routes.get('/users/:robotName', function (req, res) {
  // We need to find items in the array that matches
  // what has been 'caught' in the url
  let username = req.params.robotName; // === 'hjuaz0';

  //EDITED: Template now uses method from the model file.
  let robot_item = robot.getOne(username);

  //EDITED: This logic got moved into the model file.
  // let robot_item = null;
  //
  // // We are trying to find and object who's username
  // // property equals what was in the url
  // for (let i = 0; i < data.users.length; i++) {
  //   let item = data.users[i];
  //   if (item.username === username) {
  //     robot_item = item;
  //     break;
  //   }
  // }

  // Return a 404 if the robot does not exist in our array.
  if (robot_item === null) {
    req.status(404).send('No user with that name');
    return;
  }

  res.render('goof', robot_item);
});

//EDITED: Makes the route object available for reference.
module.exports = routes;
