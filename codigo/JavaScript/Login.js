let pessoa = {nome: 'Matheus', idade: 29}

// Transformar o objeto em string e salvar em localStorage
localStorage.setItem('pessoa', JSON.stringify(pessoa));

// Receber a string
let pessoaString = localStorage.getItem('pessoa');

// transformar em objeto novamente
let pessoaObj = JSON.parse(pessoaString);

console.log(pessoaObj.nome); // Matheus



// Cadastro
function cadastro(){
var nome_cad = document.getElementById("nome_cad");
var email_cad = document.getElementById("email_cad");
var senha_cad = document.getElementById("senha-cad");

var dados =  JSON.parse(localStorage.getItem("cadastro"));

if(dados == null){
    localStorage.setItem("cadastro", "[]");
    dados = [];

}

var auxRegistro = {
    nome: nome_cad.value,
    email: email_cad.value,
    senha: senha_cad.value, 
}

    dados.push('auxRegistro');

    localStorage.setItem("cadastro", JSON.stringfy(dados));}



