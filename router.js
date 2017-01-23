const fs = require('fs');

module.exports = function(request, response) {
  var url = request.url;
  if (url === '/') {
    fs.readFile('index.html', function(err, file) {
      if (err) throw err;
      response.writeHead(200, { "content-type": "text/html" });
      response.end(file);
    });
  } else if (url  === '/adapter') {
    fs.readFile('adapter.js', function(err, file) {
      if (err) throw err;
      response.writeHead(200);
      response.end(file);
    });
  } else {
    response.writeHead(404);
    response.end('sorrz');
  }
};
