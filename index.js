// write your code here
var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World');
}).listen(8080);

console.log('Server is running @ http://127.0.0.1:8080');