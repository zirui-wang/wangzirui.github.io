var area = document.getElementById('loop-show-box');
var con1 = document.getElementById('con1');
var con2 = document.getElementById('con2');
var mytimer1 = null;
var mytimer = null;
var time = 1000 / 60;
con2.innerHTML = con1.innerHTML;
function scrollUp() {
  if (area.scrollTop >= con1.offsetHeight) {
    area.scrollTop = 0;
  } else {
    if (area.scrollTop % 25 == 0) {
      clearInterval(mytimer);
      clearInterval(mytimer1);
      mytimer1 = setTimeout(function() {
        mytimer = setInterval(scrollUp, time);
      }, 1000);
    }
    area.scrollTop++;
  }
}
mytimer = setInterval(scrollUp, time);
