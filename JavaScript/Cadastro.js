function  cadastro(){
localStorage.nome = document.getElementById("nome_cad").value 
localStorage.email = document.getElementById("email_cad").value 
localStorage.senha = document.getElementById("senha_cad").value 

}

function Logar(){
    document.getElementById("email_cad").value = localStorage.email
    document.getElementById("senha_cad").value = localStorage.senha
}

