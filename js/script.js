function validarForm() {
	const fullname = document.getElementById('fullname').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;

	if (fullname.trim().length === 0) {
		alert('El nombre es obligatorio');
		return false;
	}

	if (email.trim().length === 0) {
		alert('El email es obligatorio');
		return false;
	}

	if (!validarEmail(email)) {
		alert('El email no es valido');
		return false;
	}

	if (password.trim().length === 0) {
		alert('La contraseña es obligatoria');
		return false;
	}
}

function validarEmail(email) {
	return email.includes('@');

	// Validar con expresiones regulares
	// const regExp =
	// 	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	// return re.test(email.toLowerCase());
}
