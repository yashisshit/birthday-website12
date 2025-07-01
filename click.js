
function clickEffect() {
  if (navigator.vibrate) navigator.vibrate(80);
  var audio = new Audio("click.mp3");
  audio.play();
}
