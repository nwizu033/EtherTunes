import React, { useState, useContext } from "react";
import { eventMan } from "@/assets";
import { loader } from "@/assets";
import EventCard from "./EventCard";
import { useRouter } from "next/router";
import CustomButton from "./CustomButton";
import { ethers } from "ethers";
import abi from "./../utils/abi.json";
import { useStateContext } from "@/context";

const UpComingEvents = ({ title, isLoading, events }) => {
	const router = useRouter();

	const { currentAccount, eventList, connectWallet, shortenAddress } =
		useStateContext();



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
					{/* {} */}
					{router.pathname != "/" && (
						<CustomButton
							btnType='submit'
							title='Create an Event'
							className='bg-[#1dc071]'
							handleClick={CreateEvent}
						/>
					)}
				</div>

				<div className=' gap-4 grid md:grid-cols-3'>
				

						
					{eventList.length > 0 &&
						eventList.map((event) => (
							<EventCard key={event.eventId} {...event} />
						))}

				</div>
			</div>
		</div>
	);
};

export default UpComingEvents;
