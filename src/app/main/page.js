'use client'

import React, { useState, useEffect } from 'react';
import Container from '@components/container'
import Button from '@components/Button/page'
import FileUpload from '@components/Button/fileUpload'
import Modal from '@components/Modal/page'
import Toggle from '@components/Button/toggle'
import useUserStore from '../../useStore'
import useUpload from '@hooks/useUpload'
import axios from 'axios'

const Main = () => {
	const [isModalOpen, setIsModalOpen] = useState(true)
	const { user, isAuthenticated } = useUserStore()
	const { uploadFile } = useUpload()
	const [file, setFile] = useState(null)
	const [uploadedImageUrl, setUploadedImageUrl] = useState(null)
	const headers = {
        'Authorization' : user.user.access_token,
		'content-type': 'multipart/form-data'
        // Add other headers if needed
    };
	const handleFileUpload = async () => {
		if(file){
			const formData = new FormData()
			formData.append('file', file) //works

			const response = await uploadFile({
				body: formData,
				headers: headers
			});
			if (response) {
				console.log('Image uploaded successfully')
				setUploadedImageUrl(response.url)
			}else{
				console.error('Image upload not successful')
			}
		}else{
			console.error('No file selected')
		}

	};

	useEffect(() => {
		// This block of code will run whenever uploadedImageUrl changes.
		// It will log the updated URL to the console.
		if (uploadedImageUrl) {
		  console.log('Uploaded Image URL:', uploadedImageUrl);
		}
	  }, [uploadedImageUrl]);

	//console.log(headers.authorization)
	const renderContent = () => {
		return (
			<div>
				<div className="flex flex-col mb-[20px]">
					<div className="w-full flex justify-end mb-[20px]">
						<Toggle title="Use custom weights" />
					</div>
					<h1 className="font-bold text-[20px]">Model</h1>
					<span className="text-gray-400">Select from any from our pre-defined model you want to use.</span>
					<ul className="flex py-[20px] gap-3">
						<li className="w-fit text-gray-500 px-[10px] py-[5px] cursor-pointer rounded-md border border-gray-300 hover:border-green-300 hover:text-green-500">
							<span className="">General</span>
						</li>
						<li className="w-fit text-gray-500 px-[10px] py-[5px] cursor-pointer rounded-md border border-gray-300 hover:border-green-300 hover:text-green-500">
							<span className="">Laser Solder</span>
						</li>
					</ul>
				</div>
				<div className="flex flex-col">
					<h1 className="font-bold text-[20px]">Upload your own model</h1>
					<span className="text-gray-400">You can add your own custom dataset to be used in the AI model.</span>
					<FileUpload />
				</div>
			</div>
		)
	}

	return (
		<>
		<Container>
			<div className="h-[100vh] float-left text-neutral-900 w-full flex justify-center p-[20px]">
				<div className="w-full flex flex-col gap-x-1 items-left justify-between mb-4 h-48 rounded shadow p-6">
					<h1 className="text-5xl font-bold">Upload your image</h1>
					<form
						id="fileUploadForm"
						method="POST"
						encType="multipart/form-data"
						className="flex justify-between"
					>
						<input
							type="file"
							name="file"
							accept=".txt, .pdf, .png, .jpg, .jpeg, .gif"
							onChange={({target}) =>{
								setFile(target.files[0])
							}}
						/>
						<Button
							title="Upload"
							style=" bg-green-400 text-white hover:bg-green-500"
							onClick={handleFileUpload}
						/>
					</form>
				</div>
			</div>
			{user && isAuthenticated && isModalOpen && (
				<Modal
					title="Setup your AI model"
					onClose={() => {
						setIsModalOpen(!isModalOpen)
					}}
					content={renderContent}
					footer={() => {
						return (
							<div className="w-full flex justify-end">
								<Button
									style={' bg-green-400 text-white ml-[20px]'}
									title="Continue"
									onClick={() => {
										setIsModalOpen(!isModalOpen)
									}}
								/>
							</div>
						)
					}}
				/>
			)}
		</Container>
		<Container>
        {uploadedImageUrl && (
          <img src={uploadedImageUrl} alt="Uploaded" />
        )}
      	</Container>
		</>
	)
}

export default Main
