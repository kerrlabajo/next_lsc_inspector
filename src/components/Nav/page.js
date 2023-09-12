'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/assets/images/logo.svg'
import { SvgIcon } from '@mui/material'
import { DarkMode, Face6, MenuOutlined, Notifications, Settings } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Button from '@components/Button/page'

const dropdownMenu = [
	{
		title: 'Profile',
		icon: Settings,
		route: '/profile',
	},
]

function NavBar(props) {
	const [toggle, setToggle] = useState(false)
	const router = useRouter()
	// const [colorMode, setColorMode] = useColorMode()
	const { data: session } = useSession()
	const [menu, setMenu] = useState([])
	const [dropdown, setDropdown] = useState(false)
	const [notifFlag, setNotifFlag] = useState(false)

	const isInLogin = router.pathname === '/login'

	useEffect(() => {
		console.log('name: ', router.pathname)
	})

	if (isInLogin) {
		return null
	}

	return (
		<div className="z-40 float-left w-full h-[80px] shadow-sm fixed bg-white border-b-[1px] text-neutral-900 px-[200px] ">
			<div className="lg:block xl:block 2xl:block sm:hidden md:hidden xs:hidden">
				<div className={'w-3/4 h-[80px] float-left content-center items-center flex href-link'}>
					<Image
						src={Logo}
						alt="LSC logo"
						width={200}
					/>
					<Link
						href="/"
						className="ml-[40px] mr-[20px] hover:underline"
					>
						Features
					</Link>
					<Link
						href="/"
						className="mx-[20px] hover:underline"
					>
						How to Use
					</Link>
					<Link
						href="/"
						className="mx-[20px] hover:underline"
					>
						About Us
					</Link>
				</div>
				{/* <div></div> */}
				<div className={'h-[80px] w-1/4 float-left flex flex-row content-center items-center justify-between '}>
					<div></div>
					<div className="h-[80px] flex content-center items-center justify-between">
						<Button
							title="LOG IN"
							style=" hover:underline text-[14px] font-bold"
							onClick={() => {
								router.push('/login')
							}}
						/>
						<Button
							title="Try it now!"
							style=" bg-green-400 text-white hover:bg-green-500 text-[14px] font-bold"
							onClick={() => {}}
						/>
						{/* {renderProfile()} */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default NavBar
