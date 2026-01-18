const http = require("http");

const PORT = 3000;

http.createServer((req, res) => {
	res.end("CI/CD Pipeline is working");
}).listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
