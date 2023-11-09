const nomeCompleto = prompt("Nome completo?")
let datanacismento = prompt("Data Nascimento")
let endereco = prompt("Endereço")
let cpf = Number(prompt("CPF"))
let escolaridade = prompt("Escolaridade")
let cnh = confirm("Tem CNH")
let filhos = Number(prompt("Quantos Filhos"))
let cargo = prompt("Cargo Atual")
let salario = Number(prompt("Valor Salario"))
let comissao =  confirm("Recebe Comissão")
let anoAdemisao = Number(prompt("Ano da Admissão"))

console.log(typeof nomeCompleto,typeof datanacismento,
     typeof endereco, typeof cpf,typeof escolaridade,typeof cnh,
     typeof filhos, typeof cargo, typeof salario, typeof comissao, typeof anoAdemisao)
     
console.log(nomeCompleto,datanacismento,endereco,
    cpf,escolaridade,cnh,filhos,cargo,salario,comissao,anoAdemisao)