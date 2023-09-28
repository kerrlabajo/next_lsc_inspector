import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/assets/images/white-logo.svg'

const Footer = () => {
	return (
		<footer className={`h-[300px] bg-green-500 bg-cover flex items-end`}>
			<div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
				<div className="md:flex md:justify-between">
					<div className="mb-6 md:mb-0">
						<a
							href="https://flowbite.com/"
							className="flex items-center justify-start"
						>
							<Image
								src={Logo}
								className="mr-3 text-white"
								alt="FlowBite Logo"
								height={30}
							/>
						</a>
					</div>
					<div className="grid grid-cols-2 gap-10 sm:gap-20 sm:grid-cols-2">
						<div>
							<h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">About Us</h2>
							<ul className="text-white dark:text-white font-medium">
								<li className="mb-4">
									<a
										href="#"
										className="hover:underline"
									>
										Who are we?
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:underline"
									>
										Team
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow us</h2>
							<ul className="text-white font-medium">
								<li className="mb-4">
									<a
										href="https://facebook.com"
										className="hover:underline "
									>
										Facebook
									</a>
								</li>
								<li className="mb-4">
									<a
										href="https://github.com/Ra-Jay/next_lsc_inspector"
										className="hover:underline "
									>
										Github
									</a>
								</li>
								<li>
									<a
										href="https://linkedin.com"
										className="hover:underline"
									>
										LinkedIn
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className="my-6 border-white sm:mx-auto lg:my-8" />
				<div className="sm:flex sm:items-center sm:justify-center">
					<span className="text-sm text-white sm:text-center dark:text-white">
						© 2023{' '}
						<a
							href="#"
							className="hover:underline"
						>
							LSC-Inspector
						</a>
						. All Rights Reserved.
					</span>
				</div>
			</div>
		</footer>
	)
}

export default Footer
