const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Handle different routes here

});

server.listen(3000, 'localhost', () => {
    console.log("Server is running on http://localhost:3000");
});

