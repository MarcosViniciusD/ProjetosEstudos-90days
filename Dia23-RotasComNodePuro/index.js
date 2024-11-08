const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    const filename = req.url === '/' ? 'index.html' : req.url.slice(1);

    if (filename.includes('html')) {
        if (fs.existsSync(filename)) {
            fs.readFile(filename, (err, data) => {
                if (err) {
                    res.writeHead(500, { 'content-type': 'text/html' });
                    res.write("<h1>Erro interno no servidor</h1>");
                    return res.end();
                }
                res.writeHead(200, { 'content-type': 'text/html' });
                res.write(data);
                return res.end();
            });
        } else {
            fs.readFile('404.html', (err, data) => {
                res.writeHead(404, { 'content-type': 'text/html' });
                res.write(data);
                return res.end();
            });
        }
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
