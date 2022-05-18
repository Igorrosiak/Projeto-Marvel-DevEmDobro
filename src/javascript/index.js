const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'ultron') return;
        
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        const imagemJogador1 = document.getElementById('jogador_1');
        imagemJogador1.src = `./src/img/${idSelecionado}.png`

        const nomeJogador1 = document.getElementById('nome_jogador_1');
        const nomeSelecionado = personagem.getAttribute('data-name');
        nomeJogador1.innerHTML = nomeSelecionado
        
    })
})