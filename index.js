
var express = require('express'),
    app = express();
    bodyParser = require("body-parser"),
    path = require("path"),
    mongoose = require('mongoose'),
    views = path.join(__dirname, "views"),
    session = require("express-session"),
    twilioAPI = require('twilio-api'),
    twilio = require('twilio');
    env = process.env;



app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));

app.use(bodyParser.urlencoded({extended: true}));

app.use(
  session({
    secret: 'super-secret-private-keyyy',
    resave: false,
    saveUninitialized: true
  })
);



app.get("/", function (req, res) {
	var homepage = path.join(views, 'index.html');
	res.sendFile(homepage);
});


app.post("/sayHello", function (req, res) {
    var message = req.body;
    var name = message.name;
    var email = message.email;
    var text = message.text;

    var client = require('twilio')(env.TWILIO_ACCOUNT_SID, env.TWILIO_AUTH_TOKEN);
 
    client.messages.create({
        to: "+447783463286",
        from: "+441934446036",
        body: ("From: " + name + ' Contact: ' + email + ' RE: ' + text)
    });
    res.redirect('/');
});


// start the server
app.listen(process.env.PORT || 3000, function () {
    console.log("Yeah Buddy! head to:", this.address().port, app.settings.env);
});