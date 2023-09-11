import React from "react";
import "./Specialist.css";

const Specialist = ({ nombre, rol }) => {
	return (
		<>
			<div className="mini-card">
				<div className="circle-avatar">
					{/* <img src={fotoURL} alt={nombre} /> */}
				</div>
				<div className="info">
					<h3>{nombre}</h3>
					<p>{rol}</p>
				</div>
			</div>
		</>
	);
};

export default Specialist;
