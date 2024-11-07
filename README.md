# Projeto Estudos 90 dias 📚📆✨

Projeto criado **a fim de** aprimorar meus conhecimentos na stack MERN (MongoDB, Express, React, Node.js).

## Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/MarcosViniciusD/ProjetosEstudos-90days.git
2.Navegue até o diretório do projeto e instale as dependências:
  ` cd ProjetosEstudos-90days`
   `npm install`

3. Execute o Projeto
npm start



## Dia 1: Entendendo sobre Módulos do Node.js 🖥️🔍

> É mais simples do que parece: o primeiro passo é entender o que são módulos e quais são suas categorias. Para isso, acesse o primeiro documento `Index.js` e `Arquivo.txt` e entenda sobre os Módulos do Node.js.

## Dia 2: Reforçando Fundamentos sobre Módulos do Node.js 🖥️🔄

> Fizemos um pequeno exercício para reforçar como funciona o módulo interno do Node.js, onde e como podemos reaproveitar pequenos blocos de código.

> Para ver o funcionamento do código, podemos entrar na pasta "Dia 2" e executar o comando `node Index.js` no terminal.

## Dia 3: Lendo Argumentos por Linha de Comando 📜

> O Node permite o envio de argumentos por linha de comando; esse será o tema abordado no Dia 3.

> Como podemos passar e utilizar variáveis e comandos por terminal? O `Argumentos.js` contém uma explicação mais detalhada sobre isso.

## Dia 4: Módulos Externos 📦

> Vamos revisar os conceitos do dia anterior, agora utilizando módulos externos que tornarão nosso trabalho muito mais fácil.

> Módulo utilizado na aula: **Minimist**.  
> Link da documentação: [Minimist](https://www.npmjs.com/package/minimist)

## Dia 5: Praticando com Argumentos 🏋️‍♂️

> Praticando com argumentos vistos nos dias anteriores.

## Dia 6: Entendendo como Funciona o Console 🖥️💬

> O console não serve apenas para utilizarmos a função `console.log`; ele é bem mais amplo que isso.  
> Além de podermos fazer interpolação de strings e variáveis no nosso console, podemos também limpar as mensagens do console, o que acaba sendo bem útil.

## Dia 7: Deixando o Console Mais Bonito com Chalk 🎨🖥️

> Nesta aula, vamos instalar o **Chalk**, uma biblioteca que nos permite adicionar cor e estilo ao console, tornando as mensagens mais agradáveis e fáceis de visualizar.

>Nesse exemplo, caso o aluno esteja reprovado, a mensagem será exibida em vermelho com fundo destacado. Se aprovado, aparecerá em verde.

>Link da documentação: [Chalk](https://www.npmjs.com/package/chalk) 

## Dia 8: Interagindo com o Usuário no Console com ReadLine 🖥️🗣️

> Nesta aula, vamos explorar o módulo **ReadLine**, que já vem integrado ao Node.js, para criar uma interface de entrada e saída e interagir com o usuário no console.

> Este exemplo pergunta ao usuário sua idade e responde com base no valor inserido. É uma forma um pouco divertida de aprender e treinar  a interação no console!

> Link da documentação: [ReadLine](https://nodejs.org/api/readline.html)

## Dia 9: Explorando o Conceito de Promises e Interação com o Usuário 🖥️

> No Dia 9, vamos estudar o conceito de *Promises*, que são muito úteis para lidar com operações assíncronas em JavaScript. Uma *Promise* representa uma operação que ainda está em andamento e que, no futuro, será resolvida com um valor de sucesso ou uma falha. Para essa atividade, vamos utilizar a biblioteca **inquirer** para criar uma interação com o usuário no console.

> Nesta prática, a ideia é fazer perguntas ao usuário e coletar respostas de forma assíncrona, usando *Promises*. Vamos instalar e utilizar o **inquirer** para facilitar essa interação e visualizar o resultado no console.

## Dia 10: Aprendendo sobre o funcionamento do EventLoop

> É um recurso da arquitetura do node.
 * Considerações: Tomar cuidado para nao criar loops infinitos e acabar derrubando nossa aplicação após o deploy;

> O codigo é lido de cima para baixo de forma sequencial.

## Dia 11: Descanso.

>  Hoje é seu dia de descanso, mas sinta-se avontade para revisar o conteúdo das ultimas aulas


## Dia 12: Funções Assincronas e Sincronas

> Em resumo, `Async` e `sync` são duas opçoes de executar metodos dentro do nosso código.
* Assincrono `Async` significa que o codigo continua progredindo e em algum momento no futuro teremos nossa resposta da execução assincrona,
* Sincrono `sync` funciona um pouco diferente, o codigo espera ser totalmente executado para proseguir.
> Entenda mais analisando o material disponivel para a aula :D

## Dia 13: Tipos de Erros no Node

>Temos duas formas principais de gerar ou evidenciar erros no Node, 
* Throw: É uma forma de encerrar o programa, e gera um novo erro. Confira mais detalhes na documentação: [Throw](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/throw)
* Try Catch: Forma de evidenciar algo que deu errado no nosso bloco de codigo e exibir a mensagem de erro. Confira mais detalhes na documentação: [Try Catch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)


## Dia 14: Modulo Http

> Cria um servidor Http, basicamente recebe uma reuisicao e envia codigo html como resposta.

>Utilizaremos o metodo `createServer` para criar o servidor e o `listen` para definir nossa porta

>Link da documentação: [Http](https://nodejs.org/api/http.html)

## Dia 15 e 16 : Modulo Url

> Serve para decompor uma URL que passamos para o metodo `parse`;

> Podemos resgatar: `Host, Path, Shearch, Query e etc...`

> A partir dessas informaçoes podemos alterar a logica do nosso código.

## Dia 17 : Caminhos.