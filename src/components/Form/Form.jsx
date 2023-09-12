import React from "react";
import { useState } from "react";
import "./Form.css";
import Modal from "../Modal/Modal.jsx";

const Form = () => {
	const [mostrarModal, setMostrarModal] = useState(false);

	const [formData, setFormData] = useState({
		nombre: "",
		apellido: "",
		email: "",
		pais: "",
		telefono: "",
		puesto: "",
	});

	// console.log("formData:", formData);

	const [errores, setErrores] = useState({});

	const handleSubmit = async (event) => {
		event.preventDefault();

		const nombreError = validarNombre(formData.nombre);
		const apellidoError = validarApellido(formData.apellido);
		const emailError = validarEmail(formData.email);
		const paisError = validarPais(formData.pais);
		const telefonoError = validarTelefono(formData.telefono);
		const puestoError = validarPuesto(formData.puesto);

		// Actualiza el estado de errores con el resultado de la validación
		setErrores({
			nombre: nombreError,
			apellido: apellidoError,
			email: emailError,
			pais: paisError,
			telefono: telefonoError,
			puesto: puestoError,
		});

		// Si no hay errores, continua con el envío de datos al backend
		if (
			!nombreError &&
			!apellidoError &&
			!emailError &&
			!paisError &&
			!telefonoError &&
			!puestoError
		) {
			const dataToSend = {
				name: formData.nombre,
				surname: formData.apellido,
				email: formData.email,
				country: formData.pais,
				phone: formData.telefono,
				job: formData.puesto,
			};

			try {
				// Realiza la solicitud POST al servidor
				const response = await fetch("http://localhost:8080/participants/add", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(dataToSend), // Convierte los datos a JSON y envíalos en el cuerpo de la solicitud
				});

				if (response.ok) {
					setMostrarModal(true);
					// La solicitud fue exitosa (código de respuesta 200)
					// Aquí puedes manejar la respuesta del servidor si es necesario
					console.log("Solicitud POST exitosa");
				} else {
					// La solicitud no fue exitosa, puedes manejar el error aquí
					console.error("Error en la solicitud POST:", response.statusText);
				}
			} catch (error) {
				// Maneja cualquier error de red u otros errores aquí
				console.error("Error en la solicitud POST:", error);
			} // Aquí puedes implementar la lógica para enviar los datos al backend en Java
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	// Validaciones

	const validarNombre = (nombre) => {
		// Implementa aquí tus validaciones para el nombre
		// Por ejemplo, verificar si contiene números u otros caracteres no deseados
		if (!nombre) {
			return "El nombre es requerido";
		}
		if (nombre.match(/\d/)) {
			return "El nombre no debe contener números ni caracteres especiales";
		}
		if (!/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]*$/.test(nombre)) {
			return "El nombre no debe contener números ni caracteres especiales";
		}
		return ""; // Si no hay errores, retorna una cadena vacía
	};

	const validarApellido = (apellido) => {
		// Implementa aquí tus validaciones para el nombre
		// Por ejemplo, verificar si contiene números u otros caracteres no deseados
		if (!apellido) {
			return "El apellido es requerido";
		}
		if (apellido.match(/\d/)) {
			return "El apellido no debe contener números ni caracteres especiales";
		}
		if (!/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]*$/.test(apellido)) {
			return "El apellido no debe contener números ni caracteres especiales";
		}
		return ""; // Si no hay errores, retorna una cadena vacía
	};

	const validarEmail = (email) => {
		if (!email) {
			return "El correo electrónico es requerido";
		}

		// Utiliza una expresión regular para verificar si el correo electrónico tiene un formato válido
		const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		if (!emailPattern.test(email)) {
			return "El correo electrónico no tiene un formato válido";
		}

		if (email.length > 100) {
			return "El correo electrónico es demasiado largo";
		}

		return ""; // Si no hay errores, retorna una cadena vacía
	};

	const validarPais = (pais) => {
		if (!pais) {
			return "El país es requerido";
		}

		return ""; // Si no hay errores, retorna una cadena vacía
	};

	const validarTelefono = (telefono) => {
		if (!telefono) {
			return "El número de teléfono es requerido";
		}

		// Utiliza una expresión regular para verificar si el teléfono tiene un formato válido
		const telefonoPattern = /^[0-9]+$/;
		if (!telefonoPattern.test(telefono)) {
			return "El número de teléfono debe contener solo números";
		}

		return ""; // Si no hay errores, retorna una cadena vacía
	};

	const validarPuesto = (puesto) => {
		if (!puesto) {
			return "El puesto es requerido";
		}
		if (puesto.match(/\d/)) {
			return "El puesto no debe contener números ni caracteres especiales";
		}
		if (!/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]*$/.test(puesto)) {
			return "El puesto no debe contener números ni caracteres especiales";
		}

		return ""; // Si no hay errores, retorna una cadena vacía
	};

	return (
		<div className="formulario">
			<h2>¡Inscríbete y reserva tu lugar ahora!</h2>
			<form onSubmit={handleSubmit}>
				<div className="campo">
					<label htmlFor="nombre">Nombre</label>
					<input
						type="text"
						name="nombre"
						id="nombre"
						value={formData.nombre}
						onChange={handleChange}
						required

						// Agrega validaciones aquí (por ejemplo, para evitar números)
					/>
					{errores.nombre && <span className="error">{errores.nombre}</span>}
				</div>

				<div className="campo">
					<label htmlFor="apellido">Apellido</label>
					<input
						type="text"
						name="apellido"
						id="apellido"
						value={formData.apellido}
						onChange={handleChange}
						required
						// Agrega validaciones aquí (por ejemplo, para evitar números)
					/>
					{errores.apellido && (
						<span className="error">{errores.apellido}</span>
					)}
				</div>

				<div className="campo">
					<label htmlFor="email">Correo electrónico del trabajo</label>
					<input
						type="email"
						name="email"
						id="email"
						value={formData.email}
						onChange={handleChange}
						required
						// Agrega validaciones aquí (por ejemplo, para evitar números)
					/>
					{errores.email && <span className="error">{errores.email}</span>}
				</div>

				<div className="campo">
					<label htmlFor="pais">País</label>
					<select
						name="pais"
						id="pais"
						value={formData.pais}
						onChange={handleChange}
						required
					>
						<option value="">Selecciona un país</option>
						<option value="Argentina">Argentina</option>
						<option value="Bolivia">Bolivia</option>
						<option value="Brasil">Brasil</option>
						<option value="Chile">Chile</option>
						<option value="Colombia">Colombia</option>
						<option value="Costa Rica">Costa Rica</option>
						<option value="Cuba">Cuba</option>
						<option value="Ecuador">Ecuador</option>
						<option value="El Salvador">El Salvador</option>
						<option value="Guatemala">Guatemala</option>
						<option value="Honduras">Honduras</option>
						<option value="México">México</option>
						<option value="Nicaragua">Nicaragua</option>
						<option value="Panamá">Panamá</option>
						<option value="Paraguay">Paraguay</option>
						<option value="Perú">Perú</option>
						<option value="República Dominicana">República Dominicana</option>
						<option value="Uruguay">Uruguay</option>
						<option value="Venezuela">Venezuela</option>

						{/* Agrega más opciones de países según tus necesidades */}
					</select>
					{errores.pais && <span className="error">{errores.pais}</span>}
				</div>

				<div className="campo">
					<label htmlFor="telefono">Número de teléfono</label>
					<input
						type="tel"
						name="telefono"
						id="telefono"
						value={formData.telefono}
						onChange={handleChange}
						required
						// Agrega validaciones aquí (por ejemplo, para evitar números)
					/>
					{errores.telefono && (
						<span className="error">{errores.telefono}</span>
					)}
				</div>

				<div className="campo">
					<label htmlFor="puesto">Puesto de trabajo</label>
					<input
						type="text"
						name="puesto"
						id="puesto"
						value={formData.puesto}
						onChange={handleChange}
						required
						// Agrega validaciones aquí (por ejemplo, para evitar números)
					/>
					{errores.puesto && <span className="error">{errores.puesto}</span>}
				</div>

				<button type="submit">Inscríbete</button>
			</form>
			{mostrarModal && (
				<Modal
					mostrar={mostrarModal}
					cerrarModal={() => setMostrarModal(false)}
				/>
			)}
		</div>
	);
};

export default Form;
