/**
 * Vamos estudar o conceito de *Promises*.
 * De forma geral, uma Promise representa uma operação assíncrona: 
 * é como fazer uma solicitação e aguardar uma "promessa" de resposta 
 * que será resolvida no futuro, caso a operação tenha sucesso ou falhe.
 * 1) Instalar o inquirer
 * > npm install inquirer
 */

import inquirer from 'inquirer';

// Colocamos o método prompt, que será responsável por fazer as perguntas
inquirer
  .prompt([
    {
      // Definimos a primeira pergunta
      name: "pergunta1",
      message: "Qual o seu nome?",
    },
    {
      name: "pergunta2",
      message: "Quantos anos você tem?",
    },
    { 
      name: "pergunta3",
      message: "Já possui conta no nosso banco?",
    }
  ])
  .then((answers) => {
    console.log("Respostas:", answers);
    if(answers.pergunta1 == ""){
        console.log(`Voce precisa digitar um nome!`)
    }else{
        console.log(`${answers.pergunta1}`)
    }

  })
  .catch((err) => console.log("Erro:", err));
