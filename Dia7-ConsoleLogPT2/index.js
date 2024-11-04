/**
 * Precisamos instalar o chalk para deixar o nosso console mais bonito;
 * >npm init
 * >npm install chalk
 * o Chalk serve para deixarmos nosso console ou nossas mensagens um pouco mais agradevel. Podemos ver mais estilos no documentação do chalk:
 * Link: https://www.npmjs.com/package/chalk
 */

//importando o chalk
import chalk from 'chalk';


//deixa o texto em azul
//console.log(chalk.blue('Salve galera'))

let nota1 = 5
let nota2 = 7
let nota3 = 5
let nota4 = 6

const resultado  = (nota1 + nota2 +nota3 +nota4)/4;

if (resultado < 6){
    console.log(chalk.bgRed.bold(`A o aluno teve a média ${resultado} e ele esta Reprovado`));
} else {
    console.log(chalk.green.bold(`A o aluno teve a média ${resultado} e ele esta Aprovado`));
}



console.log(resultado);