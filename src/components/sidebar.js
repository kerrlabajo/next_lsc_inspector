'use client'

import { SvgIcon } from '@mui/material'
import { Tooltip } from '@material-tailwind/react'
import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { KeyboardArrowDown, KeyboardArrowUp, Dashboard } from '@mui/icons-material'
import { signOut } from 'next-auth/react'

const Sidebar = (props) => {
	const pathname = usePathname()
	const router = useRouter()
	const [subMenuOpen, setSubmenuOpen] = useState(false)
	const [subIndex, setSubIndex] = useState('')

	return (
		<div className={`w-full float-left min-h-[100vh] mt-[80px] relative bg-[#48BF91] border-r-[1px] border-r-gray-200`}>
			<ul className="pt-2">
				{props.menu &&
					props.menu.map((item, index) => (
						<div
							key={index}
							onClick={() => {
								router.push(item.route)
							}}
							className="bg-red-50"
						>
							<li
								className={
									'w-full float-left h-[60px] flex items-center content-center px-[20px] text-white hover:font-bold cursor-pointer ' +
									(pathname.match(item.route) ? 'bg-blue-500 font-bold ' : '')
								}
							>
								<SvgIcon
									component={item.icon}
									className="text-white"
								/>
								<span className="text-sm ml-[10px] w-40">{item.title}</span>
								{item.subMenu && item.subMenuItems.length > 0 && (
									<button
										onClick={() => {
											setSubmenuOpen(index != subIndex ? true : !subMenuOpen)
											setSubIndex(index)
										}}
										className="w-full flex flex-row justify-end"
									>
										{subMenuOpen && subIndex == index ? (
											<SvgIcon
												component={KeyboardArrowUp}
												className={'text-gray-500'}
											/>
										) : (
											<SvgIcon
												component={KeyboardArrowDown}
												className={'text-gray-500'}
											/>
										)}
									</button>
								)}
							</li>
						</div>
					))}
			</ul>
		</div>
	)
}

export default Sidebar
