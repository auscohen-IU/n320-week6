const http = require('http');
const fs = require('fs');
const path = require('path');

// Create an HTTP server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Serve index.html when visiting the homepage
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading index.html');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else if (req.url === '/about') {
        // Serve about.html when visiting the about page
        fs.readFile(path.join(__dirname, 'about.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading about.html');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else {
        // Serve static resources (like images, videos, etc.)
        const extname = path.extname(req.url);
        let contentType = 'text/html';  // Default content type

        if (extname === '.jpg' || extname === '.jpeg') {
            contentType = 'image/jpeg';
        } else if (extname === '.pdf') {
            contentType = 'text/pdf';
        } else if (extname === '.mp4') {
            contentType = 'video/mp4';
        }

        // Serve the file
        fs.readFile(path.join(__dirname, req.url), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading media');
            } else {
                res.writeHead(200, {'Content-Type': contentType});
                res.end(data);
            }
        });
    }
});

// Start the server on port 3000
server.listen(3000, 'localhost', () => {
    console.log("Server is running on http://localhost:3000");
});
