import { ethers } from "ethers";
import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import abi from "./../utils/abi.json";
import { useAccount } from "wagmi";
import { useSigner } from "wagmi";

export const StateContext = createContext();

const shortenAddress = (currentAccount) =>
	`${currentAccount.slice(0, 3)}...${currentAccount.slice(
		currentAccount.length - 4
	)}`;

export const StateContextProvider = ({ children }) => {
	const [eventList, setEventList] = useState([]);
	const [musicList, setMusicList] = useState([]);
	const contractAddress = "0xb8c04b4d4FF00E1a8E4b7140AF6E213907B3bb10";

	// const connectWallet = async () => {
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

	// listing function
	// const [theme, setTheme] = useState();
	// const [endTime, setEndTime] = useState();
	// const [regfeeEth, setRegFeeEth] = useState();
	// const [regfeeETT, setRegFeeETT] = useState();
	// const [maxAttendees, setMaxAttendees] = useState();
	// const [tokenUri, setTokenUri] = useState();
	const { data: signer, isError, isLoading } = useSigner();



const CreateMusic = async () => {
 
	if(signer) {
	  const contract = new ethers.Contract(contractAddress, abi, signer);
	  const listing= await contract.listMusic(
		title, artist, etherPrice, tokenPrice, tokenUri
	  );
	 await listing.wait();
	 alert(`music listed:  ${listing.hash}`)
	  // console.log(EventList);
	
	}else{
	  alert("Please connect wallet");
	}
  
  }
  const regEventWithEth = async () => {
  
	if(signer) {
	  const contract = new ethers.Contract(contractAddress, abi, signer);
	  const registering= await contract.registerEventWithEther(id);
	 await registering.wait();
	 alert(`bought: ${registering.hash}`)
	
	}else{
	  alert("Please connect wallet");
	}
  }
  const regEventWithETT = async () => {
  
	if(signer) {
	  const tokenContract = new ethers.Contract(tokenAddress, tokenAbi,signer);
	  const approve = await tokenContract.approve(contractAddress,(100000*1e18));
	  approve.wait();
	  alert("approved, please wait");
	  const contract = new ethers.Contract(contractAddress, abi, signer);
	  const registering= await contract.registerEventWithEther(_eventId);
	 await registering.wait();
	 alert(`bought: ${registering.hash}`)
	
	}else{
	  alert("Please connect wallet");
	}
  }


  const seeMusic = async () => {
	if (signer) {
		const contract = new ethers.Contract(contractAddress, abi, signer);
		const musicResult = await contract.seeMusics();
		setMusicList(musicResult);
		console.log(musicResult);
	} else {
		alert("Please connect wallet");
	}
};

if (signer) {
	seeEvents();
}



	const createEvents = async () => {
		if (signer) {
			const contract = new ethers.Contract(contractAddress, abi, signer);
			const listing = await contract.listEvent(
				theme,
				endTime,
				regfeeEth,
				regfeeETT,
				maxAttendees,
				tokenUri
			);
			await listing.wait();
			alert(`event listed:  ${listing.hash}`);
			// console.log(EventList);
		} else {
			alert("Please connect wallet");
		}
	};


	useEffect(() => {
		const seeEvents = async () => {
			if (signer) {
				const contract = new ethers.Contract(contractAddress, abi, signer);
				const eventResult = await contract.seeEvents();
				setEventList(eventResult);
				console.log(eventResult);
			} else {
				alert("Please connect wallet");
			}
		};

		if (signer) {
			seeEvents();
		}
	}, [signer]);

	return (
		<StateContext.Provider
			value={{
				eventList,
				createEvents,
				signer
			}}>
			{children}
		</StateContext.Provider>
	);
};

StateContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export const useStateContext = () => useContext(StateContext);
