function updateClock() {
	const hoursElement = document.querySelector(".hours");
	const minutesElement = document.querySelector(".minutes");
	const secondsElement = document.querySelector(".seconds");

	// Pegando a hora local
	const now = new Date();
	// padStart é para nunca ficar com um único dígito.
	const hours = now.getHours().toString().padStart(2, "0");
	const minutes = now.getMinutes().toString().padStart(2, "0");
	const seconds = now.getSeconds().toString().padStart(2, "0");

	// Atualizando o valor no html para ser exibido
	hoursElement.textContent = hours;
	minutesElement.textContent = minutes;
	secondsElement.textContent = seconds;

	console.log(now, hours, minutes, seconds);
}

// Atualização da função em 1s
setInterval(updateClock, 1000);
