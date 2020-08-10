
const http = require("http");
const fs = require('fs').promises;
const host = '0.0.0.0';//'localhost';
const port = 8080;
let indexFile;
const requestListener = function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(indexFile);

};

const server = http.createServer(requestListener);

fs.readFile(__dirname + "/jsHTML.html")
	.then(contents => {
		indexFile = contents;
		server.listen(port, host, () => {
			console.log(process.env);			
			console.log('Server is running on ' + host + ' at port ' + port);
		});
	})
	.catch(err => {
		console.error('Could not read HTML file');
		process.exit(1);
	});