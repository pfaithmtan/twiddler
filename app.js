$(document).ready(function(){

  var $body = $('body');
  var $tweetButton = $('#newTweetButton');
  var $allTweets = $('.allTweets');

  var $newTweets = $(":button")
  $newTweets.attr('value', 'See new tweets!');
  $newTweets.prependTo($tweetButton);

  var previousLength = 0;

  var showNewTweets = function() {
    $allTweets.show();

    var copyOfTweets = streams.home.slice();
    var index = previousLength;

    while(index < copyOfTweets.length){
      var tweet = copyOfTweets[index];
      var $tweet = $('<div></div>');
      var $username = $('<div></div>');
      var $tweetBody = $('<div></div>');

      $tweet.addClass("tweets");
      $username.addClass("user");
      $tweetBody.addClass("tweetBod");
      $username.text('@' + tweet.user);
      $tweetBody.text(tweet.message);
      $username.appendTo($tweet);
      $tweetBody.appendTo($tweet);

      $tweet.prependTo($allTweets);
      $($username).on('click', () => clickUser(event.target));
      index += 1;
    }

    previousLength = copyOfTweets.length;
  };

  showNewTweets();

  $($newTweets).on('click', showNewTweets);

});