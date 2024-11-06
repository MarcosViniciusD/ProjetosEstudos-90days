const fs = require('fs')
console.log("Iniciando");

fs.writeFileSync('arquivo.txt', 'SalveGalera')

console.log("Fim da execução");
/**
 * Bom, nesse codigo acima, a funcao SYNC, basicamente faz com que o código "pause" ate que o arquivo "arquivo.txt" seja criado
 * e da sequencia no console.log("Fim da execução");
 * Sendo bem diferente do Async, ja que o mesmo continuaria para a proxima linha de codigo, e assim que ele fizesse esse arquivo "arquivo.txt" nao mudaria nada na execução, entao o codigo 
 * "console.log('Fim da execução')"  seria exibido na tela mesmo se o arquivo.txt demorasse pra ser gerado.
 */