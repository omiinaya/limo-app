require("dotenv").config()

var express = require("express")
var cors = require("cors")
var path = require("path");
var bodyParser = require("body-parser")
var keepAwake = require("./client/src/assets/addons/wakeUpDyno");

var app = express()
var port = process.env.PORT || 5000

var Users = require('./routes/Users');

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api/users/', Users);
app.use(express.static('public'));
app.use(express.static('client/build'));

//serving a page in case a route does not exist.
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

//initialize express listener.
app.listen(port, () => {
    console.log("Server is running on port: " + port + "!")
    keepAwake("https://limolux.herokuapp.com/");
})