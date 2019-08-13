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

});