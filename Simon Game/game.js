var level = 0;
var gamePattern=[];
var buttonColors =["red","green","yellow","blue"];
var userClickedPattern=[];
var started = false;
function nextSequence(){
  var randonNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randonNumber];
  gamePattern.push(randomChosenColor);
  makeAnimation(randomChosenColor);
  playSound(randomChosenColor);
  userClickedPattern=[]
  level++;
  $("#level-title").text("Level "+level);
}


$(".btn").click(function(){
  var userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
  playSound(userChosenColor);
  makeAnimation(userChosenColor);
   checking(userClickedPattern.length-1);
console.log(userClickedPattern);
//  setTimeout(function (){nextSequence();},1000)
});



function playSound(name){
  var audio = new Audio('sounds/'+name+'.mp3');
  audio.play();
}
function makeAnimation(nme){
  $("#"+nme).addClass("pressed");
  $("#"+nme).fadeOut(20).fadeIn(20);
  setTimeout(function(){$("#"+nme).removeClass("pressed")},10);
}

$(document).keypress(function(){
  if(!started){
  nextSequence();
  $("#level-title").text("Level " + level);
  started =true;

}});
function checking(current){
  console.log("enter");
  if(gamePattern[current]===userClickedPattern[current]){
    console.log(gamePattern[current]+" "+userClickedPattern[current]);
    if(gamePattern.length===userClickedPattern.length){
      console.log("success");
    setTimeout(function(){nextSequence()},500);
  }
}
    else{
      var aud = new Audio("sounds/wrong.mp3");
      aud.play();
      $("body").addClass("game-over");
      setTimeout(function(){
        $("body").removeClass("game-over");
      },200);
      $("h1").text("Game Over, Press r to Restart");
          startOver();

    }
    //setTimeout(function (){nextSequence();},1000);
}
function startOver(){
  level = 0;
  gamePattern.length=0;
  userClickedPattern.length=0;
  started= false;
}
