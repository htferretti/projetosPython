const usuario = {
    nome: "Henrique",
    email: "htferretti@gmail.com",
    senha: "senha123321"
}

function oculta(senha){
    let senhaDepois = ""

    for(let letra = 0; letra < senha.length; letra++){
        senhaDepois += "*";
    }

    return senhaDepois
}

alert(oculta(usuario.senha))