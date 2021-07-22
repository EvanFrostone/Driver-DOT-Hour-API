const http = require('http');

const express = require('express')
const app = express()
app.use(express.json())
app.use(middleware.jsonErrorInBody)
app.use("/doc", express.static('apidoc'))
const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
