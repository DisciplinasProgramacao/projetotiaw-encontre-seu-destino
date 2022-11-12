

// Cadastro

var bancoCadastros = JSON.parse(localStorage.getItem("cadastro"));



function limparForm() {
    document.getElementById("name1").value = "";
    document.getElementById("email1").value = "";
    document.getElementById("senha1").value = "";


}

function cadastrarNovo() {
    var name1 = document.getElementById("name1").value;
    var email1 = document.getElementById("email1").value;
    var password1 = document.getElementById("senha1").value;
  
    var novoCadastro = {
        "nome": name1,
        "email": email1,
        "senha": password1,
       
    }
    
    bancoCadastros.push(novoCadastro);
    localStorage.setItem("cadastros", JSON.stringify(bancoCadastros));
    
    limparForm();


}


function logar(){
    var emailcad = document.getElementById("email").value;
    var senhacad = document.getElementById("senha").value;
    
    let listaUser = []

    var Uservalid = {
        nome: '',
        email: '',
        senha: '',
    
    }
    
    listaUser = JSON.parse(localStorage.getItem("cadastro"));
    listaUser.forEach ((item) => {
            if(emailcad == item.email && senhacad == item.senha) {
                Uservalid = {
                    nome: item.nome,
                    email: item.email,
                    senha: item.senha,
                                   }
            }
        }
    )
    

    if (emailcad == Uservalid.email && senhacad == Uservalid.senha) {
        alert("LOGADO");
        location.href="pokedex.html";
    } else {
        alert("USUÁRIO INCORRETO");
    }
}