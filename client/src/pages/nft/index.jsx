
import React, { useState } from "react";
import ListedMusic from "@/components/ListedMusic";

const Nft = () => {
  const [isLoading, setIsLoading] = useState(false);
	const [events, setEvents] = useState([]);

	return (
		<div className=' px-4 md:px-20'>
			<ListedMusic
				title={"All Music"}
				isLoading={isLoading}
				// events={events}
			/>
		</div>
	);
}

export default Nft