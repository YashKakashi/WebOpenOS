const PORT = process.env.PORT || 5000;
let http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Test Running Successful!');
}).listen(parseInt(PORT));