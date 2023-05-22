const app = require('./app');

const httpPort = process.env.PORT || 3000;

app.listen(httpPort, () => { console.log('App listening on port', httpPort); });