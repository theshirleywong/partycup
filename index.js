$(window).load(function(){
  var audio = new Audio('moveyourfeet.mp3');
  audio.play();

  function turnOnSound() {
    audio.play();
  }

  function turnOffSound() {
    audio.pause();
  }

  //Cup
 var cup = TweenMax.to('#cup', 0.3, {y: '-=20px', yoyo: true, repeat: -1, ease:Linear.easeNone});
  //juice movement
var juicemove = TweenMax.to('#juice2', 0.5, {x:-100, yoyo: true, repeat: -1});

  var shadowmove = TweenMax.to('.shadow', 0.3, {width:100, yoyo: true, repeat: -1});
  
  //var body =  TweenLite.to('body', 2, {backgroundColor:"#FAF994", yoyo:true, repeat:-1, ease:Power3.easeOut});
  
//   function random(min, max) {
//   return (min + Math.random() * (max - min) + 0.5) | 0;
// }

// function tweenToRandomColor() {
//   TweenLite.to("body", 1, {colorProps:{fillStyle:"rgb(" + random(0,255) + "," + random(0,255) + "," + random(0,255) + ")"}, onUpdate:update, onComplete:tweenToRandomColor});
// }

// tweenToRandomColor();
  

 });

 
  