
function salvarIdade(){
    let idade = document.querySelector("#inputIdade").value
    idade = parseInt(idade)

    // Condições se (if) senão (else)
    if( idade > 17 ){
        alert("Você já pode tirar CNH")
    } else {
        alert("Você ainda não tem idade para tirar CNH...")
    }

}

function salvarSenha(){
    let senha = document.querySelector("#inputSenha").value
    // se for igual utilizar o simbolo igual 2x ==
    if( senha == "admin" ){ 
        alert("Acesso concedido!")
        document.querySelector("#divTermos").style.display = "block" //bloqueia o div do html
    }else{
        alert("Senha inválida...")
    }

}

function salvarTermos(){
    
    let termos = document.querySelector("#inputTermos").checked
    
    if( termos == false ){
        document.querySelector("#textoStatus").innerHTML = "O termo não foi aceito"
    }else{
        document.querySelector("#textoStatus").innerHTML = "Termo aceito"
    }

}