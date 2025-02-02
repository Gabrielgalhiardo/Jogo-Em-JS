var dinheiro = 0;
var trabalhadores = 0;
var lojas = 0;
var usinas = 0;
var tamanho = 5;
var dolar = 0;
var agua = 0;
var aguaMax = 0;


function ganharDinheiro(){
    dinheiro = dinheiro + 1 + trabalhadores + (lojas*50) + (usinas*700);

}

setInterval(atualizar, 10);

function atualizar(){
    document.getElementById('dinheiroPorClick').innerText = `Dinheiro por click = ${1 + trabalhadores + (lojas*50) + (usinas*700)}`;
    document.getElementById('qntdDeTrabalhadores').innerText = `Trabalhadores = ${trabalhadores}`;
    document.getElementById('qntdDeLojas').innerText = `Lojas = ${lojas}`;
    document.getElementById('qntdDeUsinas').innerText = `Usinas = ${usinas}`;
    document.getElementById('dinheiroAtual').innerText = `Dinheiro R$: ${dinheiro}`;
    document.getElementById('dolarTotal').innerText = `Dolar: $${dolar}`;
    document.getElementById(`aguaTotal`).innerText= `Agua: ${agua}`;
    if(agua>= aguaMax){
        aguaMax = agua;
    }
    document.getElementById(`precoAgua`).innerText = `Comprar 1 aguada por $:${1 + (aguaMax*500)},00`;



}

function trabalhador(){
    if(dinheiro - 20 >= 0){
        dinheiro = dinheiro - 20;
        trabalhadores+= 1;
    }

}

function loja(){
    if(dinheiro - 1000 >= 0){
        dinheiro = dinheiro - 1000;
        lojas+= 1;
    }

}

function usina(){
    if(dinheiro - 100000 >= 0){
        dinheiro = dinheiro - 100000;
        usinas+= 1;
    }

}

function regar(){
    if(tamanho<25){
        if (agua>= 1){
            agua -= 1;
            tamanho += 1;
            let regador = document.getElementById(`regador`);
        
            regador.style.animation = `none`;
            void regador.offsetWidth;
            regador.style.animation = `girar 1.2s linear`;
            document.getElementById(`arvore`).style.width = `${tamanho}em`;
        }else{
            alert(`Você deve comprar agua para regar`)
        }
    }else{
        alert(`Você zerou o jogo, Parabenss!!!`)
    }
    
}

function cambioDolar1(){
    if(dinheiro >= 320000){
        dinheiro -= 320000;
        dolar += 1;
    }
}

function cambioDolar10(){
    if(dinheiro >= 3200000){
        dinheiro -= 3200000;
        dolar += 10;
    }
}

function cambioDolar100(){
    if(dinheiro >= 32000000){
        dinheiro -= 32000000;
        dolar += 100;
    }
}

function comprarAgua(){
    if(dolar>= 1 + (aguaMax*500)){
        dolar -= 1+(aguaMax*500);
        agua += 1;
    }
}

function abrirGuiaTransacoes(){
    if(document.getElementById(`agua`).style.display = `none`){
        document.getElementById(`transacao`).style.display = `block`;
    }else{
        document.getElementById(`agua`).style.display = `none`;
        document.getElementById(`transacao`).style.display = `block`;
    }
}

function fecharGuiaTransacoes(){
    document.getElementById(`transacao`).style.display = `none`;
}

function abrirGuiaAgua(){
    if(document.getElementById(`transacao`).style.display = `none`){
        document.getElementById(`agua`).style.display = `block`;
    }else{
        document.getElementById(`transacao`).style.display = `none`;
        document.getElementById(`agua`).style.display = `block`;
    }
   
}

function fecharGuiaAgua(){
    document.getElementById(`agua`).style.display = `none`;

}

function mudarMundo(){
    if(dinheiro >= 350000){
        document.getElementById(`mundo-1`).style.display = `none`;
        document.getElementById(`mundo-2`).style.display = `block`;
        let main = document.getElementById(`main`).style;
        main.backgroundColor = `rgb(199, 183, 60)`;
        main.boxShadow = `0px 0px 70px rgb(194, 145, 11)`;
        document.getElementById(`body`).style.backgroundImage = `url(imagens/deserto.jpeg)`;
    }else{
        alert(`Pobre, vc precisa de 350.000`);
    }
   
}

function voltarMundo(){
    document.getElementById(`mundo-2`).style.display = `none`;
        document.getElementById(`mundo-1`).style.display = `block`;
        let main = document.getElementById(`main`).style;
        main.backgroundColor = `rgb(18, 76, 27)`;
        main.boxShadow = `0px 0px 70px rgb(11, 194, 17)`;
        document.getElementById(`body`).style.backgroundImage = `url(imagens/praia.jpg)`;
}

