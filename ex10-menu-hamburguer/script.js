// Seleciona o ícone do menu e a lista de navegação pelo ID
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Adiciona um evento de clique ao ícone do menu
menuIcon.addEventListener('click', () => {
  // Alterna a classe "active" na lista de navegação
  navList.classList.toggle('active');
});