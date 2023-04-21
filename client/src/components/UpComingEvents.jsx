import React from "react";
import { eventMan } from "@/assets";
import { loader } from "@/assets";
import EventCard from "./EventCard";
import { useRouter } from "next/router";
import CustomButton from "./CustomButton";

const UpComingEvents = ({ title, isLoading, events }) => {
	const router = useRouter();

	// const handleNavigate = (evenT) => {
	// 	router.push(`/EventDetails/${evenT.title}`, { state: evenT });
	// };

	const CreateEvent = () => {
		router.push("./events/CreateEvents");
	};

	return (
		<div>
			<div className=' mt-20'>
				<div className=' flex items-center justify-between mb-10'>
					<p className=' text-center bg-gradient-to-tr from-purple-500 to-red-400 bg-clip-text text-transparent  text-4xl'>
						{title}
					</p>
					{router.pathname != "/" && (
						<CustomButton
							btnType='submit'
							title='Create an Event'
							styles='bg-[#1dc071]'
							handleClick={CreateEvent}
						/>
					)}
				</div>

				<div className=' gap-4 grid md:grid-cols-3'>
					{/* {isLoading && (
						<img
							src={loader}
							alt='loader'
							className='w-[100px] h-[100px] object-contain'
						/>
					)}

					{!isLoading && events.length === 0 && (
						<p className='font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]'>
							You have not created any event yet
						</p>
					)}

					{!isLoading &&
						campaigns.length > 0 &&
						campaigns.map((campaign) => (
							<EventCard
								key={evenT.id}
								{...evenT}
								handleClick={() => handleNavigate(evenT)}
							/>
						))} */}

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
