import React from "react";
import Image from "next/image";
import ButtonComponent from "./ButtonComponent";

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
			<div className=' flex items-end '>
				<div>
					<h1 className=' text-3xl '>{event_name}</h1>
					<p>{event_venue}</p>
					<p>{event_date}</p>
					<p>{event_author_id}</p>
				</div>
				<ButtonComponent
					className=' shrink-0 '
					type='button'
					children={"Buy Ticket"}
				/>
			</div>
		</div>
	);
};

export default EventCard;
