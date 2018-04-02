var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write('Node Test - End Points');
    res.write('Endpoint1');
    res.write('Endpoint2');
    res.write('rangeInfo');
    res.write('divisiorInfo');

    res.end();
});
server.listen(9999);