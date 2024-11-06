//Metodo que define nosso http
const http = require('http')

//variavel que 
const porta_servidor = 3000


//Cria conexao com nosso servidor e escreve um texto no nosso navegador
const server = http.createServer((req, res)=>{
    res.write('Escreve um texto como resposta');
    res.end()
})

server.listen(porta_servidor, ()=>{
    console.log(`Servidor rodando na porta ${porta_servidor}`)
})

/**
 * Pra iniciarmos nosso servidor, precisamos dar um `node index.js` 
 * logo em seguida acessarmos no nosso navegador a porta 3000
 * http://localhost:3000/
 *  * 
 * Vamos receber o "escreve um texto como resposta" no nosso navegador.
 * 
 * Para finalizar a execução do navegar damos um ctrl + C no nosso console.
 */