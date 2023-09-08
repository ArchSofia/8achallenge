import React from "react";
import "./Main.css";
import Specialist from "../Specialist/specialist";

const Main = () => {
	return (
		<>
			<div className="maincontainer">
				<div className="firstcolumn">
					<div className="sponsors"></div>
					<div className="content">
						<p>
							Te invitan este webinar, donde trataremos la temática de cómo
							humanizar la experiencia del cliente de Banca y Seguros en el
							nuevo entorno digital.
						</p>
						<p>
							Además podremos conocer las estrategias que aplicó LOREM para
							generar una experiencia memorable para sus clientes, mientras se
							convertía en el gran Unicornio de LATAM.
						</p>
						<p>Escucha de primera mano la voz de nuestros especialistas:</p>

						<Specialist
							nombre="José Perez"
							rol="Presidente"
							fotoURL="url_de_la_imagen.jpg"
						/>
						<Specialist
							nombre="José Perez"
							rol="Customer Service Senior Manager"
							fotoURL="url_de_la_imagen.jpg"
						/>

						<Specialist
							nombre="José Perez"
							rol="Senior Customer Success Consultant"
							fotoURL="url_de_la_imagen.jpg"
						/>

						<Specialist
							nombre="José Perez"
							rol="Gerente de Consultoría de Soluciones"
							fotoURL="url_de_la_imagen.jpg"
						/>

						<p>
							Participa e inspírate para innovar y mejorar la interacción entre
							clientes y marcas con historias de éxito de empresas del ámbito
							financiero en América Latina.
						</p>

						<p>¡Te esperamos!</p>
					</div>
					<div className="sponsors"></div>
				</div>
				<div className="secondcolumn"></div>
			</div>
		</>
	);
};

export default Main;
