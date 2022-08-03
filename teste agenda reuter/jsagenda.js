var constlogin = [
    'teste@1',
    'teste@2',
    'teste@3'
]

function logar(){
    js_login = document.getElementById('login').value 
    valid = 0


    if (-1  !== constlogin.indexOf(js_login)){
        window.location.replace("http://stackoverflow.com");
    }
}