import React from "react";

import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsSnapchat } from "react-icons/bs";
import "./Footer.css";
const Footer = () => {
	return (
		<>
			<div className="footercontainer">
				<div className="firstline">
					<div className="date">© 2020</div>
					<div className="socialicons">
						<AiFillTwitterCircle />
						<AiFillFacebook />
						<AiFillLinkedin />
						<AiOutlineYoutube />
						<AiOutlineInstagram />
						<BsSnapchat />
						<div className="icon"></div>
					</div>
				</div>
				<div className="secondline">
					<hr />
				</div>
			</div>
		</>
	);
};

export default Footer;
