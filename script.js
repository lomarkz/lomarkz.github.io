// Seleciona todos os links dentro do menu de navegação
const links = document.querySelectorAll('nav ul li a');

// Para cada link, verificamos se o 'href' do link é igual ao caminho da página atual
links.forEach(link => {
  if (window.location.pathname === link.pathname) {
    link.classList.add('active'); // Adiciona a classe 'active' ao link que corresponder
  }
});
