const http = require('http')

//variavel que define a porta do servidor
const porta_servidor = 3000;


//Cria conexao com nosso servidor e mostra nossa tag h1 html
const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Contenty-type', 'text/html');
    res.end('<h1>Servidor rodando em HTML</h1>');
})

server.listen(porta_servidor, ()=>{
    console.log(`Servidor rodando na porta ${porta_servidor}`);
})
