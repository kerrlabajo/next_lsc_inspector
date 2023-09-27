import { useState } from 'react'
import FilesServices from '@services/FilesServices'
import useUserStore from './../useStore'

const useUpload = () => {
	const [isUploading, setIsUploading] = useState(false)

	const uploadFile = async ({ body }) => {
		setIsUploading(true)

		let responseCode
		let fileUploaded

		try {
			const { status, data } = await FilesServices.upload(body)

			responseCode = status
			fileUploaded = data
		} catch (error) {
			responseCode = error.response.status
			console.log('iM HERE: ', body)
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
	return { isUploading, uploadFile }
}

export default useUpload
