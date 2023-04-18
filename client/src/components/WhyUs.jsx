import React from "react";
import WhyCard from "./WhyCard";
import { users, scale, music, video, volume, calendar } from "../assets";

const WhyUs = () => {
	return (
		<div>
			<div className=' mt-10 space-y-6'>
				<p className=' text-center bg-gradient-to-tr from-purple-500 to-red-400 bg-clip-text text-transparent  text-4xl'>
					Why Choose Us
				</p>

				<div className=' grid grid-cols-1 gap-10 md:grid-cols-3  '>
					<WhyCard
						src={calendar}
						title={"EXCLUSIVE EVENTS"}
						why={"Access to unique and special performances."}
					/>
					<WhyCard
						src={volume}
						title={"HIGH-QUALITY AUDIO"}
						why={"Superior sound quality for exceptional listening."}
					/>
					<WhyCard
						src={music}
						title={"DIVERSE MUSIC SELECTION"}
						why={"Wide range of genres for every taste."}
					/>
					<WhyCard
						src={users}
						title={"SOCIAL COMMUNITY"}
						why={"Connect with other music enthusiasts and share experiences"}
					/>{" "}
					<WhyCard
						src={video}
						title={"LIVE STREAMING"}
						why={"Experience live performances from anywhere in the world."}
					/>
					<WhyCard
						src={scale}
						title={"TRANSPARENT ROYALTIES"}
						why={"Fair and transparent compensation for artists."}
					/>
				</div>
			</div>
		</div>
	);
};

export default WhyUs;
