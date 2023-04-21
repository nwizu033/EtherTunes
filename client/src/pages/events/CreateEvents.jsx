import React, { useState } from "react";
import { Loader, FormField, CustomButton } from "@/components";
import { useRouter } from "next/router";
import { money } from "@/assets";
import Image from "next/image";

const CreateEvents = () => {
	const navigate = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	// const { createCampaign } = useStateContext();
	const [form, setForm] = useState({
		theme: "",
		startTime: "",
		endTime: "",
		regFee: "",
		maxAttendee: "",
		tokeUri: "",
		image: "",
	});

	const handleFormFieldChange = (fieldName, e) => {
		setForm({ ...form, [fieldName]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		checkIfImage(form.image, async (exists) => {
			if (exists) {
				setIsLoading(true);
				await createCampaign({
					...form,
					target: ethers.utils.parseUnits(form.target, 18),
				});
				setIsLoading(false);
				navigate("/");
			} else {
				alert("Provide valid image URL");
				setForm({ ...form, image: "" });
			}
		});
	};

	return (
		<div className='bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
			{isLoading && <Loader />}
			<div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]'>
				<h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white'>
					List an Event
				</h1>
			</div>

			<form
				onSubmit={handleSubmit}
				className='w-full mt-[65px] flex flex-col gap-[30px]'>
				<div className='flex flex-wrap gap-[40px]'>
					<FormField
						labelName='Event Title *'
						placeholder='Title of the Event'
						inputType='text'
						value={form.theme}
						handleChange={(e) => handleFormFieldChange("title", e)}
					/>
				</div>

				{/* <FormField
					labelName='Details *'
					placeholder='Write your story'
					isTextArea
					value={form.description}
					handleChange={(e) => handleFormFieldChange("description", e)}
				/> */}

				<div className='flex flex-wrap gap-[40px]'>
					<FormField
						labelName='Start Date *'
						placeholder='Start Date'
						inputType='date'
						value={form.startTime}
						handleChange={(e) => handleFormFieldChange("startTime", e)}
					/>

					<FormField
						labelName='End Date *'
						placeholder='End Date'
						inputType='date'
						value={form.endTime}
						handleChange={(e) => handleFormFieldChange("deadline", e)}
					/>
				</div>

				<div className='flex flex-wrap gap-[40px]'>
					<FormField
						labelName='Reg Fee *'
						placeholder='ETH 0.50'
						inputType='text'
						value={form.regFee}
						handleChange={(e) => handleFormFieldChange("fee", e)}
					/>
					<FormField
						labelName='Max Attendee *'
						placeholder='Max Attendees'
						inputType='text'
						value={form.maxAttendee}
						handleChange={(e) => handleFormFieldChange("deadline", e)}
					/>
				</div>

				<div className='flex flex-wrap gap-[40px]'>
					<FormField
						labelName='Token Uri *'
						placeholder='Token Uri'
						inputType='text'
						value={form.tokenUri}
						handleChange={(e) => handleFormFieldChange("deadline", e)}
					/>
					<FormField
						labelName='Event Image *'
						placeholder='Place image URL of your event'
						inputType='url'
						value={form.image}
						handleChange={(e) => handleFormFieldChange("image", e)}
					/>
				</div>

				<div className='flex justify-center items-center mt-[40px]'>
					<CustomButton
						btnType='submit'
						title='Submit new Event'
						styles='bg-[#1dc071]'
					/>
				</div>
			</form>
		</div>
	);
};

export default CreateEvents;
