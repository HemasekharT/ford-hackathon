const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
// app.use(express.static(path.join(__dirname, 'build')));
//
// app.get('/ping', function (req, res) {
//     return res.send('pong');
// });
//
// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
//
// app.listen(process.env.PORT || 8080);
//


const mysql = require('mysql');
// Set up connection to database.
const connection = mysql.createConnection({
    host: 'usesumosqldbpre01.database.windows.net',
    user: 'htirumal@ford.com',
    password: 'Sek_hem@052019',
    database: 'sumo-dev',
});

// Connect to database.
connection.connect();

// Listen to POST requests to /users.
app.post('/users', function(req, res) {
    // Get sent data.
    var user = req.body;
    // Do a MySQL query.
    connection.query('select count(*) from sumo_billing', user, function(err, result) {

        var count = result.get("count");
        alert(count);

    });
    res.end('Success');
});

app.listen(3000, function() {
    console.log('Example server listening on port 3000!');
});

module.exports = app;
