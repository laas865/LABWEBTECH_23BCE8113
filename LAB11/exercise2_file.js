const http = require('http');
const fs = require('fs');

const PORT = 3001;

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    fs.writeFile('sample.txt', 'Hello, this is a file.<br>', (err) => {
        if (err) throw err;

        fs.appendFile('sample.txt', 'Appending new content.<br>', (err) => {
            if (err) throw err;

            fs.readFile('sample.txt', 'utf8', (err, data) => {
                if (err) throw err;

                fs.unlink('sample.txt', (err) => {
                    if (err) throw err;

                    res.write("<h2>File Operations Output</h2>");
                    res.write(data);
                    res.write("<br><b>File deleted successfully</b>");
                    res.end();
                });
            });
        });
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
