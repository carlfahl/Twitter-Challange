$(function(){

var source = $('#template1').html();
var template = Handlebars.compile(source);
var data = {};
var refreshView = function() {
    var html = template(data);
    $('.output').html(html);

};

    $('#getFollowers').on('click', function(){
        var handle = $('#handle').val();
        $.ajax('/api/twitter/' + handle + '/followers/').then(function(list){
                data.context = list;
                console.log("followers populated");
                refreshView();
        });
    });

    $('#getFriends').on('click', function(){
        var handle = $('#handle').val();
        $.ajax('/api/twitter/' + handle + '/friends/').then(function(frns){
            data.context = frns;
            console.log("friends populated")
            refreshView();
        });
    });


});


