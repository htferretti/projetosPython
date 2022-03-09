aprovados = []
reprovados = []

let aluno = 1
alert("Digite 0 quando nao tiver mais alunos")
while(aluno != "0"){
    aluno = prompt("Aluno: ")
    nota = prompt("Nota do aluno " + aluno + ": ")

    if(nota < 7){
        reprovados.push("Aluno: " + aluno, "Nota: " + nota)
    }
    else{
        aprovados.push("Aluno: " + aluno, "Nota: " + nota)
    }
}

reprovados.pop()
reprovados.pop()

alert("Aprovados\n" + aprovados)
alert("Reprovados\n" + reprovados)