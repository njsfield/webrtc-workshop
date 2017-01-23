const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('keys/key.pem'),
  cert: fs.readFileSync('keys/cert.pem')
};

const html = fs.readFileSync('index.html');

https.createServer(options, function (req, res) {
  res.writeHeader(200, {"Content-Type": "text/html"});
  res.write(html);
  res.end();
}).listen(8000, function(){
  console.log('Server running at https://localhost:8000/');
});
