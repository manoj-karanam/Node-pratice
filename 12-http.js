
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to my pages");
    } else if (req.url === '/about') {
        res.end("Here is the about page");
    } else {
        res.end(`<h1>Cannot find the page you are 
        looking for!</h1><a href='/'>Back Home</a>`);
    }
});

server.listen(5001);

