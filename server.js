const http = require("http");
const hostname = "127.0.0.1";
const port = "3000";
const fs = require("fs");

const server = http.createServer( (request, response) => {

	console.log(request.method, request.url);

	switch (request.url) {
		case '/css/styles.css':
			response.end( fs.readFileSync("css/styles.css", "utf8" ) );
			break;
		case '/js/script.js':
			response.end( fs.readFileSync("js/script.js", "utf8") );
			break;
		// sample
		case '/img/icon1.png':
			response.end( fs.readFileSync("img/icon1.png") );
			break;

		case '/img/icon2.png':
			response.end( fs.readFileSync('img/icon2.png') );
			break;

		case '/img/icon3.png':
			response.end( fs.readFileSync('img/icon3.png') );
			break;

		case '/img/icon4.png':
			response.end( fs.readFileSync('img/icon4.png') );
			break;

		case '/img/snap1.png':
			response.end( fs.readFileSync('img/snap1.png') );
			break;

		case '/img/snap2.png':
			response.end( fs.readFileSync('img/snap2.png') );
			break;

		case '/img/snap3.png':
			response.end( fs.readFileSync('img/snap3.png') );
			break;

		case '/img/logo.png':
			response.end( fs.readFileSync('img/logo.png') );
			break;

		case '/img/banner.png':
			response.end( fs.readFileSync('img/banner.png') );
			break;

		case '/img/fill.png':
			response.end( fs.readFileSync('img/fill.png') );
			break;

		case '/img/phone.png':
			response.end( fs.readFileSync('img/phone.png') );
			break;

		case '/img/message.png':
			response.end( fs.readFileSync('img/message.png') );
			break;

		case '/img/tweet.png':
			response.end( fs.readFileSync('img/tweet.png') );
			break;

		case '/img/quote.png':
			response.end( fs.readFileSync('img/quote.png') );
			break;
		case '/flavicon.ico':
			response.end( fs.readFileSync('img/flavicon.ico') );
			break;
		case '/img/burger.png':
			response.end( fs.readFileSync('img/burger.png') );
			break;

		//
		default:
			response.end( fs.readFileSync("html/index.html", "utf8") );

	}

})

server.listen(process.env.PORT || port);
