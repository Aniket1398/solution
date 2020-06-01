(function (window) {

var names = ["Yaakov", "Jordan", "Jenny", "Jacob", "Paulito", "Frankie", "Laura", "Pablo", "Lakhan", "Jimmy"];

for (var i in names) {

 
  var firstLetter = ((names[i]).charAt(0)).toLowerCase();

  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);