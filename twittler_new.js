$(document).ready(function () {

    var draw = function () {
        var chat = $('#chats');
        chat.html("");

        for (var i = window.streams.home.length - 1; i >= 0; i--) {
            var tweet = window.streams.home[i];
            chat.append("<article id='msg'><span class='name'>" + tweet.user + "</span>" + ": " + tweet.message + ": " + tweet.created_at + "</span></article><br><br>");
        }
    }

    //setTimeout(draw,1000);
    draw();

     $("#refresh_button").click(function () {
        //event.preventDefault();
        //clearInterval(setTimeout(draw,1000));
        //setTimeout(draw,1000);
        //$("#chats").remove();
        draw();
    });

    $("#chats .name").click(function () {
        var thisUser = $(this).text();
        var userTweet = streams.users[thisUser];
        $("#chats").html("");
        $("#chats").html("<h3>" + thisUser + "</h3>");
        for (var i = userTweet.length - 1; i >= 0; i--) {
            $("#chats").append("<span class='newMsg'>" + userTweet[i].message + ": " + userTweet[i].created_at + "</span><br><br>");
        }
    });

   
});