const https = require('https');
const fs = require('fs');
const router = require('./router.js');

const options = {
  key: fs.readFileSync('keys/key.pem'),
  cert: fs.readFileSync('keys/cert.pem')
};

https.createServer(options, router).listen(8000, function(){
  console.log('Server running at https://localhost:8000/');
});
