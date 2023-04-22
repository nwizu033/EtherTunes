import { ethers } from "ethers";
import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import abi from "./../utils/abi.json";

export const StateContext = createContext();

const shortenAddress = (currentAccount) =>
	`${currentAccount.slice(0, 3)}...${currentAccount.slice(
		currentAccount.length - 4
	)}`;

export const StateContextProvider = ({ children }) => {
	const [currentAccount, setCurrentAccount] = useState();
	const [eventList, setEventList] = useState([]);
	const contractAddress = "0x2FB7d59826e80b51120227C41ffF4442D4C4f220";

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
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const seeEvents = async () => {
			const { ethereum } = window;
			const accounts = await ethereum.request({ method: "eth_accounts" });

			if (accounts.length !== 0) {
				const provider = new ethers.providers.Web3Provider(ethereum);
				const signer = provider.getSigner();
				const contract = new ethers.Contract(contractAddress, abi, signer);
				const eventResult = await contract.seeEvents();
				setEventList(eventResult);
				console.log(eventResult);
			} else {
				alert("Please connect wallet");
			}
		};

		if (currentAccount) {
			seeEvents();
		}
	}, [currentAccount]);

	return (
		<StateContext.Provider
			value={{
				eventList,
				connectWallet,
				currentAccount,
				shortenAddress,
			}}>
			{children}
		</StateContext.Provider>
	);
};

StateContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export const useStateContext = () => useContext(StateContext);


