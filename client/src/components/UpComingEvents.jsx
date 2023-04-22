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

	// const handleNavigate = (evenT) => {
	// 	router.push(`/EventDetails/${evenT.eventId}`, { state: evenT });
	// };

	const CreateEvent = () => {
		router.push("./events/CreateEvents");
	};

	// 	try {
	// 		const { ethereum } = window;

	// 		if (!ethereum) {
	// 			alert("Please install metamask for easy experience ");
	// 		}

	// 		const accounts = await ethereum.request({
	// 			method: "eth_requestAccounts",
	// 		});

	// 		setCurrentAccount(accounts[0]);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// const shortenAddress = (currentAccount) =>
	// 	`${currentAccount.slice(0, 3)}...${currentAccount.slice(
	// 		currentAccount.length - 4
	// 	)}`;

	// const [eventList, setEventList] = useState();
	const contractAddress = "0x2FB7d59826e80b51120227C41ffF4442D4C4f220";

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
					{eventList.length > 0 &&
						eventList.map((event) => (
							<EventCard key={event.eventId} {...event} />
						))}

					{!currentAccount ? (
						<button
							onClick={connectWallet}
							className='bg-red-500
						'>
							Connect Wallet Sure
						</button>
					) : (
						<button
							className='bg-green-500
						'>
							Conn: {shortenAddress(currentAccount)}
						</button>
					)}
				</div>

				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fuga
					laudantium aliquid magnam debitis voluptas dicta exercitationem fugiat
					aperiam, iusto accusantium adipisci harum cum obcaecati facilis
					temporibus officia fugit praesentium!
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default UpComingEvents;
