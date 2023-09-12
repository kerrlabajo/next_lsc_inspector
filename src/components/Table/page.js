'use client'
import React, { useState } from 'react'
import Skeleton from '@/components/loading/Table'
import { SvgIcon } from '@mui/material'
import { ChevronLeft, ChevronRight, ToggleOffOutlined, ToggleOnOutlined } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Table = (props) => {
	const router = useRouter()
	const [pagination, setPagination] = useState(0)

	const renderToggle = (item, value, hItem, index) => {
		return (
			<td
				className="cursor-hover px-6 py-4"
				key={index}
			>
				<SvgIcon icon={value ? ToggleOnOutlined : ToggleOffOutlined} />
			</td>
		)
	}

	const renderText = (header, value, index) => {
		let style = header.style ? header.style : null
		return (
			<td
				style={style}
				className="px-6 py-4"
				key={index}
			>
				{value}
			</td>
		)
	}

	const renderRedirect = (header, item, index) => {
		let style = header.style ? header.style : null
		return (
			<td
				style={{
					...style,
				}}
				className="px-6 py-4 hover:underline cursor-pointer"
				onClick={() => {
					// props.history.push(header.route + item[header.route_params])
				}}
				key={index}
			>
				{item[header.variable]}
			</td>
		)
	}

	const renderDocument = (header, item, index) => {
		let style = header.style ? header.style : null
		return (
			<td
				style={{
					...style,
				}}
				className="px-6 py-4 hover:underline cursor-pointer"
				onClick={() => {
					props.onViewModal(item)
				}}
				key={index}
			>
				{item[header.variable]}
			</td>
		)
	}

	const renderModal = (header, item, index) => {
		let style = header.style ? header.style : null
		return (
			<td
				style={{
					...style,
				}}
				className="px-6 py-4 hover:underline cursor-pointer"
				onClick={() => {
					props.onViewModal(item)
				}}
				key={index}
			>
				{item[header.variable]}
			</td>
		)
	}

	const renderActions = (header, item, inde) => {
		let style = header.style ? header.style : null
		return (
			<td
				style={{
					...style,
				}}
				key={inde}
			>
				{header.options &&
					header.options.map((oItem, index) => {
						let buttonStyle = oItem.title === 'Edit' ? 'custom-edit-button' : 'pr-[15px]'

						return (
							<span
								key={index}
								className={`${buttonStyle} px-6 py-4 cursor-pointer float-left`}
								onClick={() => {
									if (oItem.action === 'redirect') {
										router.push(oItem.route + item[oItem.route_params])
									} else {
										props.onClick(oItem, item)
									}
								}}
							>
								{oItem.title === 'Edit' && '✎ '}
								{oItem.title}
							</span>
						)
					})}
			</td>
		)
	}

	const renderImage = (header, item, index) => {
		let style = header.style ? header.style : null
		return (
			<td
				key={index}
				className="cursor-pointer"
				onClick={() => {
					props.onSelectedImage(item)
				}}
			>
				{item[header.variable] ? (
					<Image
						src={item[header.variable]}
						style={{
							...style,
							marginLeft: 15,
						}}
						alt="logo"
					/>
				) : (
					<SvgIcon
						component={header.icon}
						style={{
							...style,
							marginLeft: 15,
						}}
					/>
				)}
			</td>
		)
	}

	const renderIndex = (item, index, hItem, hIndex) => {
		switch (hItem.type.toLowerCase()) {
			case 'text':
				return renderText(hItem, item[hItem.variable], hItem.title)
			case 'ratings':
				return renderRatings(item[hItem.variable], item[hItem.variable])
			case 'redirect':
				return renderRedirect(hItem, item, item[hItem.variable])
			case 'action':
				return renderActions(hItem, item, hItem.title ? hItem.title : hItem.action)
			case 'document':
				return renderDocument(hItem, item, index)
			case 'modal':
				return renderModal(hItem, item, index)
			case 'image':
				return renderImage(hItem, item, index)
			default:
				return
		}
	}

	const { header, data, isLoading, limit, page } = props
	const dataArray = Array.isArray(data) ? data : [data]
	return (
		<div className="w-full float-left">
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr style={{}}>
						{header &&
							header.map((item, index) => (
								<th
									scope="col"
									className="px-6 py-5 text-green-500 dark:text-green-400"
									key={index}
								>
									{item.title}
								</th>
							))}
					</tr>
				</thead>
				<tbody>
					{!isLoading &&
						data &&
						dataArray.map((item, index) => (
							<tr
								key={index}
								className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-gray-700 dark:text-white hover:bg-gray-100 hover:dark:bg-gray-700 cursor-pointer"
							>
								{header && header.map((hItem, hIndex) => renderIndex(item, index, hItem, hIndex))}
							</tr>
						))}
					{isLoading &&
						[1, 2, 3, 4, 5].map((item, index) => (
							<tr
								key={index}
								className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
							>
								<td
									colSpan={header.length}
									className="pt-4"
								>
									<Skeleton
										height={50}
										style={{}}
									/>
								</td>
							</tr>
						))}
					{!isLoading && (data === null || (data && data.length === 0)) && (
						<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td
								colSpan={header.length}
								style={{
									textAlign: 'center',
								}}
								className="px-6 py-5 font-bold"
							>
								No results found
							</td>
						</tr>
					)}
				</tbody>
			</table>

			{props.pagination && (
				<div className="float-right mt-[20px]">
					{pagination > 0 && (
						<span
							className="cursor-pointer text-green-400 font-bold"
							onClick={() => {
								props.onPagination(-1)
								setPagination((prevPagination) => prevPagination - 1)
							}}
						>
							<SvgIcon component={ChevronLeft} />
							Prev
						</span>
					)}

					{limit === data?.length && (
						<span
							className="ml-[20px] cursor-pointer text-green-400 font-bold"
							onClick={() => {
								props.onPagination(1)
								setPagination((prevPagination) => prevPagination + 1)
							}}
						>
							Next
							<SvgIcon component={ChevronRight} />
						</span>
					)}
				</div>
			)}
		</div>
	)
}

export default Table
