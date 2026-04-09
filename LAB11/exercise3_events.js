const http = require('http');
const EventEmitter = require('events');

const PORT = 3002;

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    const eventEmitter = new EventEmitter();

    let output = "";

    eventEmitter.on('message', (name) => {
        output += `Hello ${name}<br>`;
    });

    eventEmitter.on('message', (name) => {
        output += `Welcome ${name} to Node.js<br>`;
    });

    eventEmitter.emit('message', 'Vaadyu');

    eventEmitter.on('end', () => {
        output += "Goodbye!<br>";
    });

    eventEmitter.emit('end');

    res.write("<h2>Event Output</h2>");
    res.write(output);
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
