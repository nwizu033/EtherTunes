import React from "react";
import Image from "next/image";
import { CustomButton } from ".";
import { useStateContext } from "@/context";
import { ethers } from "ethers";
import { daysLeft } from "@/utils";

const EventCard = ({
	TOKEN_URI,
	currentRegistrants,
	endTime,
	eventId,
	maxAttendees,
	registrationFeeEther,
	registrationFeeToken,
	theme,
}) => {
	return (
		<div className=' bg-gray-900 rounded-lg p-1 '>
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
					<h1 className=' text-md md:text-xl '>Event Theme: {theme}</h1>
					<p>Total Ticket Available: {maxAttendees.toString()}</p>
					{/* <p>{tokenUri}</p> */}
					<p>End Time: {daysLeft(endTime.toNumber())}</p>
					<p>{ethers.utils.formatEther(registrationFeeEther.toString())}</p>
				</div>

				<CustomButton
					btnType='button'
					title={"Buy Ticket"}
					// title={address ? "Create a campaign" : "Connect"}
					// styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
					// handleClick={() => {
					// 	if (address) navigate("create-campaign");
					// 	else connect();
					// }}
				/>
			</div>
		</div>
	);
};

export default EventCard;
