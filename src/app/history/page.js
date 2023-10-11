'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

import Table from '@components/Table/page'
import Container from '@components/container'
import Button from '@components/Button/page'
import Modal from '@components/Modal/page'

import useUserStore from '@useStore'
import useFiles from '@hooks/useFiles'
import useDeleteFile from '@hooks/useDeleteFile'
import String from '@utils/string'

const History = () => {
	const router = useRouter()
	const { user } = useUserStore()
	const { isRetrieving, files, fetchFiles } = useFiles(user?.user.access_token)
	const { isDeleting, deleteFile } = useDeleteFile()
	const [selected, setSelected] = useState(null)
	const [error, setError] = useState(null)
	const [reload, setReload] = useState(false)
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

	useEffect(() => {
		fetchFiles()
		setReload(false)
	}, [reload])

	const deleteItemCallbacks = {
		success: () =>
			toast.success('Successfully deleted!', {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
			}),
		notFound: () =>
			toast.error('Invalid fields!', {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			}),
		internalError: () =>
			toast.error('Internal Server ERROR', {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			}),
	}

	const deleteItem = async () => {
		if (selected) {
			await deleteFile({ token: user?.user.access_token, id: selected.id, callback: deleteItemCallbacks })
		} else {
			await deleteFile({ token: user?.user.access_token, callback: deleteItemCallbacks })
		}
		setReload(true)
		setSelected(null)
	}

	const renderDeleteModal = () => {
		return <div className="flex flex-col items-center gap-[20px]">Are you sure you want to delete this item?</div>
	}

	return (
		<Container>
			<div className="w-full flex flex-col gap-x-1 items-left justify-between mb-4 p-6">
				<div className="font-bold border-b-[1px] border-gray-300 pb-[20px] mb-[20px]">
					<h1 className=" text-[25px]">IMAGE FILES</h1>
					<div className="flex items-center justify-between text-gray-400">
						<p>All Images History</p>
						<Button
							title="Clear History"
							style=" bg-blue-400 text-white w-[20%] h-[35px]"
							isLoading={isDeleting}
							onClick={() => {
								setIsDeleteModalOpen(true)
							}}
						/>
					</div>
				</div>
				<Table
					header={String.tableHeader}
					data={files?.data}
					limit={10}
					isLoading={isRetrieving}
					onClick={(menu, item) => {
						if (menu && menu.title == 'Delete') {
							setSelected(item)
							setIsDeleteModalOpen(true)
						} else if (menu && menu.title == 'View') {
							router.push(`/history/${item.id}`)
						}
					}}
					pagination={true}
					onPagination={(value) => {
						// if (value > 0) setOffset((prevOffset) => prevOffset + value)
						// else {
						// 	if (offset > 0) setOffset((prevOffset) => prevOffset + value)
						// }
					}}
				/>
			</div>
			{isDeleteModalOpen && (
				<Modal
					title={'Confirm delete'}
					content={renderDeleteModal}
					onClose={() => {
						setIsDeleteModalOpen(!isDeleteModalOpen)
					}}
					footer={() => {
						return (
							<div className="w-full flex justify-end">
								<Button
									style={' bg-red-400 text-white'}
									title="Cancel"
									onClick={() => {
										setIsDeleteModalOpen(!isDeleteModalOpen)
									}}
								/>
								<Button
									style={' bg-green-400 text-white ml-[10px]'}
									title="Confirm"
									onClick={() => {
										deleteItem()
										setIsDeleteModalOpen(!isDeleteModalOpen)
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

export default History
