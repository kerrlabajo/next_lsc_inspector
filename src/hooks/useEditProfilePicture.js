import UsersService from '@services/UsersService'
import { useState } from 'react'

const useEditProfilePicture = () => {
	const [isUploading, setIsUploading] = useState(null)

	const uploadPicture = async (id, token, file) => {
		setIsUploading(true)

		let responseCode
		let fileUploaded
		try {
			const { status, data } = await UsersService.edit_profile_picture(id, token, file)

			responseCode = status
			fileUploaded = data

			return { data, status }
		} catch (error) {
			console.log(error)
		}

		switch (responseCode) {
			case 201:
				break
			case 401:
				await callback.invalidFields()
				break
			case 500:
				await callback.internalError()
				break
		}

		setIsUploading(false)
	}
	return { isUploading, uploadPicture }
}

export default useEditProfilePicture
