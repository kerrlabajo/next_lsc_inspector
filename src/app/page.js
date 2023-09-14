'use client'
import Banner from '@components/Landing/banner'
import AboutUs from '@components/Landing/aboutUs'

export default function Home() {
	return (
		<main className="flex bg-white min-h-screen flex-col items-center justify-between">
			<div className="w-full h-[200vh] float-left px-[200px]">
				<Banner />
				<AboutUs />
			</div>
		</main>
	)
}
