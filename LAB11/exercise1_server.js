const http = require('http');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    res.write("Hello! This is a Node.js server.\n");
    res.write("Requested URL: " + req.url + "\n");

    res.end("Response completed.");
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
