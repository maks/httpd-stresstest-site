var STOP = false;

window.onload = function() {
  console.log("init");
  
  var count = 1;
  var DELAY = 25;//ms
  var MAX = 100;  
  
  setInterval(function() {
      if (STOP) {
        return;
      }
      var imgEl = document.getElementById("theimg");
      count = (count < MAX) ? count+1 : 1;
      imgEl.src = "images/number_"+(count)+".png";      
      console.log("current src:"+imgEl.src);
  }, DELAY);
}