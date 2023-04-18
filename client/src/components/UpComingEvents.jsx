import React from "react";
import { eventMan } from "@/assets";
import EventCard from "./EventCard";

const UpComingEvents = () => {
	return (
		<div>
			<div className=" mt-20">
				<p className=' text-center bg-gradient-to-tr mb-10 from-purple-500 to-red-400 bg-clip-text text-transparent  text-4xl'>
					Upcoming Events
				</p>

				<div className=' gap-4 grid md:grid-cols-3'>
					<EventCard
						event_author_id={"0x0000...."}
						event_name='Davido Live in Lagos'
						event_date='Date'
						event_venue='Amphi Venue'
						event_image={eventMan}
						eve
					/>
					<EventCard
						event_author_id={"0x0000...."}
						event_name='Davido Live in Lagos'
						event_date='Date'
						event_venue='Amphi Venue'
						event_image={eventMan}
						eve
					/>

					<EventCard
						event_author_id={"0x0000...."}
						event_name='Davido Live in Lagos'
						event_date='Date'
						event_venue='Amphi Venue'
						event_image={eventMan}
						eve
					/>
				</div>
			</div>
		</div>
	);
};

export default UpComingEvents;
