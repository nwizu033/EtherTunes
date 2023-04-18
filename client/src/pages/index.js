import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import WhyUs from "@/components/WhyUs";
import UpComingEvents from "@/components/UpComingEvents";

export default function Home() {
	return (
		<>
			<div className=' px-4 md:px-20 '>
				<Hero />
				<Partners />
				<WhyUs />
				<UpComingEvents />
				<main className='flex min-h-screen flex-col items-center justify-between p-24'>
					Landing Page
				</main>
			</div>
		</>
	);
}
