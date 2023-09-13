import Link from 'next/link'
import Button from '@components/Button/page'
import Image from 'next/image'
import Google from '../../../public/assets/images/google.png'

const Login = () => {
	return (
		<div className="bg-gradient-to-r from-green-500 to-blue-300 w-full h-[100vh] float-left px-[200px]">
			<div className=" h-[100vh] float-left text-neutral-900 w-full flex items-center justify-center">
				<div className="w-full bg-white rounded-xl shadow md:mt-0 sm:max-w-md xl:p-0 ">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Login</h1>
						<form
							className="space-y-4 md:space-y-6"
							action="#"
						>
							<div>
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium text-gray-900"
								>
									Your email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
									placeholder="name@company.com"
									required=""
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900"
								>
									Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
									required=""
								/>
								<div className="flex items-center h-5 justify-end mt-[10px]">
									<Link
										href="forgot-password"
										className="text-sm font-light text-gray-500 hover:underline text-[12px]"
									>
										Forgot password?{' '}
									</Link>
								</div>
							</div>
							<button
								type="submit"
								className="w-full text-white bg-green-400 hover:bg-green-500 focus:ring-1 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-centerd"
							>
								Login
							</button>
							<button
								type="submit"
								className="w-full flex justify-center gap-2  text-neutral-700 border-[1px] border-gray-300 bg-white hover:bg-neutral-100 focus:ring-1 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-centerd"
							>
								<Image
									src={Google}
									alt="Google Logo"
									width={20}
									className=""
								/>
								Login with Google
							</button>
							<p className="text-sm font-light text-gray-500">
								Dont have an account?{' '}
								<a
									href="sign-up"
									className="font-medium hover:underline"
								>
									Sign up here
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
