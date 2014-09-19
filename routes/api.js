var express = require('express');
var api = express.Router();

var Twit = require('twit');

var T = new Twit({
    consumer_key:         'LQ7ydk8eEgklseB4u6WXV82ke'
    , consumer_secret:      'PbUwqbJCroBw0gmIksAYMmgV4hjhkZgpzpCAkNdY4dI3Jvbmsw'
    , access_token:         '857035806-FDf7T4zWRsUcqJ88t3m296jHvpwotlD8qAvRySN8'
    , access_token_secret:  'Tz3iZuxt8amrInUac6Lc94tvimAQSkURvt1o59tjlBRrb'
});

var followers;
//returns all of my followers

api.get('/followers/:ids', function (req, res){
    T.get('followers/list', { screen_name: req.params.ids },  function (err, data, response) {
        followers = res.json(data);
        console.log(followers.users[0].screen_name);

    });

});




module.exports = api;
