import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="headerItems">
				<div className="webinar">WEBINAR</div>
				<div className="mainTitle">
					El reto de humanizar el CX financiero en 2021.{" "}
					<span>La experiencia de un Unicornio de Latam</span>
				</div>
				<div className="subtitle">
					MIÉRCOLES 16 DE DICIEMBRE | 17 HS (HORARIO DE QUITO)
				</div>
			</div>
		</div>
	);
};

export default Header;
