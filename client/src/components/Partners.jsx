import React from "react";
import { bunzz, web3afrika, chainide } from "@/assets";
import Image from "next/image";

const Partners = () => {
	return (
		<div>
			<div className=" text-center space-y-6">
				<p className=' bg-gradient-to-tr from-purple-500 to-red-400 bg-clip-text text-transparent  text-4xl'>Partners</p>
				<div className=' flex flex-row items-center md:flex-row justify-between'>
					<div className=' md:w-40 w-20 '>
						<Image
							className=' w-full '
							src={bunzz}
							width={200}
							height={200}
							alt='Bunzz'
						/>
					</div>

					<div className=' md:w-40 w-20 '>
						<Image
							className=' w-full '
							src={web3afrika}
							width={200}
							height={200}
							alt='Web#Afrika'
						/>
					</div>

					<div className=' md:w-40 w-20 '>
						<Image
							className=' w-full '
							src={chainide}
							width={200}
							height={200}
							alt='ChainIDE'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Partners;
