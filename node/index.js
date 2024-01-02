const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    
    const url = req.url; 

    if(url ==='/about') {
        res.write(' <h1> Welcome to about us page </h1>'); 
        res.end(); 
    }
    else if(url ==='/contact') {
        res.write(' <h1> Welcome to contact us page </h1>'); 
        res.end(); 
    }
    else {
        res.write('<h1> Hello Node </h1>'); 
        res.end(); 
    }

})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})

