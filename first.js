var http=require('http');
var server=http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'application/xml'});
	res.end('Hello World\n');
});
server.listen(1337,'127.0.0.1');
console.log('Server running at ....');