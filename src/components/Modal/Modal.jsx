import React from "react";

const Modal = ({
	mostrar,
	cerrarModal,
	modalClassname,
	contenidoClassname,
}) => {
	return (
		<div className={`modal ${mostrar ? "mostrar" : ""}`}>
			<div className="contenido">
				<span className="modal-cerrar" onClick={cerrarModal}>
					&times;
				</span>
				<p>
					Gracias por tu interés. Estaremos en contacto por medio del email que
					nos proporcionaste en el formulario.
				</p>
			</div>
		</div>
	);
};

export default Modal;
