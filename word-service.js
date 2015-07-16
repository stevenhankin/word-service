var fs = require('fs');
var http = require('http');

fs.readFile('/usr/share/dict/words',{'encoding':'utf-8'}, function(err,data) {
  if (err) throw err;
  words = data.split('\n');
  console.log("Loaded "+words.length+" words");
  var wordCount = words.length;
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var n = Math.random();
    var randWordOffset = Math.round ( n * wordCount ).toString();
    res.end( words[randWordOffset] );
  }).listen(9090);
});

