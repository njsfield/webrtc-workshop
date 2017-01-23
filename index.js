const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('keys/key.pem'),
  cert: fs.readFileSync('keys/cert.pem')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end('Great success');
}).listen(8000, function(){
  console.log('Server running at https://localhost:8000/');
});
