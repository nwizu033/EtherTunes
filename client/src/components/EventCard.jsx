import React from "react";
import Image from "next/image";
import { CustomButton } from ".";

const EventCard = ({
	event_author_id,
	event_date,
	event_image,
	event_name,
	event_venue,
}) => {
	return (
		<div className=' bg-gray-900 rounded-lg p-1 '>
			<div className='  rounded-lg '>
				<Image
					src={event_image}
					alt={event_name}
					width={1000}
					height={1000}
					className=' rounded-lg w-full '
				/>
			</div>
			<div className='  '>
				<div>
					<h1 className=' text-2xl md:text-3xl '>{event_name}</h1>
					<p>{event_venue}</p>
					<p>{event_date}</p>
					<p>{event_author_id}</p>
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
