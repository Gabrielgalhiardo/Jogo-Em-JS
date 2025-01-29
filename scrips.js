var dinheiro = 0;
var trabalhadores = 0;
var lojas = 0;
var usinas = 0;


function ganharDinheiro(){
    dinheiro =dinheiro + 1 + trabalhadores + (lojas*50) + (usinas*700);
    document.getElementById('dinheiroAtual').innerText = `Dinheiro R$: ${dinheiro}`;

}

function atualizar(){
    document.getElementById('dinheiroPorClick').innerText = `Dinheiro por click = ${1 + trabalhadores + (lojas*50) + (usinas*700)}`;
    document.getElementById('qntdDeTrabalhadores').innerText = `Trabalhadores = ${trabalhadores}`;
    document.getElementById('qntdDeLojas').innerText = `Lojas = ${lojas}`;
    document.getElementById('qntdDeUsinas').innerText = `Usinas = ${usinas}`;
    document.getElementById('dinheiroAtual').innerText = `Dinheiro R$: ${dinheiro}`;

}

function trabalhador(){
    if(dinheiro - 20 >= 0){
        dinheiro = dinheiro - 20;
        trabalhadores+= 1;
        atualizar()
    }

}

function loja(){
    if(dinheiro - 1000 >= 0){
        dinheiro = dinheiro - 1000;
        lojas+= 1;
        atualizar()
    }

}

function usina(){
    if(dinheiro - 100000 >= 0){
        dinheiro = dinheiro - 100000;
        usinas+= 1;
        atualizar()
    }

}