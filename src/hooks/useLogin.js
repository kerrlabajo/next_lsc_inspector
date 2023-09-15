'use client'

import { useState } from 'react'
import UsersService from '@services/UsersService'

const useLogin = () => {
	const [isLogginIn, setIsLoggingIn] = useState(false)

	const loginUser = async ({ email, password, callback }) => {
		setIsLoggingIn(true)

		let responseCode
		let retrievedUser

		try {
			const { status, data } = await UsersService.login({
				email,
				password,
			})

			responseCode = status
			retrievedUser = data
		} catch (error) {
			responseCode = error.response.status
		}

		switch (responseCode) {
			case 200:
				await callback.loggedIn({ retrievedUser })
				break
			case 401:
				await callback.invalidFields()
				break
			case 500:
				await callback.internalError()
				break
		}

		setIsLoggingIn(false)
	}

	return { isLogginIn, loginUser }
}

export default useLogin
