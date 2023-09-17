'use client'

import React, { useState } from 'react'
import Features from '@components/Landing/features'
import Table from '@components/Table/page'
import Container from '@components/container'
import Button from '@components/Button/page'

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
	},
	{
		title: 'Accuracy',
		type: 'text',
		variable: 'accuracy',
		style: {
			fontWeight: 'bold',
		},
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
				action: 'redirect',
				route: '/file/view?id=',
				route_params: 'id',
			},
			{
				action: null,
				title: 'Delete',
				route: '/file/remove?id=',
			},
		],
	},
]

let tableData = [
	{
		date: '03-13-2023',
		name: 'File 1',
		size: '121 kb',
		classification: 'good',
		accuracy: '97%',
	},
	{
		date: '03-13-2023',
		name: 'File 2',
		size: '51 kb',
		classification: 'good',
		accuracy: '91%',
	},
	{
		date: '03-13-2023',
		name: 'File 3',
		size: '211 kb',
		classification: 'bad',
		accuracy: '87%',
	},
]

const History = () => {
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState([])
	const [selected, setSelected] = useState(null)
	const [deleteFlag, setDeleteFlag] = useState(false)

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
					data={tableData}
					limit={10}
					isLoading={loading}
					onClick={(menu, item) => {
						if (menu && menu.title == 'Delete') {
							setSelected(item)
							setDeleteFlag(true)
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
