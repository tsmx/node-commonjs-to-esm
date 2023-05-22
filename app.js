import express from 'express';
import * as routes from './handlers/routes.js';

var app = express();

// main route
app.get('/', (req, res) => { res.json({ message: 'Hi there!' }); });
// additional routes from route-handlers
app.get('/route1', routes.route1);
app.get('/route2', routes.route2);

export default app;