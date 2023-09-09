import React from "react";
import "./Footer.css";
import twitter from "../../assets/5279123_tweet_twitter_twitter logo_icon.svg";
import fb from "../../assets/5279111_network_fb_social media_facebook_facebook logo_icon.svg";
import linkdn from "../../assets/5279114_linkedin_network_social network_linkedin logo_icon.svg";
import yt from "../../assets/5279120_play_video_youtube_youtuble logo_icon.svg";
import instagram from "../../assets/5279112_camera_instagram_social media_instagram logo_icon.svg";
import snapch from "../../assets/1964410_logo_media_snapchat_social_icon.svg";

const Footer = () => {
	return (
		<>
			<div className="footercontainer">
				<div className="firstline">
					<div className="date">© 2020</div>
					<div className="socialicons">
						<div className="icon">
							<a
								href="https://www.twitter.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={twitter} alt={twitter} />
							</a>
						</div>
						<div className="icon">
							<a
								href="https://www.facebook.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={fb} alt={fb} />
							</a>
						</div>
						<div className="icon">
							<a
								href="https://www.linkedin.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={linkdn} alt={linkdn} />
							</a>
						</div>
						<div className="icon">
							<a
								href="https://www.youtube.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={yt} alt={yt} />
							</a>
						</div>
						<div className="icon">
							<a
								href="https://www.instagram.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={instagram} alt={instagram} />
							</a>
						</div>
						<div className="icon">
							<a
								href="https://www.snapchat.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={snapch} alt={snapch} />
							</a>
						</div>
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
