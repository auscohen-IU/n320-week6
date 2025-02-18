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

