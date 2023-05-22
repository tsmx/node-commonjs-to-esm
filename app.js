const express = require('express');
const routes = require('./handlers/routes');

var app = express();

// main route
app.get('/', (req, res) => { res.json({ message: 'Hi there!' }); });
// additional routes from route-handlers
app.get('/route1', routes.route1);
app.get('/route2', routes.route2);

module.exports = app;