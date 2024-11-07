const http = require('http')


//variavel que define a porta do servidor
const porta_servidor = 3000;


//Cria conexao com nosso servidor e mostra nossa tag h1 html
const server = http.createServer((req, res)=>{

    //Quando a requisição chegar aqui, vamos chamar o modulo url e vamos parsea a urrl que vem pela requisição
    const urlInfo = require('url').parse(req.url, true);

    const name = urlInfo.query.name

    res.statusCode = 200;
    res.setHeader('Contenty-type', 'text/html');

    if(!name){
            res.end('<h1>Preencha o seu nome</h1><form method="GET"><input type="text" name="name"/><input type="submit" value="Enviar"/></form>')
    }else{  
            res.end(`<h1>Seja bem vindo ${name}</h1>`)
    }

})

server.listen(porta_servidor, ()=>{
    console.log(`Servidor rodando na porta ${porta_servidor}`);
})
