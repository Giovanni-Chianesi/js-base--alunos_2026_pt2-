// Seleciona o botão de busca e adiciona um evento de clique
document.getElementById("fetchUser").addEventListener("click", async function () {
  // Seleciona o elemento onde os dados do usuário serão exibidos
  const userDataElement = document.getElementById("userData");

  // Bloco try: tenta executar o código assíncrono
  try {
    // Faz a requisição para a API usando fetch e aguarda a resposta
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`); // Lança um erro se a resposta não for ok
    }
    // Converte a resposta para JSON e aguarda a conversão
    const userData = await response.json();
    // Exibe os dados do usuário no elemento selecionado
    userDataElement.innerHTML = `
      <h2>${userData.name}</h2>
      <p><strong>Email:</strong> ${userData.email}</p>
      <p><strong>Phone:</strong> ${userData.phone}</p>
      <p><strong>Website:</strong> ${userData.website}</p>
    `;
  } catch (error) {
    // Bloco catch: captura e trata erros que ocorreram no bloco try
    userDataElement.innerHTML = `<p style="color: red;">Erro: ${error.message}</p>`; 
    console.error(error);
  }
});