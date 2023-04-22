import { ethers } from "ethers";
import React, { createContext, useContext, useState } from "react";
import abi from "./../utils/abi.json";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
	const [currentAccount, setCurrentAccount] = useState();

	const connectWallet = async () => {
		try {
			const { ethereum } = window;

			if (!ethereum) {
				alert("Please install metamask for easy experience ");
			}

			const accounts = await ethereum.request({
				method: "eth_requestAccounts",
			});
			setCurrentAccount(accounts[0]);

			const events = await seeEvents();
			console.log(events);
		} catch (error) {
			console.log(error);
		}
	};

	const shortenAddress = (currentAccount) =>
		`${currentAccount.slice(0, 3)}...${currentAccount.slice(
			currentAccount.length - 4
		)}`;

	const [eventList, setEventList] = useState();
	const contractAddress = "0x2FB7d59826e80b51120227C41ffF4442D4C4f220";


	const ListEvent = async (form) => {
		try {
			const data = await createCampaign([
				form.theme, // title
				new Date(form.endTime).getTime(), // deadline,
				form.regFee,	// regFee
				form.maxAttendee,	//maxAttendee
				form.image,
			]);

			console.log("contract call success", data);
		} catch (error) {
			console.log("contract call failure", error);
		}
	};


	const seeEvents = async () => {
		const { ethereum } = window;
		const accounts = await ethereum.request({ method: "eth_accounts" });

		if (accounts.length !== 0) {
			const provider = new ethers.providers.Web3Provider(ethereum);
			const signer = provider.getSigner();
			const contract = new ethers.Contract(contractAddress, abi, signer);
			const eventResult = await contract.seeEvents();
			setEventList(eventResult);
			console.log(eventList);

			const parsedEvents = eventList.map((evenT, i) => {
				title: evenT.theme;
				// fee: registrationFeeToken;
				currentAttendee: evenT.currentRegistrants.toString();
				endTime: evenT.endTime.toNumber();
				eventId: evenT.eventId.toString();
				maxAttendees: evenT.maxAttendees.toString();
				registrationFeeEther: ethers.utils.formatEther(
					evenT.registrationFeeEther.toString()
				);
				// registrationFeeToken: evenT.registrationFeeToken.toString();
			});

			return parsedEvents;
			// console.log(parsedEvents);
			// setEventList(parsedEvents)

		} else {
			alert("Please connect wallet");
		}
	};

	return (
		<StateContext.Provider
			value={{
				seeEvents,
				connectWallet,
				currentAccount,
				shortenAddress,
			}}>
			{children}
		</StateContext.Provider>
	);
};

// Smart contract address
// 0x2FB7d59826e80b51120227C41ffF4442D4C4f220

// 0x2FB7d59826e80b51120227C41ffF4442D4C4f220
// export default StateContext;
export const useStateContext = () => useContext(StateContext);
