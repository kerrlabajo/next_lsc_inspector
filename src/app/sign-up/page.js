'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import useSignup from '@hooks/useRegister'

import Button from '@components/Button/page'
import TextInput from '@components/textInput'

import Google from '../../../public/assets/images/google.png'
import { useRouter } from 'next/router'

const Signup = () => {
	const [username, setUsername] = useState(null)
	const [errorUsername, setErrorUsername] = useState(null)
	const [email, setEmail] = useState(null)
	const [errorEmail, setErrorEmail] = useState(null)
	const [password, setPassword] = useState(null)
	const [errorPassword, setErrorPassword] = useState(null)
	const [confirmPass, setConfirmPass] = useState(null)
	const [errorConfirmPass, setErrorConfirmPass] = useState(null)
	const { isSigningUp, signupUser } = useSignup()

	const onSubmit = async () => {
		await signupUser({
			username: username,
			email: email,
			password: password,
		})
	}

	return (
		<div className="bg-gradient-to-r from-green-500 to-blue-300 w-full h-[100vh] float-left px-[200px]">
			<div className=" h-[100vh] float-left text-neutral-900 w-full flex items-center justify-center">
				<div className="w-full bg-white rounded-xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-neutral-700">Create an account</h1>
						<form
							className="space-y-4 md:space-y-6"
							action="#"
						>
							<div>
								<label
									for="username"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-neutral-700"
								>
									Your username
								</label>
								<TextInput
									type="text"
									placeholder="Username"
									value={username}
									name="username"
									id="email"
									onChange={(username, errorUsername) => {
										setUsername(username)
										setErrorUsername(errorUsername)
									}}
									validation={{
										type: 'text_without_space',
										size: 2,
										column: 'Username',
										error: errorUsername,
									}}
								/>
								{/* <input
									type="username"
									name="username"
									id="email"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
									placeholder="name@company.com"
									required=""
								/> */}
							</div>
							<div>
								<label
									for="email"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-neutral-700"
								>
									Your email
								</label>
								<TextInput
									type="email"
									placeholder="Email Address"
									value={email}
									onChange={(email, errorEmail) => {
										setEmail(email)
										setErrorEmail(errorEmail)
									}}
									validation={{
										type: 'text_without_space',
										size: 2,
										column: 'Email',
										error: errorEmail,
									}}
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-neutral-700"
								>
									Password
								</label>
								<TextInput
									type="password"
									placeholder="Password"
									value={password}
									onChange={(password, errorPassword) => {
										setPassword(password)
										setErrorPassword(errorPassword)
									}}
									validation={{
										type: 'text_without_space',
										column: 'Password',
										size: 6,
										error: errorPassword,
									}}
								/>
							</div>
							<div>
								<label
									htmlFor="confirm-password"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-neutral-700"
								>
									Confirm password
								</label>
								<TextInput
									type="password"
									placeholder="Confirm Password"
									value={confirmPass}
									onChange={(confirmPass, errorConfirmPass) => {
										setConfirmPass(confirmPass)
										setErrorConfirmPass(errorConfirmPass)
									}}
									validation={{
										type: 'text_without_space',
										column: 'Confirm Password',
										size: 6,
										error: errorConfirmPass,
									}}
								/>
							</div>
							<Button
								title="Register"
								style=" w-full bg-green-400 text-white hover:bg-green-500 h-[40px]"
								onClick={() => {
									onSubmit()
								}}
							/>
							<Button
								title="Login with Google"
								style=" w-full bg-green-400 border border-gray-300 hover:bg-gray-50 h-[39px] bg-white text-gray-500"
								onClick={() => {}}
							/>
							{/* <Image
									src={Google}
									alt="Google Logo"
									width={20}
									className=""
								/> */}
							<p className="text-sm font-light text-gray-500 dark:text-gray-400 pt-[20px]">
								Already have an account?{' '}
								<a
									href="login"
									className="font-medium text-primary-600 hover:underline dark:text-primary-500"
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
