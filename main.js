window.onload = function() {
  console.log("init");
  
  var count = 1;
  
  setInterval(function() {
      var imgEl = document.getElementById("theimg");
      imgEl.src = "images/"+(count++)+".png";
      console.log("current src:"+imgEl.src);
  }, 1 * 1000);
}