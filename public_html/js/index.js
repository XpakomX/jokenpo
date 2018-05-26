    var escolhapc;
    var escolhajogador;
    var vencedor;
    var vitoriaspc = 0;
    var vitoriasjogador = 0;
    var empates = 0;
 
    var pegajogador = function (escolha) {
        escolhajogador = escolha;
    };

    var pegapc = function () {
        var numeroaleatorio = Math.round(Math.random() * 2);
        switch (numeroaleatorio) {
            case 0:
                escolhapc = 'pedra';
                break;
            case 1:
                escolhapc = 'papel';
                break;
            case 2:
                escolhapc = 'tesoura';
                break;
        }
    };

    var pegavencedor = function () {
        if (escolhajogador === 'pedra') {
            if (escolhapc === 'pedra') {
                vencedor = 'empate';
            } else if (escolhapc === 'papel') {
                vencedor = 'computador';
            } else if (escolhapc === 'tesoura') {
                vencedor = 'jogador';
            }
        } else if (escolhajogador === 'papel') {
            if (escolhapc === 'pedra') {
                vencedor = 'jogador';
            } else if (escolhapc === 'papel') {
                vencedor = 'empate';
            } else if (escolhapc === 'tesoura') {
                vencedor = 'computador';
            }
        } else if (escolhajogador === 'tesoura') {
            if (escolhapc === 'pedra') {
                vencedor = 'computador';
            } else if (escolhapc === 'papel') {
                vencedor = 'jogador';
            } else if (escolhapc === 'tesoura') {
                vencedor = 'empate';
            }
        }
    };
    
    var calcular = function (escolha){
        pegajogador(escolha);
        pegapc();
        pegavencedor(); 
        if (vencedor === "computador"){
            vitoriaspc++;
            document.getElementById("mensagem").innerHTML = "Você escolheu " + escolhajogador + " e o computador escolheu " + escolhapc + ", logo, o computador venceu!";
        }else if (vencedor === "jogador"){
            vitoriasjogador++;
            document.getElementById("mensagem").innerHTML = "Você escolheu " + escolhajogador + " e o computador escolheu " + escolhapc + ", logo, o jogador venceu!";
        }else{
            empates++;
            document.getElementById("mensagem").innerHTML = "Você escolheu " + escolhajogador + " e o computador escolheu " + escolhapc + ", logo, deu empate!";
        }
        document.getElementById("placarjogador").innerHTML = "Vitórias do jogador: " + vitoriasjogador;
        document.getElementById("placarcomputador").innerHTML = "Vitórias do computador: " + vitoriaspc;
        document.getElementById("placarempate").innerHTML = "Empates: " + empates;
    };