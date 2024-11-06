// Importa o módulo 'url' para manipular URLs
const url = require('url');

// Define o endereço de uma URL como exemplo, incluindo um parâmetro de consulta
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira';

// Converte a URL em um objeto 'URL', facilitando o acesso a partes específicas da URL
const parsedUrl = new url.URL(address);

// Exibe o nome do host (domínio) da URL
console.log(parsedUrl.host); 

// Exibe o caminho da URL após o domínio
console.log(parsedUrl.pathname); 

// Exibe a parte de consulta (query string) da URL
console.log(parsedUrl.search);

// Exibe os parâmetros de consulta como um objeto iterável
console.log(parsedUrl.searchParams); 

// Exibe o valor do parâmetro de consulta específico 'produtos'
console.log(parsedUrl.searchParams.get('produtos')); 
