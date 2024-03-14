// Selecionar Elementos
const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#btn__convert");
const messageElement = document.querySelector("#message");

// Converter as unidades
function convert() {
	// Obter os varoles das unidades de entrada e saída
	const fromValue = fromElement.value;
	const toValue = toElement.value;

	// Verifica se o input está vazio
	if (inputElement.value.trim() === "") {
		alert("Insira um valor.");
		inputElement.value = "";
		return;
	}

	// Verifica se número negativo
	if (inputElement.value < 0 || inputElement.value == null) {
		alert("Valor Inválido!\nInsira um número maior ou igual a zero.");
		inputElement.value = "";
		return;
	}

	// Verifica se as unidades de entrada e saída são iguais
	if (fromValue === toValue) {
		outputElement.value = inputElement.value;
		messageElement.textContent = "";
		return;
	}

	// Converte o valor de entrada pra metros
	let meters;
	switch (fromValue) {
		case "m":
		meters = inputElement.value;
		break;
	case "km":
		meters = inputElement.value * 1000;
		break;
	case "cm":
		meters = inputElement.value /100;
		break;
	case "mm":
		meters = inputElement.value /1000;
		break;
	}

	// Converter os metros para a unidade de saída
	let result;
	switch(toValue) {
		case "m":
			result = meters;
			break;
		case "km":
			result = meters / 1000;
			break;
		case "cm":
			result = meters * 100;
			break;
		case "mm":
			result = meters * 1000;
			break;
	}

	// Exibe o resultado na caixa de saída
	outputElement.value = result.toFixed(2);


	// Exibe mensagem de conversão
	const fromLabel = fromElement.options[fromElement.selectedIndex].text;
	const toLabel = toElement.options[toElement.selectedIndex].text;
	const message = `${inputElement.value} ${fromLabel} equivalem a ${result.toFixed(2)} ${toLabel}`;
	messageElement.textContent = message;
	inputElement.value = "";

	console.log(`De: ${fromValue} | Para: ${toValue}`); // Quando clicar em "CONVERTER", vai exibir no console as unidades selecionadas
	console.log(`De: ${inputElement.value} | Para: ${outputElement.value}`); // Quando clicar em "CONVERTER", vai exibir no console as unidades selecionadas

}

convertButton.addEventListener("click", convert);
