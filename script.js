document.addEventListener('DOMContentLoaded', function() {
  // Agora o código será executado depois que o DOM estiver carregado
  function togglePlacar(isJogoAtivo) {
    const placarCard = document.getElementById('placar-card');
    
    if (isJogoAtivo) {
      placarCard.style.display = 'flex';
    } else {
      placarCard.style.display = 'none';
    }
  }

  // Exemplo de uso:
  let jogoAtivo = true; // Defina `false` se não houver jogo
  togglePlacar(jogoAtivo);
});
