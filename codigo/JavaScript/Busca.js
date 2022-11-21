var RJ = ["rj", "Rio de Janeiro", "rio"]
var SP = ["sp", "São Paulo", "são paulo"]
var MG = ["mg", "minas", "minas gerais"]
var MA = ["ma", "maranhão", "maranhao"]
var MT = ["mt", "mato grosso", "mato"]
var PE = ["pe", "pernambuco", "pernam"]
var SC = ["sc", "santa catarina", "santa"]
var RS = ["rs", "rio grande do sul", "rio", "sul"]
var RR = ["rr", "roraima", "rorai"]
var PR = ["pr", "parana", "para"]

const btn = document.getElementById('click', (e) => {

  for(var i = 0; i < RJ.length; i++){
    if(RJ[i] == valordovetor){
      window.location(rj.html)
    }
  }

  
})


function pesquisar()
{
  
var valorInput = document.getElementById("inputPesquisa").value;
  for(let i = 0; i < 3; i++){
    if(valorInput.toLowerCase() === RJ[i]){
      alert("Achamos o " + RJ[1])
    }
  }

  for(let i = 0; i < 3; i++){
    if(valorInput.toLowerCase() === SP[i]){
      alert("Achamos São Paulo!")
    }
  }

  for(let i = 0; i < 3; i++){
    if(valorInput.toLowerCase() === MG[i]){
      alert("Achamos Minas Gerais!")
    }
  }

  for(let i = 0; i < 3; i++){
    if(valorInput.toLowerCase() === MA[i]){
      alert("Achamos Maranhão!")
    }
  }

  for(let i = 0; i < 3; i++){
    if(valorInput.toLowerCase() === MT[i]){
      alert("Achamos Mato Grosso!")
    }
  }

  for(let i = 0; i < 3; i++){
    if(valorInput.toLowerCase() === PE[i]){
      alert("Achamos Pernambuco!")
    }
  }

  for(let i = 0; i < 3; i++){
    if(valorInput.toLowerCase() === SC[i]){
      alert("Achamos Santa Catarina!")
    }
  }

  for(let i = 0; i < 3; i++){
    if(valorInput.toLowerCase() === RS[i]){
      alert("Achamos Rio Grande do Sul!")
    }
  }

  for(let i = 0; i < 3; i++){
    if(valorInput.toLowerCase() === RR[i]){
      alert("Achamos Roraima!")
    }
  }

  for(let i = 0; i < 3; i++){
    if(valorInput.toLowerCase() === PR[i]){
      alert("Achamos Paraná!")
    }
    
  }

  
  }
  
