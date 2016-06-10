//Callback functions
var error = function (err, response, body) {
    document.getElementById("tweets").innerText = 'ERROR :' + err;
};
var success = function (data) {
    document.getElementById("tweets").innerText = 'Data: ' + data;
};

var Twitter = require('twitter-js-client').Twitter;

//Get this data from your twitter apps dashboard
var config = {
    "consumerKey": "XXX",
    "consumerSecret": "XXX",
    "accessToken": "XXX",
    "accessTokenSecret": "XXX",
    "callBackUrl": "XXX"
}

var twitter = new Twitter(config);

//Example calls

twitter.getUserTimeline({ screen_name: 'BoyCook', count: '10'}, error, success);