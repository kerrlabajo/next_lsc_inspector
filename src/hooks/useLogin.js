'use client'

import { useState } from 'react'
import UsersService from '@services/UsersService'
import useUserStore from './../useStore'

const useLogin = () => {
	const [isLoggingIn, setIsLoggingIn] = useState(false)
	const setUser = useUserStore((state) => state.setUser)

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
				// await callback.loggedIn({ retrievedUser })
				setUser(retrievedUser)
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

	return { isLoggingIn, loginUser }
}

export default useLogin
