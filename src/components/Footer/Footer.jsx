import React from "react";
import "./Footer.css";
import twitter from "/Users/sofiadiazvaldez/Documents/PROJECTS/Challenge 8a agency/8achallenge/src/assets/5279123_tweet_twitter_twitter logo_icon.svg";
import fb from "/Users/sofiadiazvaldez/Documents/PROJECTS/Challenge 8a agency/8achallenge/src/assets/5279111_network_fb_social media_facebook_facebook logo_icon.svg";
import linkdn from "/Users/sofiadiazvaldez/Documents/PROJECTS/Challenge 8a agency/8achallenge/src/assets/5279114_linkedin_network_social network_linkedin logo_icon.svg";
import yt from "/Users/sofiadiazvaldez/Documents/PROJECTS/Challenge 8a agency/8achallenge/src/assets/5279120_play_video_youtube_youtuble logo_icon.svg";
import instagram from "/Users/sofiadiazvaldez/Documents/PROJECTS/Challenge 8a agency/8achallenge/src/assets/5279112_camera_instagram_social media_instagram logo_icon.svg";
import snapch from "/Users/sofiadiazvaldez/Documents/PROJECTS/Challenge 8a agency/8achallenge/src/assets/1964410_logo_media_snapchat_social_icon.svg";
// TODO: Acortar los paths

const Footer = () => {
	return (
		<>
			<div className="footercontainer">
				<div className="firstline">
					<div className="date">© 2020</div>
					<div className="socialicons">
						<div className="icon">
							<img src={twitter} alt={twitter} />
						</div>
						<div className="icon">
							<img src={fb} alt={fb} />
						</div>
						<div className="icon">
							<img src={linkdn} alt={linkdn} />
						</div>
						<div className="icon">
							<img src={yt} alt={yt} />
						</div>
						<div className="icon">
							<img src={instagram} alt={instagram} />
						</div>
						<div className="icon">
							<img src={snapch} alt={snapch} />
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
