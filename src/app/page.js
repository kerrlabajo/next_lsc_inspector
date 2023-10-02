'use client'
import Banner from '@components/Landing/banner'
import AboutUs from '@components/Landing/aboutUs'
import Features from '@components/Landing/features'

export default function Home() {
	return (
		<main className="flex bg-white min-h-screen flex-col items-center justify-between">
			<div className="w-full h-[300vh] float-left px-[30px] lg:px-[200px]">
				<Banner />
				<Features />
				<AboutUs />
			</div>
		</main>
	)
}
