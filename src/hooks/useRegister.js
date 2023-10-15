import { useState } from 'react'

import UsersService from '@services/UsersService'
import useUserStore from './../useStore'
import useLogin from '@hooks/useLogin'

const useSignup = () => {
	const { login } = useUserStore()
	const { loginUser } = useLogin()
	const [isSigningUp, setIsSigningUp] = useState(false)

	const signupUser = async ({ username, email, password, callbacks }) => {
		setIsSigningUp(true)

		let responseCode
		let registeredUser

		try {
			const { status, data } = await UsersService.signup({
				username,
				email,
				password,
			})

			responseCode = status
			registeredUser = data
		} catch (error) {
			console.log('error: ', error)
			responseCode = error.response.status
		}

		switch (responseCode) {
			case 201:
				const user = await loginUser({
					email: email,
					password: password,
				})
				login(user.user.access_token, user)
				break
			case 400:
				await callbacks.invalidFields()
				break
			case 409:
				await callbacks.emailExists()
				break
			case 500:
				await callbacks.internalError()
				break
			default:
		}

		setIsSigningUp(false)
	}

	return { isSigningUp, signupUser }
}

export default useSignup
