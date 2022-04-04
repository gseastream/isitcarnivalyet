var bcaptions = captions.before;

var index = Math.floor(Math.random() * bcaptions.length);
var text = bcaptions[index];
document.getElementById("caption").innerHTML = text;
