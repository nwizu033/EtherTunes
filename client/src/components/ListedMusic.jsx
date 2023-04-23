
import React, { useState, useContext } from "react";
import { eventMan } from "@/assets";
import { loader } from "@/assets";
import { useRouter } from "next/router";
import MusicCard from "./MusicCard";
import CustomButton from "./CustomButton";
import { ethers } from "ethers";
import abi from "./../utils/abi.json";
import { useStateContext } from "@/context";

const ListedMusic = ({ title, isLoading, events }) => {
  const router = useRouter();
  const { currentAccount, eventList,  musicList } =
		useStateContext();

    const CreateMusic = () => {
      router.push("./nft/CreateMusic");
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
							handleClick={CreateMusic}
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

						
					{musicList.length > 0 &&
						musicList.map((event) => (
							<MusicCard key={event.musicId} {...event} />
						))}

				</div>
			</div>
    </div>
  )
}

export default ListedMusic