'use client'

import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import useLogin from '@hooks/useLogin'
import Button from '@components/Button/page'
import TextInput from '@components/textInput'
import Toggle from '@components/Button/toggle'

import Google from '../../../public/assets/images/google.png'

const Login = () => {
	const router = useRouter()
	const [email, setEmail] = useState(null)
	const [errorEmail, setErrorEmail] = useState(null)
	const [password, setPassword] = useState(null)
	const [errorPassword, setErrorPassword] = useState(null)
	const { isLoggingIn, loginUser } = useLogin()

	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get('callbackUrl') || '/main'

	const onSubmit = async () => {
		await loginUser({
			email: email,
			password: password,
		})
	}

	return (
		<div className="bg-gradient-to-r from-green-500 to-blue-300 w-full h-[100vh] float-left px-[200px]">
			<div className=" h-[100vh] float-left text-neutral-900 w-full flex items-center justify-center">
				<div className="w-full bg-white rounded-xl shadow md:mt-0 sm:max-w-md xl:p-0 ">
					<div className="p-6 space-y-4 ">
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
									className="block mb-2 text-sm font-medium text-gray-900"
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
								<div className="flex items-center h-5 justify-end mt-[10px]">
									<Link
										href="forgot-password"
										className="text-sm font-light text-gray-500 hover:underline text-[12px]"
									>
										Forgot password?{' '}
									</Link>
								</div>
							</div>
							<Button
								title="login"
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
							<p className="text-sm font-light text-gray-500 pt-[20px]">
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
