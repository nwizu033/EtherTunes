import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.PNG";
import { IconContext } from "react-icons";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { CustomButton } from ".";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

	const handleMenuToggle = () => {
		setShowMenu(!showMenu);
	};

	return (
		<div className=' w-full  shadow-lg '>
			<div className=' flex px-4 py-2 justify-between items-center bg-gradient-to-r from-purple-700 to-red-300'>
				<Link href={"/"} className=' w-16 md:w-24 '>
					<Image src={logo} alt='EtherTunes Logo' width={100} height={100} />
				</Link>

				<IconContext.Provider value={{ color: "#fff" }}>
					{isMobile ? (
						<div className=' h-8 w-8 ' onClick={handleMenuToggle}>
							{showMenu ? (
								<FaTimes className=' h-full w-full' />
							) : (
								<FaBars className=' h-full w-full' />
							)}
						</div>
					) : (
						<div className=' flex items-center ml-auto justify-between '>
							<div className=' flex ml-auto flex-row space-x-4 '>
								<Link href={"/"}>Home</Link>
								<Link href={"/events"}>Events</Link>
								<Link href={"/nft"}>Music NFT</Link>
								{/* <Link href={"/"}>About</Link> */}
								<Link href={"/whitepaper"}>WhitePaper</Link>
								{/* <Link href={"/team"}>Team</Link> */}
							</div>

							<CustomButton
								btnType='button'
								title={"Connect"}
								// title={address ? "Create a campaign" : "Connect"}
								// styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
								// handleClick={() => {
								// 	if (address) navigate("create-campaign");
								// 	else connect();
								// }}
							/>
						</div>
					)}
				</IconContext.Provider>
			</div>
			{showMenu && (
				<div className=' md:hidden absolute top-[84px] rounded-lg right-1 left-1 pb-10 z-30 bg-gray-900/90 flex flex-col justify-between '>
					<div className=' flex flex-col space-y-1 text-center items-center justify-center '>
						<Link
							className=' border-1 border-white hover:cursor-pointer hover:bg-gradient-to-r from-purple-700 rounded-md to-red-300 py-2 w-[90%] '
							href={"/"}>
							Home
						</Link>
						{/* <Link
							className=' border-1 border-white hover:cursor-pointer hover:bg-gradient-to-r from-purple-700 rounded-md to-red-300 py-2 w-[90%] '
							href={"/"}>
							About
						</Link> */}

						<Link
							className=' border-1 border-white hover:cursor-pointer hover:bg-gradient-to-r from-purple-700 rounded-md to-red-300 py-2 w-[90%] '
							href={"/events"}>
							Event
						</Link>

						<Link
							className=' border-1 border-white hover:cursor-pointer hover:bg-gradient-to-r from-purple-700 rounded-md to-red-300 py-2 w-[90%] '
							href={"/nft"}>
							Music NFT
						</Link>
						<Link
							className=' border-1 border-white hover:cursor-pointer hover:bg-gradient-to-r from-purple-700 rounded-md to-red-300 py-2 w-[90%] '
							href={"/whitepaper"}>
							WhitePaper
						</Link>
						{/* <Link
							className=' border-1 border-white hover:cursor-pointer hover:bg-gradient-to-r from-purple-700 rounded-md to-red-300 py-2 w-[90%] '
							href={"/"}>
							Team
						</Link> */}
					</div>

					<div className=' flex justify-center items-center self-center mt-1  '>
						<CustomButton
							btnType='button'
							title={"Connect"}
							// title={address ? "Create a campaign" : "Connect"}
							// styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
							// handleClick={() => {
							// 	if (address) navigate("create-campaign");
							// 	else connect();
							// }}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
