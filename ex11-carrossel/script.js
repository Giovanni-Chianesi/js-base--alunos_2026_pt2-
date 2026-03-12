// Seleciona todos os slides e os botões de navegação
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
let currentSlide = 0; // Índice do slide atual
let autoSlideInterval; // Variável para armazenar o intervalo de transição automática

// Função para exibir um slide específico
function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove('active')); // Remove a classe 'active' de todos os slides
  slides[index].classList.add('active'); // Adiciona a classe 'active' ao slide atual
}
// Função para avançar para o próximo slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; 
  showSlide(currentSlide); // Exibe o próximo slide
}
// Função para voltar ao slide anterior
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide); // Exibe o slide anterior
}

// Função para iniciar a transição automática de slides
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000); // Troca de slide a cada 5 anos
}

// Função para parar a transição automática de slides
function stopAutoSlide() {
  clearInterval(autoSlideInterval); // Limpa o intervalo
}

// Adiciona um evento de clique ao botão "Anterior"
prevButton.addEventListener('click', () => {
  prevSlide();
  stopAutoSlide(); // Pausa a transição automática
  startAutoSlide(); // Reinicia a transição automática
});

// Adiciona um evento de clique ao botão "Próximo"
nextButton.addEventListener('click', () => {
  nextSlide(); // Exibe o próximo slide
  stopAutoSlide(); // Pausa a transição automática
  startAutoSlide(); // Reinicia a transição automática
});

// Inicializa o carrossel com a primeira imagem visível
showSlide(currentSlide); // Exibe o slide inicial
startAutoSlide(); // Inicia a transição automática de slides

