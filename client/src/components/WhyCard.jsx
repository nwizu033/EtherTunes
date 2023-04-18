import React from "react";
import Image from "next/image";
const WhyCard = ({ title, src, why }) => {
	return (
		<div className=' flex border gap-4 bg-zinc-900 shadow-lg border-gray-700 rounded-lg p-2'>
			<div className='bg-gradient-to-r from-purple-800 to-red-800 h-fit p-2 rounded-l-full'>
				<Image
					src={src}
					alt={src}
					width={100}
					height={100}
					className=' h-10 w-10 '
				/>
			</div>
			<div>
				<h1 className=' bg-clip-text bg-gradient-to-r from-purple-800 to-red-800 text-transparent text-2xl'>
					{title}
				</h1>
				<p>{why}</p>
			</div>
		</div>
	);
};

export default WhyCard;
