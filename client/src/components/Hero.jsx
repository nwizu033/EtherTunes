import React from "react";
import AutoPlayVideo from "./AutoPlayVideo";
import ButtonComponent from "./ButtonComponent";
import circle1 from "../assets/circle-01.svg";
import circle2 from "../assets/circle-03.png";
import Image from "next/image";

const Hero = () => {
	return (
		<div className=' md:min-h-screen grid grid-cols-1 items-center md:grid-cols-2 gap-10 py-10 relative '>
			{/* <Image
				src={circle2}
				width={100}
				height={10}
				alt='circle'
				className=' h-6 w-6 absolute bottom-[10%] left-[50%] '
			/> 
			<Image
				src={circle1}
				width={50}
				height={50}
				alt='circle'
				className=' h-8 w-8 absolute top-[10%] left-[30%] '
			/> */}
			<div className=' space-y-3 md:space-y-6 '>
				<h1 className=' md:text-8xl text-4xl font-bold  '>EtherTunes</h1>
				<p className=' text-xl md:text-4xl '>
					Audio/Video Streaming, Music NFT Marketplace, SocialFi.
				</p>
				<ButtonComponent type='submit' children={"Connect Wallet"} />
			</div>
			<div className=' w-full'>
				<AutoPlayVideo src='/videos/video.mp4' className='' />
			</div>
		</div>
	);
};

export default Hero;
