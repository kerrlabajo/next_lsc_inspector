import Image from 'next/image'
import Google from '../../../public/assets/images/google.png'

const Signup = () => {
	return (
		<div className="bg-gradient-to-r from-green-500 to-blue-300 w-full h-[100vh] float-left px-[200px]">
			<div className=" h-[100vh] float-left text-neutral-900 w-full flex items-center justify-center">
				<div class="w-full bg-white rounded-xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
					<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-neutral-700">Create and account</h1>
						<form
							class="space-y-4 md:space-y-6"
							action="#"
						>
							<div>
								<label
									for="email"
									class="block mb-2 text-sm font-medium text-gray-900 dark:text-neutral-700"
								>
									Your email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
									placeholder="name@company.com"
									required=""
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									class="block mb-2 text-sm font-medium text-gray-900 dark:text-neutral-700"
								>
									Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
									required=""
								/>
							</div>
							<div>
								<label
									htmlFor="confirm-password"
									class="block mb-2 text-sm font-medium text-gray-900 dark:text-neutral-700"
								>
									Confirm password
								</label>
								<input
									type="confirm-password"
									name="confirm-password"
									id="confirm-password"
									placeholder="••••••••"
									class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
									required=""
								/>
							</div>
							<div class="flex items-start">
								<div class="flex items-center h-5">
									<input
										id="terms"
										aria-describedby="terms"
										type="checkbox"
										class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
										required=""
									/>
								</div>
								<div class="ml-3 text-sm">
									<label
										htmlFor="terms"
										class="font-light text-gray-500"
									>
										I accept the{' '}
										<a
											class="font-medium text-primary-600 hover:underline dark:text-primary-500"
											href="/terms-and-condition"
										>
											Terms and Conditions
										</a>
									</label>
								</div>
							</div>
							<button
								type="submit"
								class="w-full text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-centerd"
							>
								Create an account
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
							<p class="text-sm font-light text-gray-500 dark:text-gray-400">
								Already have an account?{' '}
								<a
									href="login"
									class="font-medium text-primary-600 hover:underline dark:text-primary-500"
								>
									Login here
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Signup
