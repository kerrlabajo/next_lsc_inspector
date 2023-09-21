import { useState } from 'react'
import { useRouter } from 'next/navigation'

import UsersService from '@services/UsersService'
import useUserStore from './../useStore'

const useSignup = () => {
	const router = useRouter()
	const [isSigningUp, setIsSigningUp] = useState(false)
	const setUser = useUserStore((state) => state.setUser)

	const signupUser = async ({ username, email, password }) => {
		setIsSigningUp(true)

		let responseCode
		let retrievedUser

		try {
			const { status, data } = await UsersService.signup({
				username,
				email,
				password,
			})

			responseCode = status
			retrievedUser = data
		} catch (error) {
			responseCode = error.response.error
		}

		switch (responseCode) {
			case 201:
				// await callbacks.signedUp({ retrievedUser })
				router.push('/login')
				break
			case 400:
				await callbacks.invalidFields()
				break
			case 409:
				await callbacks.usernameExists()
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
