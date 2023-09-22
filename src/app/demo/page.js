'use client'

import React, { useState } from 'react'
import Button from '@components/Button/page'
import Roboflow from '@components/Roboflow/roboflow'
import Container from '@components/container'
import WebcamSkeleton from '@components/Skeleton/webcamSkeleton'

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
	const [toggleButton, setToggleButton] = useState(false)
	const [selected, setSelected] = useState(0)

	return (
		<div className="bg-white w-full h-[100vh] float-left lg:px-[200px] md:px-[80px] sm:px-[20px]">
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
								accept=".txt, .pdf, .png, .jpg, .jpeg, .gif"
							/>
							<Button
								title="Upload"
								style=" bg-green-400 text-white hover:bg-green-500"
								onClick={() => {}}
							/>
						</form>
					</div>
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
								modelName="lsc-inspector"
								modelVersion="1"
							/>
						) : (
							<WebcamSkeleton />
						)}
					</div>
				)}
			</Container>
		</div>
	)
}

export default Demo
