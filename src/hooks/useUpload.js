import { useState } from 'react'
import FilesServices from '@services/FilesServices'
import useUserStore from './../useStore'

	const useUpload = () => {
		const [isUploading, setIsUploading] = useState(false)

		const uploadFile = async ({ body, headers }) => {
			setIsUploading(true)

			let responseCode
			let fileUploaded
			console.log(body, headers)
			try {
				const { status, data } = await FilesServices.upload(body, headers)

				responseCode = status
				fileUploaded = data
				return(fileUploaded)
			} catch (error) {
				//responseCode = error.response.status
				console.log('iM HERE: ', body)
			}

<<<<<<< HEAD
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
=======
			responseCode = status
			fileUploaded = data

			return { data, status }
		} catch (error) {
			responseCode = error.response.status
			console.log('iM HERE: ', body)
>>>>>>> 29f1f22 (Implement analyze in demo page)
		}
		return { isUploading, uploadFile }
	}

export default useUpload
