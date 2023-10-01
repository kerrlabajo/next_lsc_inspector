import Image from 'next/image'
import React from 'react'
import Feature1 from '../../../public/assets/images/feature1.svg'
import Feature2 from '../../../public/assets/images/Feature2.svg'
import Feature3 from '../../../public/assets/images/Feature3.svg'

const Features = () => {
	return (
		<div className="bg-white h-[100vh] float-left text-neutral-900 w-full flex items-center justify-center">
			<div className="w-full flex items-center flex-col gap-y-[80px]">
				<div className="flex flex-col items-center justify-center">
					<h1 className="text-5xl font-bold text-green-500">Features</h1>
					<span className="w-[90%] lg:w-[45%] text-center mt-[10px]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod mauris at dui rhoncus, vel accumsan mi vestibulum. Praesent non
						placerat sapien, sed maximus risus.
					</span>
				</div>
				<div className="flex flex-col lg:flex-row">
					<div className="flex items-center justify-start lg:justify-center flex-col lg:border-r-[1px] border-neutral-700 gap-y-[15px] p-[40px]">
						<div className="flex items-center gap-[20px]">
							<Image
								src={Feature1}
								alt="feature1"
								width={50}
							/>
							<h1 className="text-[20px] font-bold">Feature 1</h1>
						</div>
						<span className="text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod mauris at dui rhoncus, vel accumsan mi vestibulum. Praesent non
							placerat sapien, sed maximus risus.
						</span>
					</div>
					<div className="flex items-center justify-center flex-col lg:border-r-[1px] border-neutral-700 gap-y-[15px] p-[40px]">
						<div className="flex items-center gap-[20px]">
							<Image
								src={Feature2}
								alt="feature2"
								width={50}
							/>
							<h1 className="text-[20px] font-bold">Feature 2</h1>
						</div>
						<span className="text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod mauris at dui rhoncus, vel accumsan mi vestibulum. Praesent non
							placerat sapien, sed maximus risus.
						</span>
					</div>
					<div className="flex items-center justify-center flex-col gap-y-[15px] p-[40px]">
						<div className="flex items-center gap-[20px]">
							<Image
								src={Feature3}
								alt="feature3"
								width={50}
							/>
							<h1 className="text-[20px] font-bold">Feature 3</h1>
						</div>
						<span className="text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod mauris at dui rhoncus, vel accumsan mi vestibulum. Praesent non
							placerat sapien, sed maximus risus.
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Features
