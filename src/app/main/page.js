'use client'

import React, { useState } from 'react'
import Container from '@components/container'
import Button from '@components/Button/page'
import FileUpload from '@components/Button/fileUpload'
import Modal from '@components/Modal/page'
import Toggle from '@components/Button/toggle'
import useUserStore from '../../useStore'

const Main = () => {
	const [isModalOpen, setIsModalOpen] = useState(true)
	const { user, isAuthenticated } = useUserStore()

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
		<Container>
			<div className="h-[100vh] float-left text-neutral-900 w-full flex justify-center p-[20px]">
				<div className="w-full flex flex-col gap-x-1 items-left justify-between mb-4 h-48 rounded shadow p-6">
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
	)
}

export default Main
