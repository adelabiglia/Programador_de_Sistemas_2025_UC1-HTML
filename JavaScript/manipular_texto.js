
//******REVISÃO!!!!!*****
// let idade = parseInt( prompt("Digite a sua Idade:"))

// // > maior | < menor | maior ou igual >= | menor ou igual <=
// if(idade >= 18){
//     alert("Você já pode tirar CNH... Parabéns!!!")
// }else{
//     alert("Você ainda não tem idade para tirar a sua CNH!!! Tente novamente após o próximo aniversário!")
// } //REVISÃO


// ******PRIMEIRA ATIVIDADE: PERGUNTE 2 NUMEROS E MOSTRE-OS EM ORDEM CRESCENTE*****
// let numero1 = parseInt( prompt("Digite um numero"))
// let numero2 = parseInt( prompt("Digite Outro Numero"))

// if(numero1 < numero2){
//     alert("Ordem Crescente: "+numero1+","+numero2)
// }else{
//     alert("Ordem Crescente: "+numero2+","+numero1)
// }

// ******SEGUNDA ATIVIDADE PERGUNTE UM NUMERO E DIGA SE É POSITIVO OU NEGATIVO*****
// let numero = parseInt( prompt("Digite um numero:"))

// if(numero >= 0){
//     alert("Este Número é Positivo + ")
// }else{
//     alert("Este Número é Negativo - ")
// }

// *****TERCEIRA ATIVIDADE PERGUNTE 2 NOTAS E FAÇA A MEDIA E INFORME AO ALUNO APROVADO OU REPROVADO. MEDIA PARA PASSAR É 7.****
// let nota1 = parseInt( prompt("Digite a sua nota:"))
// let nota2 = parseInt( prompt("Digite sua outra Nota:"))
// let media = (nota1 + nota2) / 2

// if(media >= 7  ){
//     alert(media+ "  Aprovado! Parabéns!!! ")
// }else{
//     alert(media+ "  Reprovado! Se f*****!!!")
// }

// ******** TESTE DO RETURN *************
// atividadeHotel()
// function atividadeHotel(){

//     let numero = parseInt(prompt("Digite o Número 3"))

//     if(numero == 3){
//         alert("Parabéns você escreveu o número certo!")
//     }else{
//         alert("Número Inválido...")
//         return atividadeHotel() // return para de rodar o sistema
//     }

//     let resposta = prompt("Digite batata")
//     if(resposta == "batata"){
//         alert("Parabéns você escreveu a resposta certa!")
//     }else{
//         alert("Reposta Inválida!!!")
//         return atividadeHotel()
//     }
//     alert("Fim do sistema")
// }


// *********SISTEMA DE HOSPEDAGEM *******************

hospedagem()
function hospedagem(){
    let mesHospedagem =  parseInt (prompt("Digite o Mês Desejado: Exemplo Abril = 4"))
    if(mesHospedagem >= 10){
        alert("Mês disponivel para Reserva!")
    }else{
        alert("Volte e tente outro Mês")
        return hospedagem()
    }

    let quarto = 150
    let adulto = 0
    let crianca = 0 
    let qtdAdulto = parseInt(prompt("Qual a quantidade de Adultos:"))
    if(qtdAdulto > 0){
        alert("Insira a Quantidade de Crianças:")
    }else{
        alert("Numero de Adultos Invalidos! ")
        return hospedagem()
    }
    let qtdCrianca = parseInt(prompt("Qual a quantidade de Crianças:"))

    let cupom = prompt("Você possui um cupom de desconto?")
    if(cupom == "MENOS10"){
        alert("Parabéns você ganhou 10% de Desconto!!!")
        let desconto = 0.10
    }else{
        alert("Cupom Invalido!") 
    }
    let precoAdulto = qtdAdulto * 85
    let precoCrianca = qtdCrianca * 42.50
    let total = quarto + precoAdulto + precoCrianca
    // não aplicado o desconto de 10%
    
    console.log("--------------------------------------")
    console.log("---------CONRADITO RESIDANCE----------")
    console.log("Mês de Hospedagem: " +mesHospedagem)
    console.log("--------------------------------------")
    console.log("Preço Base do Quarto: "+quarto+",00" )
    console.log("Adultos: "+qtdAdulto+" x R$85,00")
    console.log("Crianças: "+qtdCrianca+ " x R$42,50")
    console.log("Total: "+total.toFixed(2))
}
