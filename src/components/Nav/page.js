'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/assets/images/logo.svg'
import WhiteLogo from '../../../public/assets/images/white-logo.svg'
import { SvgIcon } from '@mui/material'
import { Person, Settings } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import Button from '@components/Button/page'
import useUserStore from './../../useStore'

const dropdownMenu = [
	{
		title: 'Profile',
		icon: Settings,
		route: '/profile',
	},
]

function NavBar(props) {
	const router = useRouter()
	const [dropdown, setDropdown] = useState(false)
	const { user, logout } = useUserStore()

	const isInLogin = router.pathname === '/login'

	useEffect(() => {})

	if (isInLogin) {
		return null
	}

	const renderDropdown = () => {
		return (
			<div
				className={
					'z-10 absolute bg-[#48BF91] divide-y divide-gray-100 rounded-lg shadow w-[300px] right-0 top-[60px] border border-gray-200 ' +
					(dropdown == false ? 'hidden' : '')
				}
			>
				<div className="px-4 py-4 text-sm text-white ">
					<div className="text-lg font-semibold">Hi {user?.user.username}!</div>
					<div className="font-medium truncate">{user?.user.email}</div>
				</div>
				<ul className="text-sm text-white ">
					{dropdownMenu &&
						dropdownMenu.map((item, index) => (
							<li
								key={index}
								onClick={() => {
									router.push(item.route)
								}}
							>
								<span className="block px-4 py-4 cursor-pointer hover:bg-blue-500  ">{item.title}</span>
							</li>
						))}
				</ul>
				<div className="mb-[20px]">
					<span
						onClick={() => {
							logout()
							router.push('/')
						}}
						className="block px-4 cursor-pointer py-4 text-sm text-white hover:bg-blue-500 "
					>
						Sign out
					</span>
				</div>
			</div>
		)
	}

	const renderAuthorizedNav = () => {
		return (
			<div className="z-40 float-left w-full h-[80px] shadow fixed bg-[#48BF91] text-neutral-900 pl-[25px] pr-[50px]">
				<div className="lg:block xl:block 2xl:block sm:hidden md:hidden xs:hidden">
					<div className={'w-3/4 h-[80px] float-left content-center items-center flex href-link'}>
						<Image
							src={WhiteLogo}
							alt="LSC logo"
							width={200}
							onClick={() => {
								router.push('/')
							}}
							className="cursor-pointer"
						/>
					</div>
					<div className={'h-[80px] w-1/4 float-left flex flex-row content-center items-center justify-end '}>
						<div
							onClick={() => {
								setDropdown(!dropdown)
							}}
							className="h-[80px] flex content-center items-center"
						>
							<SvgIcon
								component={Person}
								className="text-white "
								style={{
									fontSize: 30,
								}}
							/>
						</div>
					</div>
					{renderDropdown()}
				</div>
			</div>
		)
	}

	const rendeUnauthorizedNav = () => {
		return (
			<div className="z-40 float-left w-full h-[80px] shadow-sm fixed bg-white border-b-[1px] text-neutral-900 px-[200px] ">
				<div className="lg:block xl:block 2xl:block sm:hidden md:hidden xs:hidden">
					<div className={'w-3/4 h-[80px] float-left content-center items-center flex href-link'}>
						<Image
							src={Logo}
							alt="LSC logo"
							width={200}
							onClick={() => {
								router.push('/')
							}}
							className="cursor-pointer"
						/>
						<Link
							href="/features"
							className="ml-[40px] mr-[20px] hover:underline"
						>
							Features
						</Link>
						<Link
							href="/how-to-use"
							className="mx-[20px] hover:underline"
						>
							How to Use
						</Link>
						<Link
							href="/about-us"
							className="mx-[20px] hover:underline"
						>
							About Us
						</Link>
					</div>
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
								onClick={() => {
									router.push('/demo')
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}

	return <div>{user ? renderAuthorizedNav() : rendeUnauthorizedNav()}</div>
}

export default NavBar
