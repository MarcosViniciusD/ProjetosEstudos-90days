//Vai ler o argumento NOME na nossa linha de comando (TERMINAL ou CMD)

console.log(process.argv);

/*ao digitar "node argumentos.js nome= Marcos"
entao gerou os seguintes argumentos: 
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\marco\\Desktop\\aplicacaoComNode\\Dia3-Argumentos\\argumentos.js',
  'nome=MarcosVinicius'

Como fazemos pra recuperar apenas o argumento nome, da nossa array?
*/
//Atribui a variavel argumentos o nome
const argumentos = process.argv.slice(2);
//exibe o argumento 2 da array (Nome)
console.log(argumentos);
//Run node argumentos.js nome=Marcos Vinicius

const nome = argumentos[0].split("=")[1];

//Exibe o nome que foi passado no "nome=" dentro do nosso terminal
console.log(nome);

/**
 * Podemos fazer com idade, ou criar uma string apresentando nossos argumentos;
 *
 */
const idade = argumentos[1].split("=")[1];
console.log(idade);

const sexualidade = argumentos[2].split("=")[1];
console.log(sexualidade);

console.log(`O usuario ${nome} tem ${idade} anos de idade`);
