document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  annimation(event.key);
});

for (var i = 0; i < 8; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
    annimation(this.innerHTML);
  });
}

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/0.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/1.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/2.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/3.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/4.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/5.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/6.mp3");
      audio.play();
      break;
    default:
      break;
  }
}

function annimation(key) {
  document.querySelector("." + key).classList.add("pressed");

  setTimeout(function () {
    document.querySelector("." + key).classList.remove("pressed");
  }, 100);
}
