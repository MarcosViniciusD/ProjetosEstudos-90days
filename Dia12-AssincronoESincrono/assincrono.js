const fs = require('fs');
console.log('Iniciando');

fs.writeFile('arquivo.txt', 'Opa, tudo bem?', function(err){
    setTimeout(function(){
        console.log("ARQUIVO CRIADO COM SUCESSO.");
    },1000);
} )

console.log("Código Finalizado.")

/**
 * Percebece que o console.log apresenta "codigo finalizado" porem, o arquivo ainda nao foi criado ja que demos um timeout de 1s 
 * e mesmo com o timout o codigo seguiu o fluxo da aplicação normalmente.
 */
