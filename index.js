let form = document.querySelector("#form");

let users = []; //lista di utenti che sono stati aggiunti

form.addEventListener("submit", function (e) {
	e.preventDefault();

	let nome = document.querySelector("#nome").value;
	let cognome = document.querySelector("#cognome").value;
	let eta = document.querySelector("#eta").value;
	let sesso = document.querySelector("#sesso").value;

	let user = {
		nome,
		cognome,
		eta,
		sesso,
	};

	users.push(user);

	form.reset();
	printing();
});

function printing() {
	users.forEach((user) => {
		console.log(`nome --> ${user.nome}`);
		console.log(`cognome --> ${user.cognome}`);
		console.log(`eta --> ${user.eta}`);
		console.log(`sesso --> ${user.sesso}`);
	});
}
