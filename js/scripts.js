$(function() {
  var flavors = ['white chocolate raspberry', 'malted moo shake', 'chocolate mudslide'];
  var list = '<ul>'
    flavors.forEach(function(flavor) {
      list += '<li>'+ flavor + '</li>';
    });
    list += '</ul>';
    document.getElementById("output").innerHTML = list;
  });
