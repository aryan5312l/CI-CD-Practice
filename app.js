const http = require("http");

const PORT = 3000;

http.createServer((req, res) => {
	res.end("Version 3 deployed via Kubernetes\n");
}).listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
