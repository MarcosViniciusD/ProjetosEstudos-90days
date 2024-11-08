# ProjetosEstudos - 28 Dias 📚📆✨
<p align="center">
  <img src="https://github.com/MarcosViniciusD/ProjetosEstudos-90days/blob/main/working%20gif.gif" alt="working gif.gif">
</p>

* Descrição:
Este projeto acompanha minha jornada de estudos e desenvolvimento em programação ao longo de 28 dias(Podendo ser menos, dependendo do seu interesse pelo assunto). Cada dia é dedicado a uma nova aula ou prática, cobrindo diferentes tópicos e desafios para aprimorar minhas habilidades.

* Objetivo:
O objetivo deste repositório é documentar meu progresso, compartilhar o código desenvolvido e refletir sobre o aprendizado adquirido em cada aula.

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

## Dia 17 : Caminhos e Manipulação de URLs

> No Dia 17, desenvolvemos um exemplo prático que cria um servidor HTTP e utiliza o módulo `url` para extrair dados de requisições.

## Dia 18: Servindo um Arquivo HTML com Node.js 🖥️📄

>Neste dia, vamos ver como utilizar o Node.js para servir um arquivo HTML em uma aplicação básica. Vamos configurar um servidor que lê o conteúdo de um arquivo HTML usando o módulo `fs (file system)` e o entrega ao cliente por meio do módulo http.

* http: para criar um servidor que escuta em uma porta específica.
* fs: para ler o conteúdo de um arquivo HTML e exibi-lo ao cliente.

## Dia 19:Salvando Entrada de Usuário em Arquivo com Node.js 📝
* http: para criar um servidor que escuta em uma porta específica.
* fs: para ler o conteúdo de um arquivo HTML e exibi-lo ao cliente.
* url: para analisar a URL e extrair parâmetros de consulta (query parameters)

>Exploramos como capturar dados de um formulário HTML e gravá-los em um arquivo no servidor usando Node.js. O servidor criado exibe uma página HTML com um formulário de entrada e, ao receber um nome do usuário, salva-o em um arquivo chamado `arquivo.txt`.

## Dia 20: Registrando Múltiplos Nomes em um Arquivo com Node.js 📄

>Esta aulao demonstra como capturar e salvar múltiplos nomes em um arquivo usando Node.js. A cada envio do formulário, o nome do usuário é adicionado como uma nova linha no `index.txt`, permitindo registrar entradas contínuas.
* http: para criar e gerenciar o servidor.
* fs: para leitura e gravação de arquivos.
* url: para manipulação e extração dos parâmetros da URL.


# Dia 21: Removendo Arquivos com fs.unlink 🚮

> O objetivo é aprender a remover arquivos no sistema de forma programática com Node.js, utilizando o método `fs.unlink()` do módulo fs.

* Ele tenta deletar o arquivo `arquivo.txt` e, se a operação for bem-sucedida, exibe a mensagem "Arquivo Removido" no console. Caso contrário, ele exibe o erro encontrado.

## Dia 22: Renomeando Arquivos com fs.rename 🔄

> O aprendizado de hoje foi sobre como renomear arquivos utilizando o método `fs.rename()` do módulo fs em Node.js.

## Dia 23: Servidor HTTP com Páginas HTML Dinâmicas 🌐

> Hoje explorei como criar um servidor HTTP com Node.js que serve páginas HTML dinâmicas e responde com uma página de erro 404 personalizada quando o arquivo solicitado não existe.

* Funcionamento do Código:
* req.url determina o arquivo a ser carregado com base na URL solicitada. Para a URL raiz (/), o arquivo index.html é exibido.
* fs.existsSync() verifica se o arquivo existe no diretório local.
* Se o arquivo existir, ele é lido com fs.readFile() e exibido com um cabeçalho 200 OK.
* Se o arquivo não existir, 404.html é servido com um cabeçalho 404 Not Found.

## Dia 24: Verificação de Metadados de Arquivo com fs.stat 📄

>O método `fs.stat` do módulo fs para obter informações sobre um arquivo e entender mais sobre os metadados disponíveis.

## Dia 25: Trabalhando com Caminhos de Arquivos usando path 🛤️

>Mostrando como  o módulo path do Node.js pode lidar com caminhos de arquivos e extrair informações específicas, como a extensão do arquivo e seu nome base.

## Dia 26: Manipulando Caminhos com path 🔄

>Trabalhando com caminhos absolutos e relativos, além de criar um caminho completo usando o módulo path.

## Dia 27:  Verificando e Criando Diretórios com fs 📂

>Hoje, dando revisada na documentação do fs, aprendi a verificar se um diretório já existe e, se não, criar um novo diretório usando o módulo fs.

## Dia 28: Trabalhando com o Módulo os no Node.js

> Obtendo informações sobre o sistema operacional usando o módulo os do Node.js.


# Fim! 🎉
Espero que tenham gostado do conteúdo! 😄

Agradeço de coração a cada pessoa que der uma ⭐ no projeto. Isso significa muito para mim e motiva ainda mais a continuar compartilhando conhecimento com vocês!

Até a próxima! 👋

