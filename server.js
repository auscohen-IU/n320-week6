const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Handle different routes here

});

server.listen(3000, 'localhost', () => {
    console.log("Server is running on http://localhost:3000");
});

const filePath = path.join(__dirname, req.url);

// check for the request URL
if (req.url === '/') {
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
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<h1>404 Not Found</h1>');
}

    const extname = path.extname(req.url);
    let contentType = 'text/html';
    
    if (extname === '.jpg' || extname === '.jpeg') {
        contentType = 'image/jpeg';
    } else if (extname === '.png') {
        contentType = 'image/png';
    } else if (extname === '.mp4') {
        contentType = 'video/mp4';
    }
    
    fs.readFile(path.join(__dirname, req.url), (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end('Error loading media');
        } else {
            res.writeHead(200, {'Content-Type': contentType});
            res.end(data);
        }
    });


// Serve a media file
const extname = path.extname(req.url);
let contentType = 'text/html';

if (extname === '.jpg' || extname === '.jpeg') {
    contentType = 'image/jpeg';
} else if (extname === '.pdf') {
    contentType = 'text/pdf';
} else if (extname === '.mp4') {
    contentType = 'video/mp4';
}

fs.readFile(path.join(__dirname, req.url), (err, data) => {
    if (err) {
        res.writeHead(500);
        res.end('Error loading media');
    } else {
        res.writeHead(200, {'Content-Type': contentType});
        res.end(data);
    }
});

