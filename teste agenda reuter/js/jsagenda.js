var constlogin = [
    'teste@1',
    'teste@2',
    'teste@3',
    'teste@4'
]

var constsenha = [
    'senha1',
    'senha2',
    'senha3',
    'senha4'
]

function registrar() {
    emailnovo = prompt("insira o email")
    senhanova = prompt("insira a senha")

    

    constlogin.push(emailnovo)
    constsenha.push(senhanova)

    

    
}

function logar() {
    js_login = document.getElementById('login').value
    js_senha = document.getElementById('senha').value
    alert (constlogin.indexOf(js_login))
    alert (constsenha.indexOf(js_senha))
    alert (constlogin)
    alert (constsenha)
    console.log(constsenha)
    if (constlogin.indexOf(js_login)==constsenha.indexOf(js_senha) && constlogin.indexOf(js_login) != -1 && constsenha.indexOf(js_senha) != -1){
        alert ("deu")
    }
}