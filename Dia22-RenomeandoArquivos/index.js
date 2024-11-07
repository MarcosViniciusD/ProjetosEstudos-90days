const fs = require('fs');

const arquivoAtual = 'abobrinha.txt';
const novoArquivo= 'laranjinha.txt';

fs.rename(arquivoAtual, novoArquivo, (err)=>{


 if(err){
    console.log(err);
 }
 console.log(`Arquivo foi renomeado para ${novoArquivo} com sucesso!`);
})