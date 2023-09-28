'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Button from '@components/Button/page'
import Roboflow from '@components/Roboflow/roboflow'
import Container from '@components/container'
import WebcamSkeleton from '@components/Skeleton/webcamSkeleton'
import useUpload from '@hooks/useUpload'
import useAnalyze from '@hooks/useDemoAnalyze'
import ImageSkeleton from '@components/Skeleton/imageSkeleton'

const menuItems = [
	{
		label: 'File Upload',
		active: true,
	},
	{
		label: 'External Camera',
		active: false,
	},
]

const Demo = () => {
	const [loading, setLoading] = useState(false)
	const [toggleButton, setToggleButton] = useState(false)
	const [selected, setSelected] = useState(0)
	const [selectedFile, setSelectedFile] = useState(null)
	const [uploadedFile, setUploadedFile] = useState(null)
	const [file, setFile] = useState(null)
	const { isUploading, uploadFile } = useUpload()
	const { isAnalyzing, analyzeFile } = useAnalyze()
	// useEffect(() => {}, [])

	const handleFileChange = (event) => {
		const file = event.target.files[0]
		setSelectedFile(file)
	}

	const analyzeImage = async () => {
		setLoading(true)
		console.log(uploadedFile)
		const response = await analyzeFile({ url: uploadedFile.url })
		if (response) {
			setFile(response.data)
			setLoading(false)
		} else {
			setLoading(false)
		}
	}

	const uploadImage = async () => {
		setLoading(true)
		if (selectedFile) {
			const formData = new FormData()
			formData.append('file', selectedFile)
			const response = await uploadFile({
				body: formData,
			})

			if (response) {
				setUploadedFile(response.data)
				setLoading(false)
			} else {
				setLoading(false)
			}
		} else {
			console.error('No file selected')
		}
	}

	return (
		<div className="bg-white w-full h-[100vh] float-left lg:px-[200px] md:px-[80px] sm:px-[20px] mb-[200px]">
			<Container
				withTab={true}
				style=" text-neutral-900 mt-[100px]"
			>
				<ul className="flex flex-wrap -mb-px  border-b border-gray-200">
					<li className="mr-2">
						<div>
							<a
								className={`inline-block p-4 cursor-pointer ${
									selected === 0
										? 'text-green-600 border-b-2 font-bold border-green-600 rounded-t-lg active'
										: 'border-b-2 border-transparent rounded-t-lg hover:text-gray-600  hover:border-gray-300'
								}`}
								onClick={() => setSelected(0)}
							>
								Upload Image
							</a>
							<a
								className={`inline-block p-4 cursor-pointer ${
									selected === 1
										? 'text-green-600 border-b-2 font-bold border-green-600 rounded-t-lg active'
										: 'border-b-2 border-transparent rounded-t-lg hover:text-gray-600  hover:border-gray-300'
								}`}
								onClick={() => setSelected(1)}
							>
								External Webcam
							</a>
						</div>
					</li>
				</ul>
				{selected === 0 ? (
					<>
						<div className="w-full flex flex-col gap-x-1 items-left justify-between mb-4 h-48 rounded shadow p-6 mt-10">
							<h1 className="text-5xl font-bold">Upload your image</h1>
							<form
								method="POST"
								encType="multipart/form-data"
								className="flex justify-between"
							>
								<input
									type="file"
									name="file"
									accept=".txt, .pdf, .png, .jpg, .jpeg"
									onChange={handleFileChange}
								/>
								<Button
									title="Upload"
									style=" bg-green-400 text-white hover:bg-green-500"
									onClick={uploadImage}
								/>
							</form>
						</div>

						{uploadedFile && (
							<div className="w-full h-fit flex flex-col gap-x-1 items-left justify-between mb-4 min-h-48 rounded shadow p-6 mt-10 gap-[20px]">
								<h1 className="text-xl font-bold">Analyze Image</h1>

								<div className="flex flex-col relative items-center gap-[20px]">
									<Image
										src={uploadedFile?.url}
										alt="upload image"
										width={500}
										height={100}
										style={{ height: 'auto', maxHeight: '350px', maxWidth: '600px' }}
									/>
									<Button
										title="Analyze"
										style=" bg-green-400 text-white hover:bg-green-500 w-[500px]"
										onClick={analyzeImage}
									/>
								</div>
							</div>
						)}

						{loading && (
							<div className="w-full flex flex-col gap-x-1 items-left justify-between mb-4 h-fit rounded shadow p-6 mt-10">
								<ImageSkeleton />
							</div>
						)}
						{file && (
							<div className="w-full h-fit flex flex-col gap-x-1 items-left justify-between mb-4 min-h-48 rounded shadow p-6 mt-10 gap-[20px]">
								<h1 className="text-xl font-bold">Analyze Image</h1>

								<div className="flex flex-col relative items-center gap-[20px]">
									<Image
										src={file?.url}
										alt="result image"
										width={500}
										height={100}
										style={{ height: 'auto', maxHeight: '350px', maxWidth: '600px' }}
									/>
									<div>result here:</div>
								</div>
							</div>
						)}
					</>
				) : (
					<div className="w-full h-full mt-10 flex flex-col items-center gap-[20px]">
						<div className="w-full flex justify-end">
							<Button
								title={!toggleButton ? 'Open Webcam' : 'Close Webcam'}
								onClick={() => setToggleButton(!toggleButton)}
								style=" bg-green-400 text-white hover:bg-green-500"
							/>
						</div>
						{toggleButton ? (
							<Roboflow
								modelName="body parts"
								modelVersion="1"
							/>
						) : (
							<WebcamSkeleton />
							// <ImageSkeleton />
						)}
					</div>
				)}
			</Container>
		</div>
	)
}

export default Demo
