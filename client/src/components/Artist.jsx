import React from "react";
import { singer } from "@/assets";
import { stage } from "@/assets";
import Image from "next/image";
const Artist = () => {
	return (
		<>
			<div className=' py-20 grid grid-cols-1 items-center md:grid-cols-2 '>
				<div>
					<Image
						src={singer}
						alt='Singer with guitar'
						className=' w-full '
						width={2000}
						height={2000}
					/>
				</div>
				<div className=' space-y-4'>
					<p className=' text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-red-800 '>
						ARE YOU AN ARTIST?
					</p>
					<h1 className=' text-3xl md:text-6xl font-bold capitalize '>
						Upload your
						<span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-red-800 '>
							{" "}
							songs
						</span>
					</h1>
					<p className=' text-xl md:text-2xl '>
						We provides a level playing field, allowing emerging artists to
						compete with established musicians.
					</p>

					<button className=' border-b text-md mt-4 pb-1 '>
						Sign Up As An Artist
					</button>
				</div>
			</div>

			{/* list your event */}
			<div className=' py-20 grid grid-cols-1 items-center md:grid-cols-2 '>
				<div className=' space-y-4'>
					<p className=' capitalize text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-red-800 '>
						You've got an event
					</p>
					<h1 className=' text-3xl md:text-6xl font-bold capitalize '>
						List your
						<span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-red-800 '>
							{" "}
							Events
						</span>
					</h1>
					<p className=' text-xl md:text-2xl '>
						We provide a platform for event organizers to promote their events
						to a wider audience within the web3 ecosystem.
					</p>

					<button className=' border-b text-md mt-4 pb-1 '>
						List Event
					</button>
				</div>

				<div>
					<Image
						src={stage}
						alt='Singer with guitar'
						className=' w-full '
						width={2000}
						height={2000}
					/>
				</div>
			</div>
		</>
	);
};

export default Artist;
