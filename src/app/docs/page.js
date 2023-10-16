'use client'

import React, { useState } from 'react'
import Container from '@components/container'

export default function Docs() {
	const [active, setActive] = useState('Getting Started')
	return (
		<Container style=" text-neutral-900 mt-[100px] flex justify-center">
			<div className="w-[80%] flex gap-x-1 items-left justify-between mb-14 p-4">
				<div className="w-[20%] h-full flex flex-col gap-4 text-sm sticky">
					<div className="flex flex-col gap-2">
						<h1 className="font-bold">Introduction</h1>
						<div className="">
							<span
								className={`border-l-[2px] ${
									active == 'Getting Started' ? `font-semibold border-primary text-primary` : `border-gray-900 text-gray-700`
								} hover:text-primary cursor-pointer pl-3 py-1`}
							>
								Getting Started
							</span>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="font-bold">Setup Roboflow</h1>
						<div className="border-l border-gray-700 flex flex-col">
							<span
								className={`border-l-[1px] ${
									active == 'Signin' ? `font-semibold border-primary text-primary` : `border-gray-700 text-gray-700`
								} hover:text-primary cursor-pointer pl-3 py-1`}
							>
								Create Account
							</span>
							<span
								className={`border-l-[1px] ${
									active == 'Signin' ? `font-semibold border-primary text-primary` : `border-gray-700 text-gray-700`
								} hover:text-primary cursor-pointer pl-3 py-1`}
							>
								Signin to Account
							</span>
							<span
								className={`border-l-[1px] ${
									active == 'Signin' ? `font-semibold border-primary text-primary` : `border-gray-700 text-gray-700`
								} hover:text-primary cursor-pointer pl-3 py-1`}
							>
								Create Project
							</span>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="font-bold">Annotation</h1>
						<div className="border-l border-gray-700 flex flex-col">
							<span
								className={`border-l-[1px] ${
									active == 'Signin' ? `font-semibold border-primary text-primary` : `border-gray-700 text-gray-700`
								} hover:text-primary cursor-pointer pl-3 py-1`}
							>
								Upload Dataset
							</span>
							<span
								className={`border-l-[1px] ${
									active == 'Signin' ? `font-semibold border-primary text-primary` : `border-gray-700 text-gray-700`
								} hover:text-primary cursor-pointer pl-3 py-1`}
							>
								Annotate Images
							</span>
							<span
								className={`border-l-[1px] ${
									active == 'Signin' ? `font-semibold border-primary text-primary` : `border-gray-700 text-gray-700`
								} hover:text-primary cursor-pointer pl-3 py-1`}
							>
								Generate
							</span>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="font-bold">Deploy</h1>
						<div className=" flex flex-col">
							<span
								className={`border-l-[1px] ${
									active == 'Signin' ? `font-semibold border-primary text-primary` : `border-gray-700 text-gray-700`
								} hover:text-primary cursor-pointer pl-3 py-1`}
							>
								Open Google Collab
							</span>
							<span
								className={`border-l-[1px] ${
									active == 'Signin' ? `font-semibold border-primary text-primary` : `border-gray-700 text-gray-700`
								} hover:text-primary cursor-pointer pl-3 py-1`}
							>
								CLI
							</span>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="font-bold">Training</h1>
						<div className=" flex flex-col">
							<span
								className={`border-l-[1px] ${
									active == 'Signin' ? `font-semibold border-primary text-primary` : `border-gray-700 text-gray-700`
								} hover:text-primary cursor-pointer pl-3 py-1`}
							>
								Open Google Collab
							</span>
							<span
								className={`border-l-[1px] ${
									active == 'Signin' ? `font-semibold border-primary text-primary` : `border-gray-700 text-gray-700`
								} hover:text-primary cursor-pointer pl-3 py-1`}
							>
								CLI
							</span>
						</div>
					</div>
				</div>
				<div className="w-[80%]  h-full bg-gray-200 flex"></div>
			</div>
		</Container>
	)
}
