'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Table from '@components/Table/page'
import Container from '@components/container'
import Button from '@components/Button/page'
import useUserStore from '@useStore'
import useFiles from '@hooks/useFiles'

const header = [
	{
		title: 'Date',
		type: 'text',
		variable: 'date',
	},
	{
		title: 'Name',
		type: 'text',
		variable: 'name',
		style: {
			fontWeight: 'bold',
		},
	},
	{
		title: 'Size',
		type: 'text',
		variable: 'size',
	},
	{
		title: 'Classification',
		type: 'text',
		variable: 'classification',
		style: {
			fontWeight: 'bold',
		},
	},
	{
		title: 'Accuracy',
		type: 'text',
		variable: 'accuracy',
	},
	{
		title: 'Actions',
		type: 'action',
		style: {
			width: 300,
		},
		options: [
			{
				title: 'View',
				action: null,
				icon: '',
			},
			{
				action: null,
				title: 'Delete',
				icon: '',
			},
		],
	},
]

const History = () => {
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const [selected, setSelected] = useState(null)
	const [deleteFlag, setDeleteFlag] = useState(false)
	const { user, isAuthenticated } = useUserStore()
	const { isRetrieving, files } = useFiles(user?.user.access_token)

	useEffect(() => {
		console.log('files: ', files)
	}, [])

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
						/>
					</div>
				</div>
				<Table
					header={header}
					data={files?.data}
					limit={10}
					isLoading={loading}
					onClick={(menu, item) => {
						if (menu && menu.title == 'Delete') {
							setSelected(item)
							setDeleteFlag(true)
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
		</Container>
	)
}

export default History
