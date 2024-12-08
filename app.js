function sortear(){ // da função ao botão
    let quantidade = parseInt(document.getElementById('quantidade').value); // parseInt() faz com que o valor aceito no 'imput' seja apenas numérico
    let de = parseInt(document.getElementById('de').value); // .value armazena o valor colocado no imput
    let ate = parseInt(document.getElementById('ate').value); // document.getElementById() seleciona o ID de onde queremos colocar a informação 

    if (de >= ate){
        alert('O campo "do número" deve ser menor do que o campo "até o número". Verifique!');
        limparCampos()
        return;
    }

    if (quantidade > (ate - de + 1)){
        alert('O campo "quantidade" deve ser menor ou igual ao intervalo de números informado!');
        limparCampos()
        return;

    }

    let sorteados = []; // cria um Array para guardar os números sorteados
    let numero;

    //loop 'for' para repetir um bloco de código enquanto a condição for verdadeira; geralmente usado para percorrer elementos em um array
    // 'i' é uma variável padrão de interação entre o loop e a condição
    // define i = 0; se i menor que quantidade; adiciona um valor a i
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        
        while (sorteados.includes(numero)) { // enquanto o 'numero' sorteado enyiver incluido no array 'sorteados' gera um novo número
            numero = obterNumeroAleatorio(de, ate); 
        }
        
        sorteados.push(numero); // quando não estiver, adiciona o número ao final do array
    }

    let resultado = document.getElementById('resultado') // seleciona o local no HTML pelo id 'reiniciar'
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>` //.innerHTML insere oq se deseja no HTML
    alterarStatusBotao(); //função para alterar status do botão reiniciar

    }

function obterNumeroAleatorio(min, max){ //  gera um número inteiro aleatório entre valores definidos por min e max inclusivos
    return Math.floor(Math.random() * (max - min + 1)) + min; //Math.floor arredonda o número gerado para baixo garanntindo q seja um número inteiro
}

function alterarStatusBotao(){ // altera o status do botão reiniciar
    let botao = document.getElementById('btn-reiniciar'); // seleciona o botão pelo ID 'btn-reiniciar'
    if (botao.classList.contains('container__botao-desabilitado')){ //.classList.contains verifica se possui a classe
        botao.classList.remove('container__botao-desabilitado'); //.classList.remove remove a classe 
        botao.classList.add('container__botao'); //.classList.add adiciona a classe 
    } else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado'); // retorna o botão ao modo desabilitado
    }
}

function reiniciar(){ // ativa o botão reiniciar - pegar a função colocada no HTML e atribuir funções a serem realizadas
    limparCampos()
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'; //altera o texto para o inicial
    alterarStatusBotao(); // retorna o status de desabilitado do botão 
}

function limparCampos(){ // limpa os campos escritos pelo usuário
    document.getElementById('quantidade').value = ''; // define o valor de cada 'input' em nada 
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}