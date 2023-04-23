import React, { useState, useEffect } from "react";
import UpComingEvents from "@/components/UpComingEvents";
// import { useStateContext } from "../context";

const Events = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [events, setEvents] = useState([]);

	// const { address, contract, getEvents } = useStateContext();



	// useEffect(() => {
	// 	if (contract) fetchEvents();
	// }, [address, contract]);
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
