import React from 'react'

import Image from 'next/image'
import Button from '@components/Button/page'
import Team from '../../../public/assets/images/Team.svg'

const AboutUs = () => {
	return (
		<div className="bg-white h-[100vh] float-left text-neutral-900 w-full flex items-center justify-center">
			<div className="w-1/2 pr-[20px] flex items-center flex-col gap-y-[20px]">
				<h1 className="text-2xl lg:text-5xl font-bold self-start">
					<span className="text-green-500">What </span>We Do?
				</h1>

				<span className="text-justify">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since
					the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
					centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				</span>
				<span className="text-justify">
					It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
					publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</span>
				<div className="w-full mt-[50px]">
					<Button
						title="More Info"
						style=" w-fit justify-center text-white bg-gradient-to-r from-green-500 to-blue-300 font-bold w-[30%]"
						onHover="bg-gradient-to-r from-blue-300 to-green-500"
						onClick={() => {
							// router.push('/demo')
						}}
					/>
				</div>
			</div>
			<div className="w-1/2 pl-[20px] flex items-center justify-end">
				<Image
					src={Team}
					alt="LSC logo"
					height="90%"
				/>
			</div>
		</div>
	)
}

export default AboutUs
