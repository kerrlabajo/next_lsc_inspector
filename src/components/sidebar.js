'use client'

import { SvgIcon } from '@mui/material'
import { Tooltip } from '@material-tailwind/react'
import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { HandshakeRounded, Logout, SecurityOutlined, Settings, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'

const Sidebar = (props) => {
	const pathname = usePathname()
	const router = useRouter()
	const [subMenuOpen, setSubmenuOpen] = useState(false)
	const [subIndex, setSubIndex] = useState('')
	const { data: session } = useSession()

	return (
		<div className={`w-[20%] float-left min-h-[100vh] mt-[80px] relative bg-[#48BF91] border-r-[1px] border-r-gray-200`}>
			<ul className="pt-2">
				{props.menu &&
					props.menu.map((item, index) => (
						<div
							key={index}
							onClick={() => {
								router.push(item.route)
							}}
						>
							<li
								className={
									'w-full float-left h-[60px] flex items-center content-center px-[20px] hover:font-bold hover:text-blue-500 cursor-pointer ' +
									(pathname.match(item.route) ? 'font-bold text-green-500 dark:text-green-400' : '')
								}
							>
								<SvgIcon
									component={item.icon}
									className={pathname.match(item.route) ? 'dark:text-green-500 text-green-400 font-bold' : 'text-white'}
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
							{subMenuOpen && subIndex == index && item.subMenu && (
								<ul className="w-full">
									{item.subMenuItems.length > 0 &&
										item.subMenuItems.map((itm, ndx) => (
											<div
												key={ndx}
												onClick={() => {
													router.push('/' + itm.route)
												}}
											>
												<li className="w-full text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 rounded-md">{itm.title}</li>
											</div>
										))}
								</ul>
							)}
						</div>
					))}
			</ul>
		</div>
	)
}

export default Sidebar
