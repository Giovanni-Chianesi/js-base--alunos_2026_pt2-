const quotes = [
  "A vida é o que acontece enquanto você está ocupado fazendo outros planos.",
  "A simplicidade é o último grau de sofisticação.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Acredite que você pode e você já está no meio do caminho.",
  "Não importa o quão devagar você vá, desde que você não pare."
];
const button = document.getElementById("btnQuote");
const quote = document.getElementById("quote");
button.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[randomIndex];
});