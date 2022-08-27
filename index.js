var botones = document.querySelectorAll(".drum")

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", playSound)
}

document.addEventListener("keydown", playSound)

function playSound(e){
    switch (this.innerHTML || e.key) {
        case "w":
            new Audio('sounds/tom-1.mp3').play();
            buttonAnimation("w");
            break;
        case "a":
            new Audio('sounds/tom-2.mp3').play();
            buttonAnimation("a");
            break;
        case "s":
            new Audio('sounds/tom-3.mp3').play();
            buttonAnimation("s");
            break;
        case "d":
            new Audio('sounds/tom-4.mp3').play();
            buttonAnimation("d");
            break;
        case "j":
            new Audio('sounds/snare.mp3').play();
            buttonAnimation("j");
            break;
        case "k":
            new Audio('sounds/crash.mp3').play();
            buttonAnimation("k");
            break;
        case "l":
            new Audio('sounds/kick-bass.mp3').play();
            buttonAnimation("l");
            break;
          
        default:
            console.log(e.key)
            break;
    }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');
  setTimeout(function() {
    activeButton.classList.remove('pressed');
  }, 100);
}
