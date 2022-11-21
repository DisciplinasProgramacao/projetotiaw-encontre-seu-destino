function  cadastro(){
localStorage.nome = document.getElementById("nome_cad").value 
localStorage.email = document.getElementById("email_cad").value 
localStorage.senha = document.getElementById("senha_cad").value 
    
    if(senha_cad == null)
alert("campo vazio")

else(senha_cad == senha_cad)
alert("cadastro realizado")

}

function Logar(){
  document.getElementById("email_login").value = localStorage.email
    document.getElementById("senha_login").value = localStorage.senha

    if(senha_login == null)
alert("campo vazio")

else(senha_login == senha_login)
alert("Login realizado com sucesso")
}

