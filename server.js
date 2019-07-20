var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    fs.ReadStream('./views/home.ejs').pipe(res);
    // res.end();
}).listen(8000);