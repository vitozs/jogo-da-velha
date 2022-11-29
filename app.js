let jogador_atual = 'O'
let jogador_atual_class = 'circle'

let jogadas_vencedoras = [
    "","","",
    "","","",
    "","",""
]
//let jogadas_x = []
//let jogadas_o = []



function getPosition(pos){
    let position = pos
    jogo(position)

}

function jogo(position){

    let jogou = true

    changePlayer(jogou)
    
    if(jogou){
        document.getElementById(position).className = `btn btn-lg btn-dark button bi bi-${jogador_atual_class}`
        document.getElementById(position).disabled = 'true'
    }
   
    if(jogador_atual === 'X'){
        jogadas_vencedoras[position] = 'X'
    }else if(jogador_atual === 'O'){
        jogadas_vencedoras[position] = 'O'
    }


  
    verificarVitoria()
    
    /*if(jogador_atual === 'X'){
        jogadas_x.push(document.getElementById(position).id)
    }else if(jogador_atual === 'O'){
        jogadas_o.push(document.getElementById(position).id)
    }*/
}

function changePlayer(jogou){
    if(jogador_atual === 'X' && jogou){
        jogador_atual = 'O'
        jogador_atual_class = 'circle'

    }else if(jogador_atual==='O' && jogou){
        jogador_atual = 'X'
        jogador_atual_class = 'x-lg'

    }
}
function verificarVitoria(){
    let ganhou = false
    let btns = document.getElementsByClassName('btn')


    if(jogadas_vencedoras[0]===jogador_atual && jogadas_vencedoras[3]===jogador_atual && jogadas_vencedoras[6]===jogador_atual){
        document.getElementById('display-vitoria').innerHTML = `Vitória de: ${jogador_atual} `
        ganhou = true
        changeButtonColor(0,3,6)

    }else if(jogadas_vencedoras[1]===jogador_atual && jogadas_vencedoras[4]===jogador_atual && jogadas_vencedoras[7]===jogador_atual){
        document.getElementById('display-vitoria').innerHTML = `Vitória de: ${jogador_atual}`
        ganhou = true
        changeButtonColor(1,4,7)

    }else if(jogadas_vencedoras[2]===jogador_atual && jogadas_vencedoras[5]===jogador_atual && jogadas_vencedoras[8]===jogador_atual){
        document.getElementById('display-vitoria').innerHTML = `Vitória de: ${jogador_atual}`
        ganhou = true
        changeButtonColor(2,5,8)

    }else if(jogadas_vencedoras[0]===jogador_atual && jogadas_vencedoras[1]===jogador_atual && jogadas_vencedoras[2]===jogador_atual){
        document.getElementById('display-vitoria').innerHTML = `Vitória de: ${jogador_atual}`
        ganhou = true
        changeButtonColor(0,1,2)

    }else if(jogadas_vencedoras[3]===jogador_atual && jogadas_vencedoras[4]===jogador_atual && jogadas_vencedoras[5]===jogador_atual){
        document.getElementById('display-vitoria').innerHTML = `Vitória de: ${jogador_atual}`
        ganhou = true
        changeButtonColor(3,4,5)

    }else if(jogadas_vencedoras[6]===jogador_atual && jogadas_vencedoras[7]===jogador_atual && jogadas_vencedoras[8]===jogador_atual){
        document.getElementById('display-vitoria').innerHTML = `Vitória de: ${jogador_atual}`
        ganhou = true
        changeButtonColor(6,7,8)

    }else if(jogadas_vencedoras[6]===jogador_atual && jogadas_vencedoras[4]===jogador_atual && jogadas_vencedoras[2]===jogador_atual){
        document.getElementById('display-vitoria').innerHTML = `Vitória de: ${jogador_atual}`
        ganhou = true
        changeButtonColor(6,4,2)


    }else if(jogadas_vencedoras[0]===jogador_atual && jogadas_vencedoras[4]===jogador_atual && jogadas_vencedoras[8]===jogador_atual){
        document.getElementById('display-vitoria').innerHTML = `Vitória de: ${jogador_atual}`
        ganhou = true
        changeButtonColor(0,4,8)

    }else if(jogadas_vencedoras.indexOf("") === -1 && ganhou!=true){
        document.getElementById('display-vitoria').innerHTML = `Empate!`


    }

    
    if(ganhou == true){
        for(let i = 0; i<btns.length; i++){
            btns[i].disabled = 'true'
        }
    }



    console.log(document.getElementsByClassName('btn'))
}

function changeButtonColor(index1, index2, index3){
    let btns = document.getElementsByClassName('btn')

    btns[index1].style = 'border:1px solid white;'
    btns[index2].style = 'border: 1px solid white;'
    btns[index3].style = 'border: 1px solid white;'
    console.log(index1)
}

/*if(JSON.stringify(jogadas_x) === JSON.stringify(jogadas_vencedoras[3])){
        alert('Ganhou') //Sistema funciona parcialmente
}*/



