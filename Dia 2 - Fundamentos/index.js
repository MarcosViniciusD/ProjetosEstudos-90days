//importação modulo (arquivo dia2.js)

const meuModulo = require("./dia2.js");

/*Podemos colocar a função vinda do Dia2.js em uma variavel
Aqui estamos encapsulando nossa função soma, dentro da nossa variavel soma. Para podermos utilizar com o nome "soma"
*/
const soma = meuModulo.soma;

//Chamamos a função soma e passamos os parametros
soma(5, 10);
soma(10, 90);

//vá até o caminho cd "aplicacaoComNode\Dia 2 - Fundamentos" e rode "node Index.js"
