$(document).ready(function(){

  var $body = $('body');
  var $tweetButton = $('#newTweetButton');
  var $allTweets = $('.allTweets');
  var $userTweets = $('.userTweets');

  var $newTweets = $(":button")
  $newTweets.attr('value', 'See new tweets!');
  $newTweets.prependTo($tweetButton);

  var previousLength = 0;

  var showNewTweets = function() {
    $allTweets.show();
    $userTweets.hide();

    var copyOfTweets = streams.home.slice();
    var index = previousLength;

    while(index < copyOfTweets.length){
      var tweet = copyOfTweets[index];
      var $tweet = $('<div></div>');
      var $username = $('<div></div>');
      var $tweetBody = $('<div></div>');
      var $time = $('<div></div>');

      $tweet.addClass("tweets");
      $username.addClass("user");
      $tweetBody.addClass("tweetBod");
      $time.addClass("timeStamp");
      $username.text('@' + tweet.user);
      $tweetBody.text(tweet.message);
      $time.text('Created at: ' + tweet.created_at)
      $username.appendTo($tweet);
      $tweetBody.appendTo($tweet);
      $time.appendTo($tweet);

      $tweet.prependTo($allTweets);
      $($username).on('click', () => clickUser(event.target));
      index += 1;
    }

    previousLength = copyOfTweets.length;
  };

  showNewTweets();

  $($newTweets).on('click', showNewTweets);

  var clickUser = function(div) {
    var user = div.innerHTML.slice(1);
    $allTweets.hide();
    $userTweets.show();
    $userTweets[0].innerHTML = "";

    for (let i = 0; i < streams.users[user].length; i++) {
      var $tweet1 = $('<div></div>');
      var $username1 = $('<div></div>');
      var $tweetBody1 = $('<div></div>');
      var $time1 = $('<div></div>');

      $tweet1.addClass("tweets");
      $username1.addClass("user");
      $tweetBody1.addClass("tweetBod");
      $time1.addClass("timeStamp");
      $username1.text('@' + streams.users[user][i].user);
      $tweetBody1.text(streams.users[user][i].message);
      $time1.text('Created at: ' + streams.users[user][i].created_at);

      $username1.appendTo($tweet1);
      $tweetBody1.appendTo($tweet1);
      $time1.appendTo($tweet1);
      $tweet1.prependTo($userTweets);
    }
  };

});