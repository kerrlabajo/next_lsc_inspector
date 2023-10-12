import { useState } from 'react'
import UsersService from '@services/UsersService'

const useEdit = () => {
	const [isUpdating, setIsUpdating] = useState(false)

	const updatePassword = async (id, token, body, callback) => {
		setIsUpdating(true)

		let responseCode
		let retrievedUser

		try {
			const { status, data } = await UsersService.editPassword(id, token, body)
			responseCode = status
			retrievedUser = data
		} catch (error) {
			responseCode = error.response.error
		}
		switch (responseCode) {
			case 200:
				await callback.success()
				break
			case 401:
				await callback.invalidFields()
				break
			case 500:
				await callback.internalError()
				break
		}
		setIsUpdating(false)
	}

	return { updatePassword, isUpdating }
}

export default useEdit
