    // Simulação: Defina a quantidade inicial e o número de pessoas que já compraram
    let quantidadeTotal = 100;
    let pessoasCompraram = 5; // Substitua pelo número real de compras

    // Atualiza a quantidade disponível na página
    function atualizarQuantidadeDisponivel() {
        let quantidadeDisponivel = quantidadeTotal - pessoasCompraram;
        document.getElementById("quantidade-disponivel").innerText = quantidadeDisponivel;

        // Adicione animações ou estilos adicionais aqui conforme necessário
        if (quantidadeDisponivel <= 5) {
            document.getElementById("quantidade-disponivel").style.color = "#ff0000"; // Muda a cor para vermelho se a quantidade estiver baixa
        }
    }

    // Simula a redução da quantidade a cada X segundos
    setInterval(() => {
        if (pessoasCompraram < quantidadeTotal) {
            pessoasCompraram += 1;
            atualizarQuantidadeDisponivel();
        }
    }, 5000); // Ajuste o intervalo conforme desejado (aqui está a cada 5 segundos)

    // Chamada inicial
    atualizarQuantidadeDisponivel();