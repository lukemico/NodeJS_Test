


// Modules
const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

// Server configuration
const hostname = '127.0.0.1';
const port = 9999;


// Render page
fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    const server = http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(port, hostname, () => {
    	// Console
	  	console.log(`Server running at http://${hostname}:${port}/`);
	});
});
server.listen(9999);



