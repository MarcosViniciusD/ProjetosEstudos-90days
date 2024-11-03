/**
 * Iniciamos o nosso projeto com npm init, o mesmo criou o nosso package.json
 *
 * Vamos instalar o pacote minimist, entao precisamos passar o comando 'npm install minimist' no nosso terminal.
 * Basicamente o minimist ajuda a ler argumentos pela nossa linha de comando, assim como nós criamos alguns argumentos pela linha de
 * comando
 * no dia anterior, hoje iremos torna esses comandos reutilizaveis, podendo adicionar lógica ao nosso código ou qualquer outra coisa do
 * tipo
 */

//vamos chamar o modulo minimist
const minimist = require("minimist");

//extrai o 'argumentos' da linha de comando usando o minimist e os exibe no console.log;
const argumentos = minimist(process.argv.slice(2));
//codigo retirado da documentação, link: https://www.npmjs.com/package/minimist
//console.log(argumentos);

const name = argumentos["nome"];

//condição se o nome do usuario estiver vazio, retorne: "Nome está vazio, por favor preencha-o";
if (name === "") {
  console.log("Nome está vazio;");
} else {
  //caso contrario, exiba: O nome do usuário é (Nome do usuario).
  console.log(`O nome do usuário é: ${name}`);
}

/**
 * Para passarmos o parametro nome, utilizamos o seguinte comando na linha de codigo:
 * node index.js --nome=MarcosVinicius
 */
