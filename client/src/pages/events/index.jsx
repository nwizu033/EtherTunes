import React, { useState } from "react";
import UpComingEvents from "@/components/UpComingEvents";

const Events = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [events, setEvents] = useState([]);

	return (
		<div className=' px-4 md:px-20'>
			<UpComingEvents
				title={"All Events"}
				isLoading={isLoading}
				// events={events}
			/>
		</div>
	);
};

export default Events;
