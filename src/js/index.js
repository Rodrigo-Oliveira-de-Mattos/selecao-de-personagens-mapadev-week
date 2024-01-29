const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) =>{
        personagem.addEventListener('mouseenter', () =>{
            const personagemJogador2 = document.querySelector('.jogador-2-selecionado')

            const personagemSelecionado = document.querySelector('.selecionado');
            personagemSelecionado.classList.remove('selecionado');

            personagem.classList.add('selecionado');

            const idSelecionadoJogador1 = personagem.attributes.id.value;
            const idSelecionadoJogador2 = personagemJogador2.attributes.id.value;

            if(idSelecionadoJogador1 === idSelecionadoJogador2) return

            const imagemJogador1 = document.getElementById('personagem-jogador-1');
            imagemJogador1.src = `./src/images/${idSelecionadoJogador1}.png`;

            const nomeSelecionado = personagem.getAttribute('data-name');
            const nomeJogador1 = document.getElementById('nome-jogador-1');
            nomeJogador1.innerHTML = nomeSelecionado
        });
});