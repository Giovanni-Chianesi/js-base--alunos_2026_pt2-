document.getElementById("calculate").addEventListener("click", function () {

  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  const resultElement = document.getElementById("result");

  try {
    // Verifica se os valores inseridos são números válidos
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Por favor, insira números válidos.");
    }
    // Verifica se o segundo número é zero para evitar divisão por zero
    if (num2 === 0) {
      throw new Error("Divisão por zero não é permitida.");
    }
    // Realiza a divisão
    const result = num1 / num2;
    // Exibe o resultado
    resultElement.textContent = `Resultado: ${result}`;
    // Loga o resultado no console para depuração
    console.log(`Divisão realizada: ${num1} / ${num2} = ${result}`);
  } catch (error) {

    resultElement.textContent = `Erro: ${error.message}`;
    console.error(error);

  } finally {

    console.log("Operação concluída.");

  }

});