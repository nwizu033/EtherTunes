import React, { useState } from "react";
import { Loader, FormField, CustomButton } from "@/components";
import { useRouter } from "next/router";
import { useStateContext } from "@/context";
import { utils } from "ethers";
import { money } from "@/assets";
import Image from "next/image";

const CreateEvents = () => {
	const [image, setImage] = useState();
	const [eventName, setEventName] = useState();
	const [eventDesc, setEventDesc] = useState();
	const [newHash, setNewHash] = useState();

const pinataApiKey = 'da794c3569d209b4ecba';
const pinataSecretApiKey = '95c09ea930ff4abe7e341565f499c6580633648ea589cf23eee5b43c10e2191c';
	const metadatas = {
		name: eventName,
		description: eventDesc
	  }

	  async function pinFileToIPFS() {

		const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';
		const formData = new FormData();
		formData.append('file',image);
		formData.append('pinataMetadata', JSON.stringify(metadatas));
		
		const { data } = await axios.post(url, formData, {
			maxContentLength: 'Infinity',
			headers: {
				'Content-Type': 'multipart/form-data; boundary=${formData._boundary}',
				'pinata_api_key' : pinataApiKey,
				'pinata_secret_api_key' : pinataSecretApiKey
			}
		});
	
	
		return data;
	}

async function uploadJson(e) {

	const metadata = {
	  name: eventName,
	  description: eventDesc,
	  image: `ipfs://${e}`
	};

	  var config = {
		method: 'post',
		url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
		headers: { 
		  'Content-Type': 'application/json', 
		  'pinata_api_key' : pinataApiKey,
		  'pinata_secret_api_key' : pinataSecretApiKey
		},
		data : metadata
	  };


	const res = await axios(config);
	
	console.log(res.data.IpfsHash);
	setNewHash(res.data.IpfsHash);


	}







	const navigate = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const { createEvents } = useStateContext();

	const [form, setForm] = useState({
		theme: "",
		endTime: "",
		regFeeEth: "",
		regFeeETT: "",
		maxAttendees: "",
		tokenUri: ""
	});

	const handleFormFieldChange = (fieldName, e) => {
		setForm({ ...form, [fieldName]: e.target.value });
	};

	const handleImageSubmit = async (e) => {
		e.preventDefault();

			try{
				const photo = await pinFileToIPFS();
				await uploadJson(photo.IpfsHash);
	
			}
			catch(error){
				console.error(error);
	
			}
	
	
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		
			setIsLoading(true);
			await createEvents({
				...form,
				regFeeEth: ethers.utils.parseUnits(form.regFeeEth, 18),
				// regFeeETT: ethers.utils.parseUnits(form.regFeeETT, 18)
			});
			setIsLoading(false);
			navigate("/");
	};

	return (
		<div className='bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
			{isLoading && <Loader />}
			<div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]'>
				<h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white'>
					List an Event
				</h1>
			</div>

			<div className=' w-full'>
				<form
					onSubmit={handleImageSubmit}
					className='w-full mt-[65px] flex flex-col gap-[30px]'>
					<div className='flex flex-wrap gap-[40px]'>
						<FormField
							labelName='Event Theme *'
							placeholder='Theme of the Event'
							inputType='text'
							value={eventName}
							handleChange={(e) => setEventName(e.target.value)}
						/>
					</div>

					<div className='flex flex-wrap gap-[40px]'>
						<FormField
							labelName='Event Description *'
							placeholder='Description of the Event'
							inputType='text'
							value={eventDesc}
							handleChange={(e) => setEventDesc(e.target.value)}
						/>
					</div>

					<div className='flex flex-wrap gap-[40px]'>
						<FormField
							labelName='Event Image *'
							placeholder='Place image URL of your event'
							inputType='url'
							handleChange={(e) => setImage(e.target.value)}
						/>
					</div>

					<div className='flex justify-center items-center mt-[40px]'>
						<CustomButton
							btnType='submit'
							title='Fetch Image URI'
							styles='bg-[#1dc071]'
						/>
					</div>
				</form>

				<h2>Token URI: {`ipfs://${newHash}`}</h2>
			</div>

			<form
				onSubmit={handleSubmit}
				className='w-full mt-[65px] flex flex-col gap-[30px]'>
				<div className='flex flex-wrap gap-[40px]'>
					<FormField
						labelName='Event Theme *'
						placeholder='Theme of the Event'
						inputType='text'
						value={form.theme}
						handleChange={(e) => handleFormFieldChange("theme", e)}
					/>

					<FormField
						labelName='Registration End Date *'
						placeholder='Registration End Date'
						inputType='date'
						value={form.endTime}
						handleChange={(e) => handleFormFieldChange("endTime", e)}
					/>
				</div>

				<div className='flex flex-wrap gap-[40px]'>
					<FormField
						labelName='Reg Fee in Ehter*'
						placeholder='ETH 0.50'
						inputType='number'
						value={form.regFeeEth}
						handleChange={(e) => handleFormFieldChange("regFeeEth", e)}
					/>

					<FormField
						labelName='Reg Fee in Token*'
						placeholder='ETT 0.50'
						inputType='number'
						value={form.regFeeETT}
						handleChange={(e) => handleFormFieldChange("regFeeETT", e)}
					/>
				</div>

				<div className='flex flex-wrap gap-[40px]'>
					<FormField
						labelName='Max Attendee *'
						placeholder='Max Attendees'
						inputType='number'
						value={form.maxAttendees}
						handleChange={(e) => handleFormFieldChange("maxAttendees", e)}
					/>

					<FormField
						labelName='Token Uri *'
						placeholder='Token Uri'
						inputType='text'
						value={form.tokenUri}
						handleChange={(e) => handleFormFieldChange("tokenUri", e)}
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
