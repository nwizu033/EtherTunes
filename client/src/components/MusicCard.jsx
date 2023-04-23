import React from "react";
import Image from "next/image";
import { CustomButton } from ".";
import { useStateContext } from "@/context";
import { useState } from "react";
import { ethers } from "ethers";
import { daysLeft } from "@/utils";
import { FormField } from ".";


// Modal Component
const Modal = ({ show, setShowModal }) => {
	const [eventId, setEventId] = useState();

	if (!show) return null;
	return (
		<div className=' fixed z-10 left-0 top-0 w-full h-full bg-[rgba(0, 0, 0, 0.9)]'>
			<div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-md '>
				<div className=' flex justify-end'>
					<p
						onClick={() => {
							setShowModal(false);
						}}
						className=' cursor-pointer justify-end flex text-black '>
						<svg
							className='w-6 h-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M6 18L18 6M6 6l12 12'></path>
						</svg>
					</p>
				</div>

				<div>
					<label className='flex-1 w-full flex flex-col'>
						<span className='font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]'>
							Event ID*
						</span>
						<input
							required
							value={eventId}
							onChange={(e) => setEventId(e.target.value)}
							type='number'
							placeholder='Enter the event ID'
							className='py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-black text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]'
						/>
					</label>
				</div>
				<div className=' flex flex-col md:items-end md:flex-row mt-4 space-y-2 justify-between'>
					<CustomButton
						btnType='button'
						title={"Register with Eth"}
						styles={"bg-[#1dc071]"}
						// handleClick={() => {
						// 	if (address) navigate("create-campaign");
						// 	else connect();
						// }}
					/>
					<CustomButton
						btnType='button'
						title={"Register with ETT"}
						styles={"bg-purple-700"}
						// handleClick={() => {
						// 	if (address) navigate("create-campaign");
						// 	else connect();
						// }}
					/>
				</div>
			</div>
		</div>
	);
};

const MusicCard = ({
	TOKEN_URI,
	currentTokens,
	currentEthers,
	musicId,
	tokenPrice,
	etherPrice,
	totalTokenRaised,
	totalEtherRaised,
	title,
	artist,
}) => {
	const [showModal, setShowModal] = useState(false);

	const handleRegisterClick = () => {
		setShowModal(true);
	};

	return (
		<div className=' bg-gray-900 rounded-lg px-3 py-3 '>
			<div className='  rounded-lg '>
				{/* <Image
					src={}
					width={1000}
					height={1000}
					className=' rounded-lg w-full '
				/> */}
			</div>
			<div className='  '>
				<div>
					<h1 className='  text-md md:text-xl '>
						<span className='bg-clip-text text-transparent bg-gradient-to-b from-red-900 to-purple-800'>
							Music Title:
						</span>
						{title}
					</h1>

					<p>
						<span className='bg-clip-text text-transparent bg-gradient-to-b from-red-900 to-purple-800'>
							Music ID:
						</span>
						{musicId.toString()}
					</p>

					<p>
						<span className='bg-clip-text text-transparent bg-gradient-to-b from-red-900 to-purple-800'>
							Artist:
						</span>
						{artist.toString()}
					</p>
					{/* <p>{tokenUri}</p> */}
					<p>
						<span className='bg-clip-text text-transparent bg-gradient-to-b from-red-900 to-purple-800'>
							Price in Ether:
						</span>
						{(etherPrice/1e18).toString()}
					</p>
					<p>
						<span className='bg-clip-text text-transparent bg-gradient-to-b from-red-900 to-purple-800'>
							Fee in Ethers:
						</span>
						{ethers.utils.formatEther(tokenPrice.toString())}
					</p>
				</div>

				<CustomButton
					btnType='button'
					title={"Register"}
					styles={"bg-purple-700 mt-3 hover:bg-purple-800"}
					handleClick={handleRegisterClick}
				/>

				<Modal setShowModal={setShowModal} show={showModal} />
			</div>
		</div>
	);
};

export default MusicCard;
