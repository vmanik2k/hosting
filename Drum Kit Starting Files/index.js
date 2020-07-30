var numberof =document.querySelectorAll(".drum").length;
for(var i=0;i<numberof;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
          var buttonClicked = this.innerHTML;
          makeSound(buttonClicked);

  });
}
document.addEventListener("keypress",function(event){
  console.log(event.key);
  makeSound(event.key);
  console.log(event.key);
  makeAnimation(event.key);
});
function makeSound(key){
  switch (key) {
    case "w":
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
      break;
      case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
        break;
        case "s":
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
          break;
          case "d":
          var audio = new Audio('sounds/tom-4.mp3');
          audio.play();
            break;
            case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
              break;
              case "k":
              var audio = new Audio('sounds/kick-bass.mp3');
              audio.play();
                break;
                case "l":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                  break;

    default:
    alert("Please Click the right letter");

  }
}
function makeAnimation(eve){
  document.querySelector("."+eve).classList.add("pressed");
  setTimeout(function(){document.querySelector("."+eve).classList.remove("pressed");},10);
}
