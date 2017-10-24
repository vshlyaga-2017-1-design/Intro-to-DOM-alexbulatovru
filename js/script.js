document.addEventListener("DOMContentLoaded", function() {
  var paragraphs = document.querySelectorAll("p").length;
  for(i=0;i<paragraphs;i++){
    changePair(random(paragraphs), random(paragraphs));
  }
});
function random(max){
  return Math.floor(Math.random() * max + 1);
}
function changePair(x, y){
  if(x!=y){
    var d1=document.getElementById("p" + x.toString());
    var d2=document.getElementById("p" + y.toString());
    var d11=d1.cloneNode(true);
    var d22=d2.cloneNode(true);
    d2.parentNode.insertBefore(d11,d2);
    d1.parentNode.insertBefore(d22,d1);
    d1.parentNode.removeChild(d1);
    d2.parentNode.removeChild(d2);
  }
}
