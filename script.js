// Criando o JavaScript
// Serve para apresenta na Aba "Console" do Navegador 

// Conceito "Variavel" é uma informação de indentificação, que fica armazenado em memoria
// Maneira de criar uma "Variavel": var Antigo | const: constante, sem alteração | let: pode ser alterada  

// Conceito "Funcoes" é um codigo com uma informação que vai aparecer quando solicitada
// Maneira de criar uma "Função": function nome - Para chama a função "nome ()"
// JavaScript funciona de acordo com solicitação de Eventos

// Criando função de Clique aparecer
const form = document.querySelector('.fale-conosco')
const background = document.querySelector('.mascara-form')

function showForm() {
    form.style.left = '50%'
    form.style.transform = 'translateX(-50%)'
    background.style.visibility = 'visible'
}

// Criando função de Clique sumir
function hideForm() {
    form.style.left = '-330px'
    form.style.transform = 'translateX(0)'
    background.style.visibility = 'hidden'
}

// Criando função de Enviar Email
// https://formcarry.com/ - Utilizar o link para criar os forms
