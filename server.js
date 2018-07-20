const http = require("http");
const hostname = "127.0.0.1";
const port = "3000";
const fs = require("fs");

const server = http.createServer( (request, response) => {
	
	console.log(request.metod, request.url);

	if ()
	response.end( fs.readFileSync("index.html", "utf8");	
})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
})