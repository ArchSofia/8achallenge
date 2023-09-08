import React from "react";
import { useState } from "react";
import "./Form.css";

const Form = () => {
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

	const handleSubmit = (event) => {
		event.preventDefault();
		//  Lógica para enviar los datos al backend en Java
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
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
						// Agrega validaciones aquí (por ejemplo, para evitar números)
					/>
					{errores.puesto && <span className="error">{errores.puesto}</span>}
				</div>

				<button type="submit">Inscríbete</button>
			</form>
		</div>
	);
};

export default Form;
