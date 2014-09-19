var express = require('express');
var api = express.Router();

var Twit = require('twit');

var T = new Twit({
    consumer_key:         'LQ7ydk8eEgklseB4u6WXV82ke'
    , consumer_secret:      'PbUwqbJCroBw0gmIksAYMmgV4hjhkZgpzpCAkNdY4dI3Jvbmsw'
    , access_token:         '857035806-FDf7T4zWRsUcqJ88t3m296jHvpwotlD8qAvRySN8'
    , access_token_secret:  'Tz3iZuxt8amrInUac6Lc94tvimAQSkURvt1o59tjlBRrb'
});

var Tweeter = function(name, screen_name , id){
    this.name = name;
    this.handle = screen_name;
    this.id = id;
};

var friends = [];
var followers = [];

/* GET home page. */
api.get('/', function(req, res) {
    console.log("/api worked");
    res.end();
});

api.get('/twitter/:handle/followers', function (req, res){
    followers = [];
    T.get('followers/list', { screen_name: req.params.handle },  function (err, data, response) {

        data.users.forEach(function(el){
            var follower = new Tweeter(el.name, el.screen_name, el.id);
            followers.push(follower);
        });
        res.json(followers);
    });

});


api.get('/twitter/:handle/friends', function (req, res){
    friends = [];
    T.get('friends/list', { screen_name: req.params.handle },  function (err, data, response) {
        data.users.forEach(function(el){
            var friend = new Tweeter(el.name, el.screen_name, el.id);
            friends.push(friend);
        });
        res.json(friends);
    });

});



module.exports = api;
