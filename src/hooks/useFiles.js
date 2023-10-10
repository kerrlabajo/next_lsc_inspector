import { useEffect, useState } from 'react'
import FilesServices from '@services/FilesServices'

const useFiles = (token) => {
	const [isRetrieving, setIsRetrieving] = useState(false)
	const [files, setFiles] = useState(null)

	useEffect(() => {
		const retrieveFiles = async () => {
			setIsRetrieving(true)

			let responseCode
			let retrievedFiles
			try {
				const { status, data } = await FilesServices.getAll(token)

				responseCode = status
				retrievedFiles = data
			} catch (error) {
				console.error('Error retrieving file:', error)
				responseCode = error.response.error
			}
			switch (responseCode) {
				case 200:
					setFiles(retrievedFiles)
					break
				case 401:
					await callback.invalidFields()
					break
				case 500:
					await callback.internalError()
					break
			}
		}
		retrieveFiles()

		setIsRetrieving(false)
	}, [])

	return { isRetrieving, files }
}

export default useFiles
