'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@components/Button/page'
import Modal from '@components/Modal/page'
import useUserStore from '@useStore'
import useFile from '@hooks/useFile'
import Skeleton from '@components/Skeleton/Skeleton'

const Page = ({ params }) => {
	const router = useRouter()
	const { user, isAuthenticated } = useUserStore()
	const { isRetrieving, file } = useFile(user?.user.access_token, params.file_id)

	const renderContent = () => {
		return (
			<>
				{file ? (
					<div className="flex flex-col items-center gap-[20px]">
						<Image
							src={file?.url}
							alt="result"
							width={500}
							height={100}
							style={{ height: 'auto', maxHeight: '350px', maxWidth: '600px' }}
						/>
						<div className="w-full flex flex-col gap-[10px] overflow-hidden">
							<div>
								<b>Classification: </b>

								<span className={file?.classification == 'Good' ? `text-green-400 font-bold` : `text-red-500 font-bold`}>{file.classification}</span>
							</div>
							<div>
								<b>Accuracy: </b>
								<span>{Math.round(file?.accuracy * 100)} %</span>
							</div>
							<div>
								<b>Error Rate: </b>
								<span>{Math.round(file?.error_rate * 100)} %</span>
							</div>
							<div>
								<b>Size: </b>
								<span>{file?.size}</span>
							</div>
							<div>
								<b>Dimension: </b>
								<span>{file?.dimension}</span>
							</div>
							<div>
								<b>Date Created: </b>
								<span>{file?.created_at}</span>
							</div>
							<div className="flex gap-2">
								<b>Url: </b>
								<Link
									href={file.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-400 hover:underline"
								>
									{file.url}
								</Link>
							</div>
						</div>
					</div>
				) : (
					<Skeleton />
				)}
			</>
		)
	}

	return (
		<Modal
			title={file?.name}
			onClose={() => {
				router.push('/history')
			}}
			content={renderContent}
			// footer={() => {
			// 	return (
			// 		<div className="w-full flex justify-end">
			// 			<Button
			// 				style={' bg-green-400 text-white ml-[20px]'}
			// 				title="Continue"
			// 				onClick={() => {
			// 					router.push('/history')
			// 				}}
			// 			/>
			// 		</div>
			// 	)
			// }}
		/>
	)
}

export default Page
