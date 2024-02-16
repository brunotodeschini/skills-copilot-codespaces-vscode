// Create web server
// 1. Import module http
const http = require('http');
// 2. Create web server
const server = http.createServer((req, res) => {
    // 3. Set response header
    res.setHeader('Content-Type', 'text/html');
    // 4. Set response content
    res.write('<html>');
    res.write('<head><title>My first web server</title></head>');
    res.write('<body><h1>Welcome to my first web server</h1></body>');
    res.write('</html>');
    // 5. End response
    res.end();
});
// 6. Set web server listen port
server.listen(3000); //