var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").on("click", function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});

function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  var randonNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randonNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 300);
}

// var color = ["blue", "green", "red", "yellow"];
// var pushPattern = [];
// var userPattern = [];

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");

//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

// //Handle clicks
// $(".btn").on("click", function () {
//   var userChosenColour = $(this).attr("id");
//   userPattern.push(userChosenColour);
//   playSound(userChosenColour);
//   animatePress(userChosenColour);
// });

// function nextSequence() {
//   var randonNumber = Math.floor(Math.random() * 4);
//   var chosenColour = color[randonNumber];

//   pushPattern.push(chosenColour);

//   $("#" + chosenColour)
//     .fadeIn(100)
//     .fadeOut(100)
//     .fadeIn(100);

//   playSound(chosenColour);
//   // animatePress(chosenColour);
// }
